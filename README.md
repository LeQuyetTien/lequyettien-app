# lequyettien-app
Build a Progressive Web App (PWA) with Ionic Framework and Firebase Hosting

# Build a Progressive Web App (PWA) with Ionic Framework

[Get started with Ionic](https://ionicframework.com/getting-started#install)

## 1. Install Ionic

Install [Node.js](https://nodejs.org/en/), then install the latest Ionic command-line tools in your terminal. Follow the [Android](https://ionicframework.com/docs/developing/android) and [iOS](https://ionicframework.com/docs/developing/ios) platform guides to install their required tools.

```cmd
npm install -g @ionic/cli
```

## 2. Start an Ionic app

```cmd
ionic start lequyettien-app tabs --type=angular --capacitor --package-id=com.lequyettien.app
```

## 3. Run your app

```cmd
cd lequyettien-app
ionic serve
```

# Connect to Github

## 1. Create new repository on Github

[Github](https://github.com)

## 2. Link Ionic project to repository on Github

```cmd
git remote add origin https://github.com/lequyettien/lequyettien-app
```
```cmd
git pull --allow-unrelated-histories
```
```cmd
git branch --set-upstream-to=origin/master master
```
```cmd
git push
```

# Progressive Web Apps in Angular

## Making your Angular app a PWA

[Progressive Web Apps in Angular](https://ionicframework.com/docs/angular/pwa)

```cmd
ng add @angular/pwa
```

## Service Worker configuration

# Deploy to Firebase Hosting

## Firebase

Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html).

First, if not already available, [create the project](https://console.firebase.google.com/) in Firebase.

Next, in a Terminal, install the Firebase CLI:

```cmd
npm install -g firebase-tools
```

```cmd
firebase init
```

```cmd
ionic build --prod
```

```cmd
firebase deploy
```
