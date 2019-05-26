import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@app/auth/services/auth.service';
import { DocumentService } from '@core/util/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private documentService: DocumentService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      'facebook-box',
      domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/facebook-box.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'github-box',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-box.svg')
    );
    matIconRegistry.addSvgIcon(
      'instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
    matIconRegistry.addSvgIcon(
      'twitter-box',
      domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/twitter-box.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'youtube',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg')
    );
  }

  public ngOnInit() {
    this.authService.initAuthListener();
    this.documentService.setGoToTopButtonPosition('go-top');
  }

  public goToTop() {
    this.documentService.scrollUp();
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    this.documentService.setGoToTopButtonPosition('go-top');
  }
}
