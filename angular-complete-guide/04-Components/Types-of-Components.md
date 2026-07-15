# Angular Complete Guide (2026 Edition)

# Chapter 6 - Types of Components

> **Level:** Beginner → Intermediate

---

# 📑 Table of Contents

- [Why Different Types of Components?](#why-different-types-of-components)
- [Component Hierarchy](#component-hierarchy)
- [Types of Components](#types-of-components)
  - [Root Component](#1-root-component)
  - [Feature Component](#2-feature-component)
  - [Shared Component](#3-shared-component)
  - [Layout Component](#4-layout-component)
  - [Smart (Container) Component](#5-smart-container-component)
  - [Presentational (Dumb) Component](#6-presentational-dumb-component)
  - [Standalone Component](#7-standalone-component)
- [Folder Structure Example](#folder-structure-example)
- [Comparison Table](#comparison-table)
- [Best Practices](#best-practices)
- [Common Mistakes](#common-mistakes)
- [Interview Questions](#interview-questions)
- [Chapter Summary](#chapter-summary)

---

# Why Different Types of Components?

Imagine you're building an E-Commerce application.

If everything is inside one component...

```
App Component

↓

20,000 lines of code
```

It becomes impossible to maintain.

Instead we divide the application into smaller components.

```
App

│

├── Navbar

├── Sidebar

├── Product List

├── Product Card

├── Cart

├── Footer
```

Each component has only one responsibility.

---

# Component Hierarchy

Angular applications are organized like a tree.

```
App Component

│

├── Navbar

├── Home

│   │

│   ├── Banner

│   ├── Categories

│   ├── Product List

│   │     │

│   │     ├── Product Card

│   │     ├── Product Card

│   │     └── Product Card

│   │

│   └── Footer
```

This is called the **Component Tree**.

---

# Types of Components

Angular applications commonly use the following component types:

```
Components

│

├── Root Component

├── Feature Component

├── Shared Component

├── Layout Component

├── Smart Component

├── Presentational Component

└── Standalone Component
```

---

# 1. Root Component

The Root Component is the **first component** loaded by Angular.

It acts as the entry point of the application.

Usually

```
AppComponent
```

or in newer Angular projects

```
App
```

---

## Example

```typescript
@Component({

selector:'app-root',

templateUrl:'./app.html'

})

export class App{

}
```

Used inside

```html
<body>

<app-root></app-root>

</body>
```

Flow

```
main.ts

↓

App Component

↓

Entire Application
```

---

## Responsibilities

- Starts the application
- Hosts the router
- Contains global layout

---

# 2. Feature Component

Feature Components implement a specific feature.

Examples

```
Login

Dashboard

Products

Orders

Users

Profile
```

Each feature lives in its own folder.

Example

```
features

│

├── auth

├── dashboard

├── products

└── users
```

---

## Example

```
ProductsComponent
```

Responsible only for products.

---

# 3. Shared Component

Shared Components are reusable across the entire application.

Examples

```
Button

Input

Modal

Loader

Table

Card

Avatar
```

Folder

```
shared

│

├── button

├── modal

├── loader

└── card
```

Used everywhere.

---

## Example

```
ButtonComponent
```

Used on

- Login Page
- Register Page
- Dashboard
- Settings

Only written once.

---

# 4. Layout Component

Layout Components define page layouts.

Examples

```
Admin Layout

Auth Layout

Main Layout
```

Example

```
Admin Layout

│

├── Sidebar

├── Navbar

├── Router Outlet

└── Footer
```

---

## Example

```
AdminLayoutComponent
```

---

# 5. Smart (Container) Component

Also called

```
Container Component
```

Smart Components contain **business logic**.

Responsibilities

- Fetch API Data
- Handle Signals
- Handle RxJS
- Manage State
- Call Services

Example

```typescript
export class ProductsComponent{

products=[];

}
```

It fetches data.

---

## Example Flow

```
API

↓

Service

↓

Products Component

↓

Product Card
```

---

# 6. Presentational (Dumb) Component

Presentational Components only display data.

They should

- Receive data
- Display data
- Emit events

No API calls.

No business logic.

Example

```
Product Card
```

Receives

```typescript
product
```

Displays

```
Image

Title

Price
```

---

## Example

```typescript
@Component({

selector:'app-product-card'

})

export class ProductCard{

product=input<Product>();

}
```

---

Flow

```
Product Component

↓

Product Card

↓

Display UI
```

---

# Smart vs Presentational Component

```
Smart Component

↓

Fetch Data

↓

Business Logic

↓

Pass Data

↓

Presentational Component

↓

Display UI
```

---

# 7. Standalone Component

Modern Angular recommends Standalone Components.

Example

```typescript
@Component({

standalone:true,

imports:[],

selector:'app-home'

})

export class Home{

}
```

Benefits

- No NgModule
- Less Boilerplate
- Easier Development
- Better Performance

---

# Folder Structure Example

```
src

│

├── app

│

├── core

│

├── shared

│   │

│   ├── button

│   ├── loader

│   ├── modal

│

├── layouts

│   │

│   ├── admin

│   └── auth

│

├── features

│   │

│   ├── dashboard

│   ├── products

│   ├── orders

│   └── users

│

└── app.ts
```

---

# Real World Example

Amazon Homepage

```
App

│

├── Navbar

├── Search Bar

├── Banner

├── Product List

│      │

│      ├── Product Card

│      ├── Product Card

│      └── Product Card

├── Footer
```

Every part is a separate component.

---

# Comparison Table

| Component | Responsibility |
|------------|---------------|
| Root | Starts the application |
| Feature | Implements business features |
| Shared | Reusable UI |
| Layout | Defines page layout |
| Smart | Business logic |
| Presentational | UI only |
| Standalone | Independent component |

---

# Best Practices

✅ Keep components small.

✅ One responsibility per component.

✅ Separate UI from business logic.

✅ Use Shared Components for reusable UI.

✅ Use Feature Components for application features.

✅ Prefer Standalone Components in Angular 17+.

---

# Common Mistakes

❌ Putting everything inside AppComponent.

❌ Fetching API inside every child component.

❌ Duplicating UI.

❌ Creating huge components.

❌ Not separating business logic.

---

# Interview Questions

## What is the Root Component?

The first component loaded by Angular that starts the application.

---

## What is a Shared Component?

A reusable component used throughout the application.

Example

```
Button

Modal

Loader
```

---

## What is a Feature Component?

A component responsible for implementing a specific feature of the application.

---

## What is the difference between Smart and Presentational Components?

| Smart | Presentational |
|--------|----------------|
| Business Logic | UI Only |
| API Calls | No API Calls |
| State Management | Receives Data |
| Uses Services | Displays Data |

---

## Why are Standalone Components recommended?

Because they simplify Angular applications by removing the need for NgModules and reducing boilerplate code.

---

# Chapter Summary

- Angular applications are composed of multiple types of components.
- The Root Component starts the application.
- Feature Components implement business features.
- Shared Components provide reusable UI elements.
- Layout Components define page layouts.
- Smart Components handle business logic and data.
- Presentational Components focus only on rendering the UI.
- Standalone Components are the recommended approach in modern Angular applications.

---

## Next Chapter

➡️ **Chapter 7 – Component Communication**

In the next chapter you'll learn:

- Parent → Child Communication
- Child → Parent Communication
- `@Input()` (legacy)
- `input()` (modern)
- `@Output()` (legacy)
- `output()` (modern)
- `model()`
- EventEmitter
- Two-way Component Binding
- Real-world Communication Patterns