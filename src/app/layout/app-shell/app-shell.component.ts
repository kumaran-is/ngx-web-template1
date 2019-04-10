import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from '@app/layout/loading-indicator.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  ngOnInit() {
    this.isLoading$ = this.loadingIndicatorService.isLoading$;
  }
}
