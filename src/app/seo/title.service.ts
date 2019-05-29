import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

const APP_TITLE = 'ngx-web-starter';
const SEPARATOR = ' > ';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {}

  static ucFirst(text: string) {
    if (!text) {
      return text;
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  init() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        map(route => route.snapshot),
        map(snapshot => {
          if (snapshot.data.pageTitle) {
            if (snapshot.paramMap.get('id') !== null) {
              return (
                snapshot.data.pageTitle +
                SEPARATOR +
                snapshot.paramMap.get('id')
              );
            }
            return snapshot.data.pageTitle;
          } else {
            // If not, we do a little magic on the url to create an approximation
            return this.router.url.split('/').reduce((acc, frag) => {
              if (acc && frag) {
                acc += SEPARATOR;
              }
              return acc + TitleService.ucFirst(frag);
            });
          }
        })
      )
      .subscribe(pathString =>
        this.title.setTitle(`${APP_TITLE} | ${pathString}`)
      );
  }
}
