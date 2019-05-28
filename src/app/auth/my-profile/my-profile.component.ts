import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '@app/auth/models/address.model';
import { Payment } from '@app/auth/models/payment.model';
import { User } from '@app/auth/models/user.model';
import { AuthService } from '@app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public userProfile$: Observable<User>;
  public personalInfoErrorMsg: string;
  public personalInfoSuccessMsg: string;
  public userAddress$: Observable<Address>;
  public addressInfoErrorMsg: string;
  public addressInfoSuccessMsg: string;
  public userPayment$: Observable<Payment>;
  public paymentInfoErrorMsg: string;
  public paymentInfoSuccessMsg: string;
  public updatePasswordErrorMsg: string;
  public updatePasswordSuccessMsg: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userProfile$ = this.authService.getUserProfile();
  }

  public onModifyPersonalInfo(user: User) {
    user.uid = this.authService.getUserId();
    this.authService
      .updateUserProfile(user)
      .then(() => {
        this.personalInfoSuccessMsg = `Your personal info has been updated`;
      })
      .catch(error => {
        console.error('Error while updating user profile', error);
        this.personalInfoErrorMsg = `Error while updating your personal info please try after
                            sometime or call help desk`;
      });
  }

  public onModifyAddressInfo(address: Address) {
    console.log('Modify Address Info');
  }

  public onModifyPaymentInfo(payment: Payment) {
    console.log('Modify Payment Info');
  }

  public onUpdateUserPassword(passwordObj: any) {
    console.log('update Password button');
    this.authService
      .updatePassword(passwordObj.oldPassword, passwordObj.newPassword)
      .then(() => {
        console.log('successfully updated password');
        this.updatePasswordSuccessMsg = `Your password has been updated. Next time login with new password`;
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          this.updatePasswordErrorMsg =
            'Old password entered is invalid. Please try again';
        } else {
          this.updatePasswordErrorMsg = error.message;
        }
        console.error(`Error while updating password`, error);
      });
  }
}
