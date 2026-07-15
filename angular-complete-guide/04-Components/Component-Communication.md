# Angular Complete Guide (2026 Edition)

# Chapter 8 - Component Communication

> **Level:** Beginner → Intermediate

---

# 📑 Table of Contents

- [What is Component Communication?](#what-is-component-communication)
- [Why Do We Need Component Communication?](#why-do-we-need-component-communication)
- [Component Communication Flow](#component-communication-flow)
- [Types of Component Communication](#types-of-component-communication)
- [Parent → Child Communication](#parent--child-communication)
  - [Using `@Input()` (Legacy)](#using-input-legacy)
  - [Using `input()` (Modern)](#using-input-modern)
- [Child → Parent Communication](#child--parent-communication)
  - [Using `@Output()` (Legacy)](#using-output-legacy)
  - [Using `output()` (Modern)](#using-output-modern)
- [Two-Way Component Communication (`model()`)](#two-way-component-communication-model)
- [Passing Objects](#passing-objects)
- [Passing Arrays](#passing-arrays)
- [Passing Functions](#passing-functions)
- [Sibling Component Communication](#sibling-component-communication)
- [Communication Using Services](#communication-using-services)
- [Communication Using Signals](#communication-using-signals)
- [Choosing the Right Communication Pattern](#choosing-the-right-communication-pattern)
- [Best Practices](#best-practices)
- [Common Mistakes](#common-mistakes)
- [Interview Questions](#interview-questions)
- [Chapter Summary](#chapter-summary)

---

# What is Component Communication?

In Angular, components rarely work in isolation. They often need to **share data** or **notify each other about events**.

This process is called **Component Communication**.

> **Definition:** Component Communication is the process of exchanging data or events between Angular components.

---

# Why Do We Need Component Communication?

Imagine an e-commerce application.

```
App

│

├── Navbar

├── Product List

│      │

│      ├── Product Card

│      ├── Product Card

│      └── Product Card

├── Cart

└── Footer
```

Questions:

- How does `Product Card` know which product to display?
- How does clicking **Add to Cart** update the Cart?
- How does the Navbar know the cart count?

The answer is **Component Communication**.

---

# Component Communication Flow

```
Parent Component

↓

Pass Data

↓

Child Component

↓

User Click

↓

Child Sends Event

↓

Parent Updates Data

↓

UI Updates
```

---

# Types of Component Communication

| Communication | Modern Angular | Legacy Angular |
|---------------|---------------|----------------|
| Parent → Child | `input()` | `@Input()` |
| Child → Parent | `output()` | `@Output()` |
| Two-Way | `model()` | `@Input()` + `@Output()` |
| Sibling | Shared Service / Signals | Shared Service |
| Global | Signals / Services | Services + RxJS |

---

# Parent → Child Communication

Parent components send data to child components.

Example:

```
Products Component

↓

Product Card

↓

Product Card

↓

Product Card
```

Each Product Card receives a different product.

---

# Using `@Input()` (Legacy)

### Parent Component

```typescript
products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' }
];
```

```html
<app-product-card
  *ngFor="let product of products"
  [product]="product">
</app-product-card>
```

---

### Child Component

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html'
})
export class ProductCardComponent {

  @Input()
  product!: { id: number; name: string };

}
```

---

# Using `input()` (Modern)

Angular 17+ introduced **Signal Inputs**.

### Child Component

```typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html'
})
export class ProductCardComponent {

  product = input.required<{
    id: number;
    name: string;
  }>();

}
```

### Template

```html
<h2>{{ product().name }}</h2>
```

Notice that a signal input is read using:

```typescript
product()
```

---

# Parent → Child Flow

```
Parent

↓

[input]

↓

Child

↓

Display Data
```

---

# Child → Parent Communication

Sometimes the child needs to notify the parent.

Example:

```
User Clicks

↓

Add to Cart

↓

Notify Parent

↓

Update Cart
```

---

# Using `@Output()` (Legacy)

### Child

```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter'
})
export class CounterComponent {

  @Output()
  increment = new EventEmitter<void>();

  onClick() {
    this.increment.emit();
  }

}
```

### Child Template

```html
<button (click)="onClick()">
  Increment
</button>
```

---

### Parent

```html
<app-counter
  (increment)="increaseCounter()">
</app-counter>
```

---

# Using `output()` (Modern)

Angular provides the `output()` API.

```typescript
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true
})
export class CounterComponent {

  increment = output<void>();

  onClick() {
    this.increment.emit();
  }

}
```

Usage is identical:

```html
<app-counter
  (increment)="increaseCounter()">
</app-counter>
```

---

# Child → Parent Flow

```
Child

↓

output()

↓

Parent

↓

Update State
```

---

# Two-Way Component Communication (`model()`)

Angular introduced `model()` for component-level two-way binding.

### Child

```typescript
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true
})
export class CounterComponent {

  count = model(0);

  increment() {
    this.count.update(value => value + 1);
  }

}
```

### Parent

```html
<app-counter [(count)]="counter"></app-counter>
```

This works similarly to:

```html
[(ngModel)]
```

but for **component communication**.

---

# Passing Objects

Parent

```typescript
user = {
  id: 1,
  name: 'Samarpan'
};
```

```html
<app-profile
  [user]="user">
</app-profile>
```

Child

```typescript
user = input.required<User>();
```

---

# Passing Arrays

Parent

```typescript
users = [
  'Ram',
  'Shyam',
  'John'
];
```

```html
<app-user-list
  [users]="users">
</app-user-list>
```

Child

```typescript
users = input<string[]>([]);
```

---

# Passing Functions

Sometimes the parent passes a callback.

Parent

```typescript
save() {
  console.log('Saved');
}
```

```html
<app-editor
  [save]="save">
</app-editor>
```

Child

```typescript
save = input<() => void>();

onSave() {
  this.save()?.();
}
```

---

# Sibling Component Communication

Example

```
Navbar

Cart
```

These components are siblings.

They cannot communicate directly.

```
App

│

├── Navbar

└── Cart
```

The parent coordinates communication or both use a shared service.

---

# Communication Using Services

```
Navbar

↓

Cart Service

↑

Cart
```

Example

```typescript
@Injectable({
  providedIn: 'root'
})
export class CartService {

  count = signal(0);

}
```

Both components inject the same service.

---

# Communication Using Signals

Modern Angular prefers signals for shared state.

```typescript
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark = signal(false);

}
```

Navbar

```typescript
theme.isDark();
```

Settings

```typescript
theme.isDark.set(true);
```

Both components stay synchronized automatically.

---

# Choosing the Right Communication Pattern

| Situation | Recommended Approach |
|-----------|----------------------|
| Parent → Child | `input()` |
| Child → Parent | `output()` |
| Two-Way Binding | `model()` |
| Siblings | Shared Service + Signals |
| Application-wide State | Signals or dedicated state management |

---

# Best Practices

- Prefer `input()` over `@Input()` in new Angular projects.
- Prefer `output()` over `@Output()` where available.
- Use `model()` for two-way component binding.
- Keep business logic in services.
- Use signals for shared state.
- Keep communication simple and predictable.

---

# Common Mistakes

❌ Mutating objects received through inputs.

❌ Calling parent methods directly from a child.

❌ Using services for simple parent-child communication.

❌ Passing too many inputs to a single component.

❌ Creating tightly coupled components.

---

# Interview Questions

## What is Component Communication?

It is the process of exchanging data or events between Angular components.

---

## Which API is used for Parent → Child communication?

Modern Angular:

```typescript
input()
```

Legacy:

```typescript
@Input()
```

---

## Which API is used for Child → Parent communication?

Modern Angular:

```typescript
output()
```

Legacy:

```typescript
@Output()
```

---

## What is `model()`?

`model()` enables two-way binding between a parent and a child component using Angular Signals.

---

## How do sibling components communicate?

Typically through:

- A shared service
- Signals
- A common parent component

---

## When should you use a shared service?

When unrelated or sibling components need to share data or state.

---

# Chapter Summary

- Components communicate by exchanging **data** and **events**.
- Parent → Child communication is achieved using `input()` (or `@Input()` in legacy code).
- Child → Parent communication is achieved using `output()` (or `@Output()`).
- `model()` provides two-way component binding.
- Sibling components usually communicate through shared services or signals.
- Modern Angular encourages using **Signals** for reactive shared state and **standalone APIs** (`input()`, `output()`, `model()`) for component communication.

---

## Next Chapter

➡️ **Chapter 9 – Data Binding**

You'll learn:

- Interpolation
- Property Binding
- Event Binding
- Two-Way Binding
- One-Way vs Two-Way Binding
- Real-world Examples
- Best Practices