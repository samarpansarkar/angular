# Angular Complete Guide (2026 Edition)

# Chapter 3 - Angular Project Structure

> **Level:** Beginner

---

# 📑 Table of Contents

- [Why Learn the Project Structure?](#why-learn-the-project-structure)
- [Project Structure Overview](#project-structure-overview)
- [Root Folder](#root-folder)
- [src Folder](#src-folder)
- [app Folder](#app-folder)
- [main.ts](#maints)
- [app.config.ts](#appconfigts)
- [app.routes.ts](#approutests)
- [index.html](#indexhtml)
- [styles.css](#stylescss)
- [assets Folder](#assets-folder)
- [public Folder](#public-folder)
- [package.json](#packagejson)
- [angular.json](#angularjson)
- [tsconfig.json](#tsconfigjson)
- [node_modules](#node_modules)
- [Modern Angular Folder Structure](#modern-angular-folder-structure)
- [Application Startup Flow](#application-startup-flow)
- [Best Practices](#best-practices)
- [Interview Questions](#interview-questions)
- [Chapter Summary](#chapter-summary)

---

# Why Learn the Project Structure?

Understanding the project structure helps you know:

- Where to write code
- Where Angular starts the application
- Where components are stored
- Where routes are defined
- Where global styles are written
- How Angular bootstraps the application

---

# Project Structure Overview

A newly created Angular project looks like this.

```
my-app

│

├── .angular
├── .vscode
├── node_modules
├── public
├── src
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
```

Each folder has a specific purpose.

---

# Root Folder

The root folder contains project configuration files.

```
my-app

│

├── src
├── public
├── node_modules
├── angular.json
├── package.json
├── tsconfig.json
```

Think of it as the **brain of the project**.

---

# src Folder

The **src** folder contains the actual Angular application.

```
src

│

├── app
├── assets
├── favicon.ico
├── index.html
├── main.ts
└── styles.css
```

Almost all application development happens inside the **src** folder.

---

# app Folder

The **app** folder contains the application code.

Example

```
app

│

├── app.ts
├── app.html
├── app.css
├── app.spec.ts
├── app.config.ts
└── app.routes.ts
```

As your application grows, you'll also have folders like:

```
app

│

├── components
├── pages
├── services
├── models
├── guards
├── interceptors
├── pipes
├── directives
├── shared
└── layouts
```

---

# main.ts

This is the **entry point** of every Angular application.

Angular starts executing from this file.

Example

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
```

Flow

```
Browser

↓

main.ts

↓

App Component

↓

Application Starts
```

---

# app.config.ts

Contains global application configuration.

Example

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

Common providers include:

- Routing
- HTTP Client
- Animations
- State Management

---

# app.routes.ts

Contains application routes.

Example

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [

];
```

Later chapters will cover routing in detail.

---

# index.html

The only HTML page loaded by the browser.

Example

```html
<!DOCTYPE html>

<html>

<head>

</head>

<body>

  <app-root></app-root>

</body>

</html>
```

Angular replaces

```
<app-root>
```

with your application.

---

# styles.css

Contains global styles.

Example

```css
body{
    margin:0;
    padding:0;
}
```

Global styles affect every component.

---

# assets Folder

Stores static resources.

Examples

```
assets

│

├── images
├── icons
├── fonts
├── videos
└── json
```

---

# public Folder

Contains files that are copied directly to the build output without processing.

Examples:

- robots.txt
- manifest.webmanifest
- static images
- downloadable files

---

# package.json

The most important configuration file.

Contains

- Project information
- Dependencies
- Scripts
- Angular packages

Example

```json
{
  "name":"my-app",

  "scripts":{

      "start":"ng serve",

      "build":"ng build"

  }
}
```

Useful commands

```
npm start

npm run build
```

---

# angular.json

Angular workspace configuration.

Contains

- Build settings
- Assets
- Styles
- Scripts
- Output folder

Angular CLI reads this file during build.

---

# tsconfig.json

TypeScript configuration.

Contains compiler options.

Example

```json
{

"compilerOptions":{

    "strict":true

}

}
```

---

# node_modules

Contains every installed package.

```
node_modules

│

├── @angular
├── rxjs
├── zone.js
├── typescript
```

Never edit this folder manually.

---

# Modern Angular Folder Structure

For medium and large projects, a common structure is:

```
src

│

├── app
│
├── core
│
│   ├── guards
│   ├── interceptors
│   ├── services
│
├── shared
│
│   ├── components
│   ├── directives
│   ├── pipes
│
├── features
│
│   ├── auth
│   ├── dashboard
│   ├── users
│   └── products
│
├── layouts
│
├── assets
│
└── environments
```

This keeps the application modular and scalable.

---

# Application Startup Flow

Understanding how Angular starts is important.

```
Browser

↓

index.html

↓

main.ts

↓

bootstrapApplication()

↓

App Component

↓

Router

↓

Requested Component

↓

Rendered UI
```

---

# File Responsibility

| File | Responsibility |
|------|----------------|
| main.ts | Entry point |
| app.config.ts | Global providers |
| app.routes.ts | Routing configuration |
| index.html | Root HTML page |
| styles.css | Global styles |
| angular.json | Angular workspace configuration |
| package.json | Dependencies & scripts |
| tsconfig.json | TypeScript configuration |

---

# Best Practices

- Keep feature-related files together.
- Use feature folders for large applications.
- Place reusable components inside a `shared` folder.
- Put singleton services inside a `core` folder.
- Never modify files inside `node_modules`.
- Store images, fonts, and icons inside the `assets` folder.
- Keep global styles in `styles.css` and component-specific styles inside their respective components.

---

# Interview Questions

## Where does Angular start executing?

**Answer**

```
main.ts
```

---

## Which file contains application routes?

**Answer**

```
app.routes.ts
```

---

## Which file contains global styles?

**Answer**

```
styles.css
```

---

## Which file contains project dependencies?

**Answer**

```
package.json
```

---

## Which folder stores images and fonts?

**Answer**

```
assets/
```

---

## Why should you never edit the `node_modules` folder?

**Answer**

Because it contains third-party packages managed by npm. Any changes can be overwritten when dependencies are reinstalled.

---

# Chapter Summary

- `main.ts` is the entry point of an Angular application.
- `index.html` is the single HTML page loaded by the browser.
- `app.config.ts` configures application-wide providers.
- `app.routes.ts` defines navigation routes.
- `package.json` manages project dependencies and scripts.
- `angular.json` controls Angular CLI build settings.
- `tsconfig.json` configures the TypeScript compiler.
- The `assets` folder stores static resources, while `node_modules` contains installed packages.
- Organizing code into `core`, `shared`, and `features` folders helps build scalable Angular applications.

---

## Next Chapter

➡️ **Chapter 4 – Components**