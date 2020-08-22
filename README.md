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

# Deploy to Firebase Hosting
