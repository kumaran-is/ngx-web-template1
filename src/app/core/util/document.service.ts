import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public setGoToTopButtonPosition(id: string): void {
    if (
      this.document.body.scrollTop > 20 ||
      this.document.documentElement.scrollTop > 20
    ) {
      this.document.getElementById(id).style.display = 'block';
    } else {
      this.document.getElementById(id).style.display = 'none';
    }
  }

  public scrollUp(): void {
    this.document.body.scrollTop = this.document.documentElement.scrollTop = 0;
  }
}
