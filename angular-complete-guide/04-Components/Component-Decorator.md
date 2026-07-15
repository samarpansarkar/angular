# Angular Complete Guide (2026 Edition)

# Chapter 5 - The `@Component` Decorator (Deep Dive)

> **Level:** Beginner → Intermediate

---

# 📑 Table of Contents

- [What is a Decorator?](#what-is-a-decorator)
- [What is the @Component Decorator?](#what-is-the-component-decorator)
- [Basic Syntax](#basic-syntax)
- [Component Metadata](#component-metadata)
- [selector](#selector)
- [template](#template)
- [templateUrl](#templateurl)
- [styles](#styles)
- [styleUrl](#styleurl)
- [standalone](#standalone)
- [imports](#imports)
- [providers](#providers)
- [encapsulation](#encapsulation)
- [changeDetection](#changedetection)
- [host](#host)
- [Component Metadata Summary](#component-metadata-summary)
- [Complete Example](#complete-example)
- [Best Practices](#best-practices)
- [Common Mistakes](#common-mistakes)
- [Interview Questions](#interview-questions)
- [Chapter Summary](#chapter-summary)

---

# What is a Decorator?

A **Decorator** is a special function in TypeScript that adds metadata to a class, method, property, or parameter.

Angular uses decorators so that it knows **how a class should behave**.

Some common Angular decorators are:

| Decorator | Purpose |
|-----------|----------|
| `@Component` | Marks a class as a Component |
| `@Directive` | Marks a class as a Directive |
| `@Injectable` | Marks a class as a Service |
| `@Pipe` | Marks a class as a Pipe |
| `@NgModule` | Groups Angular artifacts (Legacy) |

---

# What is the `@Component` Decorator?

The `@Component` decorator tells Angular that a TypeScript class is a **Component**.

It also provides metadata that Angular uses to create and render the component.

Without the `@Component` decorator, Angular treats the class as a normal TypeScript class.

---

# Basic Syntax

```typescript
import { Component } from '@angular/core';

@Component({

})
export class HomeComponent {

}
```

Everything inside `@Component({ ... })` is called **Component Metadata**.

---

# Component Metadata

```
@Component

│

├── selector

├── template

├── templateUrl

├── styles

├── styleUrl

├── standalone

├── imports

├── providers

├── encapsulation

├── changeDetection

└── host
```

Let's understand each property.

---

# selector

The **selector** defines the custom HTML tag used to display the component.

Example

```typescript
@Component({

selector:'app-home'

})
```

Usage

```html
<app-home></app-home>
```

Angular replaces

```
<app-home>
```

with the component's template.

---

## Naming Convention

Always use

```
app-
```

or

```
feature-
```

Example

```
app-navbar

app-footer

app-login

app-dashboard
```

---

# template

Defines an **inline HTML template**.

Example

```typescript
@Component({

template:`

<h1>Welcome</h1>

<p>Angular</p>

`

})
```

Useful for small components.

---

# templateUrl

Loads HTML from a separate file.

Example

```typescript
@Component({

templateUrl:'./home.html'

})
```

Recommended for almost all production applications.

---

# template vs templateUrl

| template | templateUrl |
|-----------|-------------|
| Inline HTML | External HTML File |
| Good for small examples | Recommended for real projects |
| Difficult to maintain | Easier to read |

---

# styles

Defines inline CSS.

Example

```typescript
@Component({

styles:[`

h1{

color:red;

}

`]

})
```

Useful only for small demos.

---

# styleUrl

Loads CSS from a separate file.

Example

```typescript
@Component({

styleUrl:'./home.css'

})
```

Angular 17+ supports `styleUrl`.

Older Angular versions use

```typescript
styleUrls:['./home.css']
```

---

# styles vs styleUrl

| styles | styleUrl |
|----------|-----------|
| Inline CSS | External CSS File |
| Small demos | Production applications |

---

# standalone

Modern Angular introduces Standalone Components.

Example

```typescript
@Component({

standalone:true

})
```

Benefits

- No NgModule required
- Simpler architecture
- Better tree shaking
- Faster development

---

# imports

Imports dependencies used by the component.

Example

```typescript
@Component({

standalone:true,

imports:[

CommonModule,

FormsModule

]

})
```

Examples

```
CommonModule

FormsModule

ReactiveFormsModule

RouterLink

RouterOutlet
```

Without importing required dependencies, Angular cannot use them.

Example

```
NG8002

Can't bind to ngModel
```

Solution

```typescript
imports:[FormsModule]
```

---

# providers

Registers services only for this component.

Example

```typescript
@Component({

providers:[

UserService

]

})
```

Usually, services are provided globally.

Use component-level providers only when a separate instance is required.

---

# encapsulation

Controls how component styles are applied.

Angular supports three types.

---

## ViewEncapsulation.Emulated

(Default)

```typescript
encapsulation:ViewEncapsulation.Emulated
```

Styles are scoped to the component.

---

## ViewEncapsulation.None

```typescript
encapsulation:ViewEncapsulation.None
```

Styles become global.

---

## ViewEncapsulation.ShadowDom

Uses the browser's Shadow DOM.

```typescript
encapsulation:ViewEncapsulation.ShadowDom
```

Mostly used for Web Components.

---

# changeDetection

Controls Angular's change detection strategy.

---

## Default

```typescript
changeDetection:ChangeDetectionStrategy.Default
```

Checks the component whenever Angular runs change detection.

---

## OnPush

```typescript
changeDetection:ChangeDetectionStrategy.OnPush
```

Only checks when:

- Input changes
- Signal changes
- Observable emits
- Event occurs

Provides better performance.

---

# host

Binds properties directly to the component's host element.

Example

```typescript
@Component({

host:{

'class':'card',

'role':'button'

}

})
```

Result

```html
<app-card class="card" role="button">
```

---

# Complete Example

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({

selector:'app-home',

standalone:true,

imports:[CommonModule],

templateUrl:'./home.html',

styleUrl:'./home.css'

})

export class HomeComponent{

title="Angular";

}
```

---

# How Angular Uses Component Metadata

```
@Component()

↓

Angular Compiler

↓

Creates Component Definition

↓

Browser

↓

Rendered UI
```

---

# Component Metadata Summary

| Property | Purpose |
|-----------|----------|
| selector | HTML tag |
| template | Inline HTML |
| templateUrl | External HTML |
| styles | Inline CSS |
| styleUrl | External CSS |
| standalone | Standalone component |
| imports | Import dependencies |
| providers | Register services |
| encapsulation | Style isolation |
| changeDetection | Performance strategy |
| host | Host element bindings |

---

# Best Practices

✅ Use `templateUrl` for real applications.

✅ Use `styleUrl` (Angular 17+) or `styleUrls` (older Angular versions).

✅ Prefer standalone components.

✅ Import only required modules.

✅ Keep component metadata clean.

✅ Use `OnPush` change detection where appropriate for performance.

---

# Common Mistakes

❌ Forgetting `standalone:true`

```typescript
imports:[CommonModule]
```

without

```typescript
standalone:true
```

---

❌ Forgetting FormsModule

```
Can't bind to ngModel
```

---

❌ Using

```typescript
template
```

for hundreds of lines of HTML.

Always use

```typescript
templateUrl
```

---

❌ Importing everything.

Only import what the component actually needs.

---

# Interview Questions

## What is the purpose of the `@Component` decorator?

It tells Angular that a class is a Component and provides metadata used to create and render it.

---

## What is metadata?

Metadata is configuration information that tells Angular how the component should behave.

---

## What is the difference between `template` and `templateUrl`?

- `template` uses inline HTML.
- `templateUrl` loads HTML from a separate file.

---

## What is the purpose of `selector`?

It defines the custom HTML tag used to render the component.

---

## Why do we use `imports` in standalone components?

Because standalone components don't belong to an NgModule. All required directives, pipes, and components must be imported directly.

---

## What is the default style encapsulation?

```
ViewEncapsulation.Emulated
```

---

## Which change detection strategy provides better performance?

```
ChangeDetectionStrategy.OnPush
```

---

# Chapter Summary

- `@Component` is an Angular decorator that converts a TypeScript class into a component.
- The metadata inside `@Component` tells Angular how the component should be created and rendered.
- Common metadata properties include `selector`, `templateUrl`, `styleUrl`, `standalone`, and `imports`.
- Standalone components are the recommended approach in modern Angular.
- Understanding the `@Component` decorator is essential because every Angular component is configured through it.

---

## Next Chapter

➡️ **Chapter 6 – Types of Components**

In the next chapter you'll learn:

- Root Component
- Feature Component
- Shared Component
- Layout Component
- Smart (Container) Component
- Presentational (Dumb) Component
- Standalone Component
- Real-world folder organization