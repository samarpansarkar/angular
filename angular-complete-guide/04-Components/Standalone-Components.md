# Angular Complete Guide (2026 Edition)

# Chapter 7 - Standalone Components

> **Level:** Beginner → Intermediate

---

# 📑 Table of Contents

- [What are Standalone Components?](#what-are-standalone-components)
- [Why Were Standalone Components Introduced?](#why-were-standalone-components-introduced)
- [Problems with NgModules](#problems-with-ngmodules)
- [Benefits of Standalone Components](#benefits-of-standalone-components)
- [Creating a Standalone Component](#creating-a-standalone-component)
- [Understanding `standalone: true`](#understanding-standalone-true)
- [The `imports` Property](#the-imports-property)
- [Using Built-in Directives](#using-built-in-directives)
- [Using FormsModule](#using-formsmodule)
- [Using Router](#using-router)
- [Using Standalone Components Inside Other Components](#using-standalone-components-inside-other-components)
- [Bootstrapping a Standalone Application](#bootstrapping-a-standalone-application)
- [Standalone Pipes](#standalone-pipes)
- [Standalone Directives](#standalone-directives)
- [Routing with Standalone Components](#routing-with-standalone-components)
- [Lazy Loading](#lazy-loading)
- [Standalone Components vs NgModules](#standalone-components-vs-ngmodules)
- [Migration from NgModules](#migration-from-ngmodules)
- [Folder Structure](#folder-structure)
- [Best Practices](#best-practices)
- [Common Mistakes](#common-mistakes)
- [Interview Questions](#interview-questions)
- [Chapter Summary](#chapter-summary)

---

# What are Standalone Components?

A **Standalone Component** is a component that **does not need to be declared inside an NgModule**.

Instead, it manages its own dependencies using the `imports` property.

> Standalone Components are the **recommended way** to build Angular applications in Angular 17+.

---

# Why Were Standalone Components Introduced?

Earlier Angular applications depended heavily on **NgModules**.

Example

```
AppModule

│

├── HomeComponent

├── LoginComponent

├── RegisterComponent

├── DashboardComponent

└── ProductComponent
```

As applications became larger,

- Modules became difficult to manage.
- Too much boilerplate code was required.
- Developers often created modules just to declare a component.

Angular introduced Standalone Components to simplify this architecture.

---

# Problems with NgModules

Before Standalone Components:

```
Component

↓

Declare in Module

↓

Export

↓

Import Module

↓

Use Component
```

Too many steps.

With Standalone Components:

```
Component

↓

Import Component

↓

Use Component
```

Much simpler.

---

# Benefits of Standalone Components

- No NgModule required.
- Less boilerplate code.
- Easier to understand.
- Better lazy loading.
- Better tree shaking.
- Faster application startup.
- Simpler dependency management.

---

# Creating a Standalone Component

Using Angular CLI

```bash
ng generate component home --standalone
```

Short form

```bash
ng g c home --standalone
```

Angular creates

```
home

│

├── home.ts

├── home.html

├── home.css

└── home.spec.ts
```

---

# Understanding `standalone: true`

Example

```typescript
import { Component } from '@angular/core';

@Component({

selector:'app-home',

standalone:true,

templateUrl:'./home.html',

styleUrl:'./home.css'

})

export class Home{

}
```

This tells Angular

```
This component is independent.

No NgModule required.
```

---

# The `imports` Property

Standalone Components import everything they need.

Example

```typescript
imports:[

CommonModule,

FormsModule

]
```

Without imports

```html
<input [(ngModel)]="name">
```

Produces

```
Can't bind to ngModel
```

because FormsModule isn't imported.

---

# Using Built-in Directives

To use

```
*ngIf

*ngFor

ngClass

ngStyle
```

Import

```typescript
import { CommonModule } from '@angular/common';

@Component({

imports:[CommonModule]

})
```

---

# Using FormsModule

To use

```html
[(ngModel)]
```

Import

```typescript
import { FormsModule } from '@angular/forms';

@Component({

imports:[FormsModule]

})
```

---

# Using Router

For

```html
<a routerLink="/home">
```

Import

```typescript
imports:[RouterLink]
```

For

```html
<router-outlet>
```

Import

```typescript
imports:[RouterOutlet]
```

---

# Using Standalone Components Inside Other Components

Example

```
Navbar Component

↓

Imported into

↓

App Component
```

Example

```typescript
imports:[

NavbarComponent

]
```

HTML

```html
<app-navbar></app-navbar>
```

---

# Bootstrapping a Standalone Application

Modern Angular starts from

```
main.ts
```

Example

```typescript
import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';

bootstrapApplication(App);
```

Flow

```
Browser

↓

main.ts

↓

bootstrapApplication()

↓

App Component

↓

Application Starts
```

---

# Standalone Pipes

Example

```typescript
@Pipe({

name:'title',

standalone:true

})
```

Import

```typescript
imports:[

TitlePipe

]
```

---

# Standalone Directives

Example

```typescript
@Directive({

selector:'[appHighlight]',

standalone:true

})
```

Import

```typescript
imports:[

HighlightDirective

]
```

---

# Routing with Standalone Components

Example

```typescript
export const routes=[

{

path:'',

component:HomeComponent

}

];
```

Application configuration

```typescript
provideRouter(routes)
```

---

# Lazy Loading

Standalone Components simplify lazy loading.

Example

```typescript
{

path:'products',

loadComponent:()=>

import('./products/products')

.then(c=>c.Products)

}
```

No feature module required.

---

# Standalone Components vs NgModules

| Standalone | NgModule |
|------------|----------|
| No Module Required | Module Required |
| Less Boilerplate | More Boilerplate |
| Better Lazy Loading | More Configuration |
| Easier to Learn | More Complex |
| Recommended | Legacy |

---

# Migration from NgModules

Old

```
AppModule

↓

Declarations

↓

Imports

↓

Bootstrap
```

Modern

```
main.ts

↓

bootstrapApplication()

↓

Standalone Components
```

---

# Folder Structure

```
src

│

├── app

│

├── components

│

├── pages

│

├── layouts

│

├── shared

│

└── app.config.ts
```

---

# Real World Example

```
App

│

├── Navbar

├── Dashboard

├── Products

├── Orders

└── Footer
```

Each is a Standalone Component.

---

# Best Practices

- Always create new components as standalone.
- Import only the dependencies you need.
- Prefer `provideRouter()` over `RouterModule`.
- Prefer `provideHttpClient()` over `HttpClientModule`.
- Keep components focused on one responsibility.
- Organize components by feature.

---

# Common Mistakes

❌ Forgetting

```typescript
standalone:true
```

---

❌ Forgetting

```typescript
imports:[FormsModule]
```

---

❌ Forgetting

```typescript
imports:[CommonModule]
```

---

❌ Importing unnecessary modules.

---

# Interview Questions

## What is a Standalone Component?

A component that works independently without being declared inside an NgModule.

---

## Why were Standalone Components introduced?

To simplify Angular applications by reducing boilerplate and removing the dependency on NgModules.

---

## Which property makes a component standalone?

```typescript
standalone:true
```

---

## How do you import dependencies in a Standalone Component?

Using the `imports` property.

---

## Which function starts a Standalone Angular application?

```typescript
bootstrapApplication()
```

---

## Which API is used for routing in standalone applications?

```typescript
provideRouter()
```

---

# Chapter Summary

- Standalone Components are the modern way to build Angular applications.
- They eliminate the need for NgModules.
- Dependencies are managed through the `imports` property.
- Applications are started using `bootstrapApplication()`.
- Standalone Components simplify routing, lazy loading, and application architecture.
- Modern Angular applications should prefer Standalone Components for new development.

---

## Next Chapter

➡️ **Chapter 8 – Component Communication**
- Parent → Child
- Child → Parent
- `input()`
- `output()`
- `model()`
- EventEmitter
- Signal-based communication
- Real-world communication patterns