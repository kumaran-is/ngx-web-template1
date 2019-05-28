import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { StopSubscribe } from '@api/stop-subscribe';
import { FirestoreAPIService } from '@app/api-services/firestore-api.service';
import { Credential } from '@app/auth/models/credential.model';
import { User } from '@app/auth/models/user.model';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends StopSubscribe {
  private loginURL: '/signin';
  private user: firebase.User;
  // preserve route state to redirect user after successful login/signup
  private redirectUrl: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private firestoreAPIService: FirestoreAPIService,
    private router: Router
  ) {
    super();
  }

  initAuthListener() {
    this.subscriptions.add(
      this.angularFireAuth.authState.subscribe(
        user => this.authenticationChangeState(user),
        error => this.onError(error)
      )
    );
  }

  public signupWithEmail(credential: Credential): Promise<any> {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(credential.email, credential.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        const user: User = this.buildUserObject(userCredential.user);
        return this.updateUserProfile(user);
      })
      .catch(error => {
        console.error(`ERROR while Signin with Email`);
        throw error;
      });
  }

  public loginWithEmail(
    credential: Credential
  ): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      credential.email,
      credential.password
    );
  }

  public loginWithOAuthProvider(oAuthProvider: string): Promise<any> {
    let userData: firebase.auth.UserCredential;
    return this.loginWithPopup(this.getOAuthProvider(oAuthProvider))
      .then((userCredential: firebase.auth.UserCredential) => {
        userData = userCredential;
        return userData;
      })
      .then(this.isUserRecordExists.bind(this))
      .then(isRecordExists => {
        if (!isRecordExists) {
          const user: User = this.buildUserObject(userData.user);
          return this.updateUserProfile(user);
        } else {
          return;
        }
      });
  }

  public updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<any> {
    return this.reAuthenticate(oldPassword).then(
      (userCredential: firebase.auth.UserCredential) => {
        return this.user.updatePassword(newPassword);
      }
    );
  }

  public resetPassword(email: string): Promise<void> {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  public changePassword(
    confirmationCode: string,
    newPassword: string
  ): Promise<void> {
    return this.angularFireAuth.auth.confirmPasswordReset(
      confirmationCode,
      newPassword
    );
  }

  public getUserProfile(): Observable<User> {
    if (!this.user) {
      return of(null);
    }
    return this.firestoreAPIService.docWithMetaData$(
      `/users/${this.user.uid}/`
    );
  }

  public isUserAuthenticated(): boolean {
    return !!this.user;
  }

  public getUserId(): string {
    return this.user.uid;
  }

  public getUserName(): string {
    if (this.user) {
      if (this.user.displayName) {
        return this.user.displayName;
      } else if (this.user.email) {
        return this.user.email;
      } else {
        return 'Guest';
      }
    }
  }

  public updateUserProfile(user: User): Promise<any> {
    const path = `users/${user.uid}`;
    return this.firestoreAPIService.update(path, user);
  }

  public signOut(): Promise<void> {
    return this.angularFireAuth.auth.signOut();
  }

  public navigateToRedirectUrlAfterAuth(): void {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/home']);
    }
  }

  public setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  public getLoginURL(): string {
    return this.loginURL;
  }

  public isUserAccountTaken(
    userName: string,
    source: string
  ): Observable<boolean> {
    return this.firestoreAPIService
      .collection$(`users`, ref =>
        ref.where('email', '==', userName.toLowerCase())
      )
      .pipe(map(response => response.length !== 0));
  }

  private reAuthenticate(
    oldPassword: string
  ): Promise<firebase.auth.UserCredential> {
    const credentials = firebase.auth.EmailAuthProvider.credential(
      this.user.email,
      oldPassword
    );
    return this.user.reauthenticateAndRetrieveDataWithCredential(credentials);
  }

  private isUserRecordExists(
    userCredential: firebase.auth.UserCredential
  ): Promise<boolean> {
    return this.firestoreAPIService
      .doc$(`/users/${userCredential.user.uid}/`)
      .pipe(
        first(),
        map(Boolean)
      )
      .toPromise();
  }

  private getOAuthProvider(oAuthProvider: string) {
    switch (oAuthProvider) {
      case 'facebook':
        return new firebase.auth.FacebookAuthProvider();
      case 'google':
        return new firebase.auth.GoogleAuthProvider();
      case 'phone':
        return new firebase.auth.PhoneAuthProvider();
    }
  }

  private loginWithPopup(provider: firebase.auth.AuthProvider): Promise<any> {
    return this.angularFireAuth.auth.signInWithPopup(provider).catch(error => {
      console.error(
        `ERROR while Signin with OAuth Service Provider ${provider.providerId}`
      );
      throw error;
    });
  }

  private loginWithRedirect(
    provider: firebase.auth.AuthProvider
  ): Promise<any> {
    return this.angularFireAuth.auth
      .signInWithRedirect(provider)
      .catch(error => {
        console.error(
          `ERROR while Signin with OAuth Service Provider ${
            provider.providerId
          }`
        );
        throw error;
      });
  }

  private authenticationChangeState(user: any = null) {
    if (user) {
      this.user = user;
    } else {
      this.user = null;
      this.redirectUrl = null;
    }
  }

  private buildUserObject(userData: any): User {
    const user: User = new User();
    user.uid = userData.uid;
    user.displayName = userData.displayName;
    user.email = userData.email;
    user.phoneNumber = userData.phoneNumber;
    user.photoURL = userData.photoURL;
    if (userData.metadata) {
      user.createdAt = userData.metadata.creationTime;
    }
    return user;
  }

  private onError(error: any) {
    console.log(error);
  }
}
