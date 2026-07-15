# Angular Complete Guide (2026 Edition)

# Chapter 4 - Components

> **Level:** Beginner

---

# 📑 Table of Contents

- [What is a Component?](#what-is-a-component)
- [Why Do We Need Components?](#why-do-we-need-components)
- [Real World Analogy](#real-world-analogy)
- [Component-Based Architecture](#component-based-architecture)
- [Anatomy of a Component](#anatomy-of-a-component)
- [Creating a Component](#creating-a-component)
- [Component Naming Convention](#component-naming-convention)
- [Component Selector](#component-selector)
- [Component Template](#component-template)
- [Component Styles](#component-styles)
- [How Angular Renders Components](#how-angular-renders-components)
- [Component Hierarchy](#component-hierarchy)
- [Component Lifecycle Overview](#component-lifecycle-overview)
- [Standalone Components](#standalone-components)
- [Best Practices](#best-practices)
- [Common Mistakes](#common-mistakes)
- [Interview Questions](#interview-questions)
- [Chapter Summary](#chapter-summary)

---

# What is a Component?

A **Component** is the **basic building block** of every Angular application.

Every piece of the UI you see on the screen is usually a component.

Examples:

- Navbar
- Sidebar
- Login Form
- Product Card
- Footer
- Dashboard
- Profile Card

Everything is built using components.

---

## Definition

> A Component is a self-contained, reusable block of UI that consists of a template, styles, and business logic.

---

# Why Do We Need Components?

Imagine building an e-commerce website.

Without components:

```
Home Page

5000+ lines of HTML

2000+ lines of CSS

3000+ lines of TypeScript
```

Managing such a file becomes difficult.

Instead, Angular divides the application into smaller reusable pieces.

Example:

```
Home Page

│

├── Navbar

├── Sidebar

├── Banner

├── Categories

├── Product List

├── Footer
```

Each part becomes an independent component.

Benefits:

- Reusability
- Easy maintenance
- Better readability
- Easier debugging
- Team collaboration

---

# Real World Analogy

Think about a **car**.

A car is made of many smaller parts.

```
Car

│

├── Engine

├── Wheels

├── Doors

├── Seats

├── Steering
```

Each part has its own responsibility.

Similarly,

```
Angular App

│

├── Navbar

├── Sidebar

├── Footer

├── Product Card

├── Login Form
```

Each component has one responsibility.

---

# Component-Based Architecture

Angular follows a **Component-Based Architecture**.

Instead of building one huge page, we build many small components.

```
Application

│

├── App Component

│

├── Home Component

│

├── Product Component

│

├── Cart Component

│

├── Checkout Component

│

└── Footer Component
```

---

# Anatomy of a Component

A component consists of three main parts.

```
Component

│

├── HTML

│

├── CSS

│

└── TypeScript
```

Example

```
product-card

│

├── product-card.html

├── product-card.css

└── product-card.ts
```

---

# Creating a Component

Using Angular CLI

```bash
ng generate component home
```

Short form

```bash
ng g c home
```

Angular automatically creates

```
home

│

├── home.ts

├── home.html

├── home.css

└── home.spec.ts
```

---

# Component Naming Convention

Angular follows kebab-case.

Correct

```
login-form

user-profile

product-card
```

Wrong

```
LoginForm

UserProfile

ProductCard
```

Class names use PascalCase.

Example

```typescript
export class ProductCard {

}
```

---

# Component Selector

Every component has a selector.

Example

```typescript
@Component({

selector:'app-home'

})
```

It is used inside HTML.

```html
<app-home></app-home>
```

Angular replaces this selector with the component's template.

---

# Component Template

The template defines what the user sees.

Example

```html
<h1>Welcome</h1>

<p>Angular Components</p>
```

Templates can be written in

```
template
```

or

```
templateUrl
```

---

Inline Template

```typescript
@Component({

template:`
<h1>Hello</h1>
`

})
```

External Template

```typescript
@Component({

templateUrl:'./home.html'

})
```

---

# Component Styles

Each component can have its own styles.

Example

```typescript
@Component({

styleUrl:'./home.css'

})
```

or

```typescript
@Component({

styles:[`

h1{

color:red;

}

`]

})
```

---

# How Angular Renders Components

Application starts

```
main.ts

↓

bootstrapApplication()

↓

App Component

↓

Template

↓

Browser DOM
```

Whenever the component data changes,

Angular updates only the affected part of the UI.

---

# Component Hierarchy

Components can contain other components.

Example

```
App

│

├── Navbar

├── Home

│     │

│     ├── Banner

│     ├── Product Card

│     └── Categories

└── Footer
```

This creates a **Component Tree**.

---

# Component Lifecycle Overview

Every component goes through a lifecycle.

```
Created

↓

Initialized

↓

Rendered

↓

Updated

↓

Destroyed
```

Angular provides lifecycle hooks to interact with each stage.

We will study them in detail later.

---

# Standalone Components

Modern Angular uses **Standalone Components**.

Example

```typescript
@Component({

selector:'app-home',

standalone:true,

imports:[],

templateUrl:'./home.html'

})

export class Home{

}
```

Benefits

- No NgModule required
- Simpler structure
- Faster development
- Better tree shaking

---

# Component vs HTML

| HTML | Component |
|-------|-----------|
| Static | Dynamic |
| No logic | Contains logic |
| Cannot fetch data | Can fetch data |
| Not reusable | Reusable |
| Plain markup | HTML + CSS + TypeScript |

---

# Component vs Module

| Component | Module |
|------------|---------|
| UI Building Block | Groups Components |
| Has Template | No UI |
| Reusable | Organizes Features |

> **Note:** In modern Angular, standalone components reduce the need for feature modules, but you'll still encounter NgModules in many existing projects.

---

# Best Practices

- Keep components small.
- One component should have one responsibility.
- Move business logic to services.
- Reuse components whenever possible.
- Prefer standalone components in new Angular projects.
- Use meaningful component names.
- Keep templates clean and readable.

---

# Common Mistakes

❌ Creating huge components.

❌ Writing API logic inside every component.

❌ Duplicating UI.

❌ Not reusing components.

❌ Using unclear names like

```
TestComponent

DemoComponent
```

Instead

```
LoginFormComponent

NavbarComponent

ProductCardComponent
```

---

# Interview Questions

## What is a Component?

A Component is the basic building block of an Angular application. It controls a portion of the user interface and consists of a template, styles, and TypeScript logic.

---

## Why are components reusable?

Because they are self-contained and can be used multiple times throughout an application.

---

## What is a selector?

A selector is a custom HTML tag used to render a component.

Example

```html
<app-home></app-home>
```

---

## What are the three main parts of a component?

- Template (HTML)
- Styles (CSS)
- Logic (TypeScript)

---

## What is a standalone component?

A standalone component is a component that can work without being declared inside an NgModule.

---

# Chapter Summary

- Components are the foundation of Angular applications.
- Every UI element is typically represented by a component.
- A component contains HTML, CSS, and TypeScript.
- Components promote reusability, maintainability, and separation of concerns.
- Angular applications are organized as a tree of components.
- Modern Angular encourages the use of standalone components instead of relying on NgModules.

---

## Next Chapter

➡️ **Chapter 5 – The `@Component` Decorator (Deep Dive)**

In the next chapter, we'll explore every property of the `@Component` decorator in detail, including:

- `selector`
- `template`
- `templateUrl`
- `styles`
- `styleUrl`
- `imports`
- `standalone`
- `providers`
- `encapsulation`
- `changeDetection`
- `host`
- `animations`
- and modern Angular best practices.