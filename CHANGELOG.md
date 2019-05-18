# Changelog

<a name="v0.0.10"></a>
## 0.0.10 (2019-05-01)

#### Bug Fixes
* Added Angular Ivy, since it throws error while building due to Angular flexlayout we disabled it temporarily [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

#### Features
* Implement Authentication using Firebase Authentication sevrice [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]
* Update Karma config with headless chrome [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Upgraded to Angular 8 RC version 8.0.0-rc.4 [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added proxy configuration to run SPA on local machine connecting to Web API service [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added [font-display](https://scotch.io/bar-talk/google-fonts-now-supports-font-display?utm_content=buffer90f3e&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer), a css feature to load google fonts and icons [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

* Added environment configurations, build and serve scripts for latest and stage [[PR 10](https://github.com/kumaran-is/ngx-web-starter/pull/10)]

#### Breaking Changes
* NA

<a name="v0.0.9"></a>
## 0.0.9 (2019-05-01)

#### Bug Fixes
* NA

#### Features
* Upgraded to Angular 8 RC version 8.0.0-rc.2 [[PR 9](https://github.com/kumaran-is/ngx-web-starter/pull/9)]

#### Breaking Changes
* NA

<a name="v0.0.8"></a>
## 0.0.8 (2019-04-17)

#### Bug Fixes
* NA

#### Features
* Implemented OAuth providers (Google and Facebook) login/signup flow using firebase authentication services [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Implemented authentication using Sign-up and sign-in with email accounts (email/password and email link) using firebase authentication services [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Implemented change password, forgot password, manage user profile etc using firebase authentication services [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Phone number based authentication [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Prevention of account duplication (activated when "One account per email address" setting is enabled in the Firebase console. This setting is enabled by default.) [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Sign-in as a guest [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]
* Ability to upgrade anonymous users through sign-in/sign-up [[PR 8](https://github.com/kumaran-is/ngx-web-starter/pull/8)]

#### Breaking Changes
* NA

<a name="v0.0.7"></a>
## 0.0.7 (2019-04-11)

#### Bug Fixes
* NA

#### Features
* Integrated basic firstore settings, services and  authentication feature [[PR 7](https://github.com/kumaran-is/ngx-web-starter/pull/7)]

#### Breaking Changes
* NA

<a name="v0.0.6"></a>
## 0.0.6 (2019-04-10)

#### Bug Fixes
* NA

#### Features
* Improved and optimized application loader indicator [[PR 6](https://github.com/kumaran-is/ngx-web-starter/pull/6)]

#### Breaking Changes
* NA

<a name="v0.0.5"></a>
## 0.0.5 (2019-04-10)

#### Bug Fixes
* NA

#### Features
* Renamed project name and repo to `ngx-web-starter` [[PR 5](https://github.com/kumaran-is/ngx-web-starter/pull/5)]

#### Breaking Changes
* NA

<a name="v0.0.4"></a>
## 0.0.4 (2019-03-07)

#### Bug Fixes
* NA

#### Features
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

#### Breaking Changes
* NA

<a name="v0.0.3"></a>
## 0.0.3 (2019-03-04)

#### Bug Fixes
* NA

#### Features
* Published angular application to github page using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) [[PR 3](https://github.com/kumaran-is/ngx-web-starter/pull/3)]

#### Breaking Changes
* NA

<a name="v0.0.2"></a>
## 0.0.2 (2019-02-22)

#### Bug Fixes
* NA

#### Features
Added following basic features[[PR 2](https://github.com/kumaran-is/ngx-web-starter/pull/2)] :

* Added 3 row layout (header, main and footer) using [Angular Flex-Layout](https://github.com/angular/flex-layout) and [Angular Material](https://material.angular.io/)

* Added boiler-plate code for [NgRx](https://ngrx.io/) state management

* Added all needed build and tool to npm scripts

#### Breaking Changes
* NA


<a name="v0.0.1"></a>
## 0.0.1 (2019-02-22)

#### Bug Fixes
* NA

#### Features
* Initial project structure generated  with  [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1 [[PR 1](https://github.com/kumaran-is/ngx-web-starter/pull/1)]

#### Breaking Changes
* NA
