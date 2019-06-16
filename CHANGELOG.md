# Changelog

<a name="v0.0.18"></a>

## 0.0.18 (2019-06-16)

### Bug Fixes

* NA

### Features

* Added route path to login/registration dialog box [[PR 19](https://github.com/kumaran-is/ngx-web-starter/pull/19)]

### Breaking Changes

* NA

<a name="v0.0.17"></a>

## 0.0.17 (2019-06-02)

### Bug Fixes

* NA

### Features

* Route cleanup [[PR 18](https://github.com/kumaran-is/ngx-web-starter/pull/18)]
* Upgraded NGRX to v8.0.0 [[PR 18](https://github.com/kumaran-is/ngx-web-starter/pull/18)]
* Implemented pre-load strategy using guess.js (but not working) [[PR 18](https://github.com/kumaran-is/ngx-web-starter/pull/18)]

### Breaking Changes

* NA

<a name="v0.0.16"></a>

## 0.0.16 (2019-06-02)

### Bug Fixes

* NA

### Features

* Implemented `network aware` pre-load strategy, it uses the browser's [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection) to detect the connection and speed. If the speed qualifies as good, then it preloads the bundles. If not, it leaves them alone [[PR 17](https://github.com/kumaran-is/ngx-web-starter/pull/17)]

* The `on demand` strategy preloads one or more routes when a user performs a specific action. For more detail refer [here](https://dev.to/azure/predictive-preloading-strategy-for-your-angular-bundles-4bgl) [[PR 17](https://github.com/kumaran-is/ngx-web-starter/pull/17)]

* Implemented preloading strategy that automatically downloads the lazy-loaded modules associated with all the visible links using [ngx-quicklink](https://www.npmjs.com/package/ngx-quicklink) [[PR 17](https://github.com/kumaran-is/ngx-web-starter/pull/17)]

### Breaking Changes

* NA

<a name="v0.0.15"></a>

## 0.0.15 (2019-06-01)

### Bug Fixes

* Fix Auth guard issue [[PR 16](https://github.com/kumaran-is/ngx-web-starter/pull/16)]

* Updated route configuration for `page not found` component [[PR 16](https://github.com/kumaran-is/ngx-web-starter/pull/16)]

* Updated auth guard to use `angularFireAuth.user` API to check whether user is authenticated or not [[PR 16](https://github.com/kumaran-is/ngx-web-starter/pull/16)]

### Features

* NA

### Breaking Changes

* NA

<a name="v0.0.14"></a>

## 0.0.14 (2019-05-29)

### Bug Fixes

* NA

### Features

* Auth guard cleanup [[PR 15](https://github.com/kumaran-is/ngx-web-starter/pull/15)]
* Upgraded @angular/fire to 5.2.1 [[PR 15](https://github.com/kumaran-is/ngx-web-starter/pull/15)]

### Breaking Changes

* NA

<a name="v0.0.13"></a>

## 0.0.13 (2019-05-29)

### Bug Fixes

* NA

### Features

* Upgraded Angular to final release version 8.0.0 [[PR 13](https://github.com/kumaran-is/ngx-web-starter/pull/13)]
* Increased Budget value in `angular.json` to avoid error. This will be fixed later[[PR 13](https://github.com/kumaran-is/ngx-web-starter/pull/13)]

### Breaking Changes

* NA

<a name="v0.0.12"></a>

## 0.0.12 (2019-05-28)

### Bug Fixes

* NA

### Features

* Implemented Guard for Authentication [[PR 12](https://github.com/kumaran-is/ngx-web-starter/pull/12)]
* Implemented SelectivePreloadStrategyService to lazy load modules [[PR 12](https://github.com/kumaran-is/ngx-web-starter/pull/12)]
* Implemented Title Service to dynamically update the `<title>` tag for SEO [[PR 12](https://github.com/kumaran-is/ngx-web-starter/pull/12)] 

### Breaking Changes

* NA

<a name="v0.0.11"></a>

## 0.0.11 (2019-05-24)

### Bug Fixes

* NA

### Features

* Implement Authentication using Firebase Authentication service [[PR 11](https://github.com/kumaran-is/ngx-web-starter/pull/11)]

* Upgraded to Angular 8 RC version 8.0.0-rc.5 [[PR 11](https://github.com/kumaran-is/ngx-web-starter/pull/11)]

* Added skeleton pages for checkout, payment and order confirmation [[PR 11](https://github.com/kumaran-is/ngx-web-starter/pull/11)]

### Breaking Changes

* NA

<a name="v0.0.10"></a>

## 0.0.10 (2019-05-01)

### Bug Fixes

* Added Angular Ivy, since it throws error while building due to Angular flexlayout we disabled it temporarily [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

### Features

* Update Karma config with headless chrome [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Upgraded to Angular 8 RC version 8.0.0-rc.4 [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added proxy configuration to run SPA on local machine connecting to Web API service [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added [font-display](https://scotch.io/bar-talk/google-fonts-now-supports-font-display?utm_content=buffer90f3e&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer), a css feature to load google fonts and icons [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added environment configurations, build and serve scripts for latest and stage [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added rules backup file for tslint-angular, tslint-immutable/all, rxjs-tslint-rules and tslint-eslint-rules. These rules will be enabled later [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Unsubscribing RXJS during Page Refresh, Tab Close, Browser Close, Navigation Away From Page by annotating `ngDestroy` using `HostListener` [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Updated files and folder to align with Angular 8 RC version 8.0.0-rc.4 [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

### Breaking Changes

* NA

<a name="v0.0.9"></a>

## 0.0.9 (2019-05-01)

### Bug Fixes

* NA

### Features

* Upgraded to Angular 8 RC version 8.0.0-rc.2 [[PR 9](https://github.com/kumaran-is/ngx-web-starter/pull/9)]

### Breaking Changes

* NA

<a name="v0.0.8"></a>

## 0.0.8 (2019-04-17)

#### Bug Fixes

* NA

### Features

* Implemented OAuth providers (Google and Facebook) login/signup flow using firebase authentication services [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Implemented authentication using Sign-up and sign-in with email accounts (email/password and email link) using firebase authentication services [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Implemented change password, forgot password, manage user profile etc using firebase authentication services [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Phone number based authentication [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Prevention of account duplication (activated when "One account per email address" setting is enabled in the Firebase console. This setting is enabled by default.) [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Sign-in as a guest [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Ability to upgrade anonymous users through sign-in/sign-up [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]

### Breaking Changes

* NA

<a name="v0.0.7"></a>

## 0.0.7 (2019-04-11)

### Bug Fixes

* NA

### Features

* Integrated basic firstore settings, services and  authentication feature [[PR 7](https://github.com/kumaran-is/ngx-web-starter/pull/7)]

#### Breaking Changes
* NA

<a name="v0.0.6"></a>

## 0.0.6 (2019-04-10)

#### Bug Fixes

* NA

#### Features

* Improved and optimized application loader indicator [[PR 6](https://github.com/kumaran-is/ngx-web-starter/pull/6)]

### Breaking Changes

* NA

<a name="v0.0.5"></a>

## 0.0.5 (2019-04-10)

### Bug Fixes

* NA

#### Features

* Renamed project name and repo to `ngx-web-starter` [[PR 5](https://github.com/kumaran-is/ngx-web-starter/pull/5)]

#### Breaking Changes

* NA

<a name="v0.0.4"></a>

## 0.0.4 (2019-03-07)

### Bug Fixes

* NA

### Features

* Organized an optimized and scalable folder structure and implemented best practices [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Added code for custom themes [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Added custom palette colors [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Fixed the height of navigation menu bar [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Generated initial code for authentication components and services [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Upgraded dependent and dev dependency node library versions [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Added support to apply gradient colors to theme [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Updated [Browserslist](./src/browserslist) configurations that automatically add autoprefixer to ensure compatibility with different browser and browser versions. Excluded browser <= IE 10 [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Implemented loading indicator to show loading progress between route changes using [Angular Material Progress Bar](https://material.angular.io/components/progress-bar/overview) and Angular Router Events [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Implemented parallax effect using SCSS [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Implemented shrinkable second row header menu bar on scrolling down/up using [Angular Material CDK](https://material.angular.io/cdk/scrolling/api) `ScrollingModule` and SCSS [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Added scrollPositionRestoration and anchorScrolling to be 'enabled' for Angular routing, so when navigating back, the page stays at the same position before you left[[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]
* Added application loading indicator [[PR 4](https://github.com/kumaran-is/ngx-web-starter/pull/4)]

### Breaking Changes

* NA

<a name="v0.0.3"></a>

## 0.0.3 (2019-03-04)

### Bug Fixes

* NA

### Features

* Published angular application to github page using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) [[PR 3](https://github.com/kumaran-is/ngx-web-starter/pull/3)]

#### Breaking Changes

* NA

<a name="v0.0.2"></a>

## 0.0.2 (2019-02-22)

### Bug Fixes

* NA

### Features

Added following basic features[[PR 2](https://github.com/kumaran-is/ngx-web-starter/pull/2)] :

* Added 3 row layout (header, main and footer) using [Angular Flex-Layout](https://github.com/angular/flex-layout) and [Angular Material](https://material.angular.io/)

* Added boiler-plate code for [NgRx](https://ngrx.io/) state management

* Added all needed build and tool to npm scripts

### Breaking Changes

* NA

<a name="v0.0.1"></a>

## 0.0.1 (2019-02-22)

### Bug Fixes

* NA

### Features

* Initial project structure generated  with  [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1 [[PR 1](https://github.com/kumaran-is/ngx-web-starter/pull/1)]

### Breaking Changes

* NA
