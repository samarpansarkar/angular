# Angular CLI Commands

## Start the Development Server

```bash
# Start the Angular development server
ng serve

# Short form
ng s

# Start the server and automatically open the application in the browser
ng s -o
```

## Generate a Component

```bash
# Generate a new component
ng generate component component_name

# Short form
ng g c component_name
```

# Angular Data Binding

## What is Data Binding?

**Data Binding** is the mechanism that synchronizes data between the **Component (TypeScript)** and the **Template (HTML)**.

It allows Angular to automatically update the UI whenever the component data changes and vice versa.

```
Component (TypeScript)
        ↑   ↓
    Data Binding
        ↑   ↓
Template (HTML)
```

---

# Types of Data Binding

Angular provides **4 types of Data Binding**:

1. Interpolation (`{{ }}`)
2. Property Binding (`[]`)
3. Event Binding (`()`)
4. Two-Way Data Binding (`[()]`)

---

# 1. Interpolation

## Syntax

```html
{{ expression }}
```

Interpolation is used to display data from the component inside the HTML.

### Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Samarpan';
  age = 23;
}
```

### Template

```html
<h1>Hello {{ name }}</h1>

<p>Age: {{ age }}</p>

<p>Next Year: {{ age + 1 }}</p>
```

### Output

```text
Hello Samarpan

Age: 23

Next Year: 24
```

---

## Another Example

### Component

```typescript
export class AppComponent {
  price = 200;
  quantity = 5;
}
```

### Template

```html
Total Price = {{ price * quantity }}
```

### Output

```text
Total Price = 1000
```

---

# 2. Property Binding

## Syntax

```html
[property]="expression"
```

Property binding sends data **from Component → HTML Element Property**.

It is commonly used for:

- src
- href
- disabled
- value
- class
- style

---

## Example 1

### Component

```typescript
export class AppComponent {
  imageUrl = 'https://picsum.photos/300';
}
```

### Template

```html
<img [src]="imageUrl">
```

### Output

An image from `https://picsum.photos/300` is displayed.

---

## Example 2

### Component

```typescript
export class AppComponent {
  isDisabled = true;
}
```

### Template

```html
<button [disabled]="isDisabled">
    Save
</button>
```

### Output

```text
[ Save ]
```

The button is **disabled**.

---

## Example 3

```typescript
export class AppComponent {
  color = 'red';
}
```

```html
<h2 [style.color]="color">
    Angular
</h2>
```

### Output

```
Angular
```

The text appears **red**.

---

# 3. Event Binding

## Syntax

```html
(event)="method()"
```

Event binding sends data **from HTML → Component**.

It is used for events like:

- click
- input
- keyup
- keydown
- mouseenter
- mouseleave
- submit

---

## Example 1

### Component

```typescript
export class AppComponent {

  count = 0;

  increase() {
    this.count++;
  }

}
```

### Template

```html
<button (click)="increase()">
    Click Me
</button>

<p>{{ count }}</p>
```

### Output

Initially

```text
Click Me

0
```

After first click

```text
1
```

After second click

```text
2
```

---

## Example 2

### Component

```typescript
export class AppComponent {

  showMessage() {
    alert('Welcome');
  }

}
```

### Template

```html
<button (click)="showMessage()">
    Login
</button>
```

### Output

When clicked:

```text
Welcome
```

---

# 4. Two-Way Data Binding

## Syntax

```html
[(ngModel)]="variable"
```

Two-way binding combines:

- Property Binding
- Event Binding

It synchronizes data in **both directions**.

```
Component  ⇄  Template
```

Whenever the user changes the input, the component updates.

Whenever the component changes, the input updates.

---

## Import FormsModule

Before using `ngModel`, import `FormsModule`.

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})
export class AppModule {}
```

Or for standalone components:

```typescript
@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

---

## Example

### Component

```typescript
export class AppComponent {
  username = '';
}
```

### Template

```html
<input type="text" [(ngModel)]="username">

<p>Hello {{ username }}</p>
```

### Output

Initially

```text
Input: _______

Hello
```

User types:

```
Samarpan
```

Output

```text
Hello Samarpan
```

If later in the component:

```typescript
username = 'Angular';
```

The input automatically becomes

```text
Angular
```

---

# Data Flow Direction

| Data Binding | Direction | Purpose |
|--------------|-----------|----------|
| Interpolation | Component → View | Display text |
| Property Binding | Component → View | Set HTML properties |
| Event Binding | View → Component | Handle user events |
| Two-Way Binding | Component ⇄ View | Synchronize data |

---

# Visual Representation

## Interpolation

```
Component
    │
    ▼
Template

{{ name }}
```

---

## Property Binding

```
Component
    │
    ▼
HTML Property

[src]
[disabled]
[value]
```

---

## Event Binding

```
Button Click

    │
    ▼

Component Method
```

---

## Two-Way Binding

```
Component
    ▲   ▼
[(ngModel)]
    ▲   ▼
Input Box
```

---

# Real-World Example

### Component

```typescript
export class AppComponent {

  username = '';
  isDisabled = false;
  image = 'https://picsum.photos/200';

  login() {
    alert('Welcome ' + this.username);
  }

}
```

### Template

```html
<h2>Angular Data Binding Demo</h2>

<img [src]="image">

<br><br>

<input
  type="text"
  [(ngModel)]="username"
  placeholder="Enter name"
/>

<br><br>

<button
  [disabled]="isDisabled"
  (click)="login()"
>
  Login
</button>

<p>Hello {{ username }}</p>
```

### How It Works

- **Interpolation (`{{ username }}`)** displays the username.
- **Property Binding (`[src]`, `[disabled]`)** sets the image source and button state.
- **Event Binding (`(click)`)** calls the `login()` method when the button is clicked.
- **Two-Way Binding (`[(ngModel)]`)** keeps the input field and `username` property synchronized.

---

# Summary

| Binding Type | Syntax | Direction | Common Use Cases |
|--------------|--------|-----------|------------------|
| Interpolation | `{{ value }}` | Component → View | Display text and expressions |
| Property Binding | `[property]="value"` | Component → View | Set element properties like `src`, `disabled`, `value`, `class`, `style` |
| Event Binding | `(event)="method()"` | View → Component | Respond to user actions such as clicks, typing, and form submission |
| Two-Way Binding | `[(ngModel)]="value"` | Component ⇄ View | Keep form inputs and component state synchronized |

## Interpolation in Angular

**Interpolation** binds component data to the template using double curly braces `{{ }}`.

```typescript
// component.ts
export class AppComponent {
  title = 'My App';
  count = 5;
}
```

```html
<!-- template.html -->
<h1>{{ title }}</h1>
<p>Count: {{ count }}</p>
<p>Sum: {{ count + 5 }}</p>
```

## Key points

- One-way binding: **component → view** only
- Only accepts **expressions**, not statements (no `if`, `for`, assignments)
- Automatically calls `toString()` on the result
- Executes on every change detection cycle — avoid expensive method calls inside `{{ }}`

```html
<!-- Avoid this — runs on every CD cycle -->
<p>{{ getExpensiveValue() }}</p>

<!-- Prefer -->
<p>{{ cachedValue }}</p>
```


# Angular Signals

## What are Signals?

**Signals** are Angular's new reactive state management feature introduced in **Angular 16**. They provide a simple and efficient way to manage and track state changes in an Angular application without relying heavily on RxJS.

A **Signal** is a wrapper around a value that notifies Angular whenever the value changes, allowing the UI to update automatically.

---

# Why Signals?

Before Signals, Angular primarily relied on:

- Zone.js
- Change Detection
- RxJS Observables

These approaches worked well but often resulted in:

- Unnecessary change detection cycles
- More boilerplate code
- Complex state management
- Performance overhead in large applications

Signals solve these issues by making Angular's reactivity **fine-grained**, meaning only the parts of the UI that depend on a changed signal are updated.

---

# Benefits of Signals

- Better Performance
- Less Boilerplate Code
- Fine-Grained Reactivity
- Easy State Management
- Improved Readability
- No Need for Manual Change Detection
- Less Dependency on RxJS for Local State

---

# Creating a Signal

Import the `signal` function.

```typescript
import { signal } from '@angular/core';
```

Create a signal:

```typescript
count = signal(0);
```

Here:

- `count` is a Signal.
- Initial value is `0`.

---

# Reading a Signal

To access the value of a signal, call it like a function.

```typescript
count();
```

Example:

```typescript
console.log(count());
```

Output:

```
0
```

---

# Updating a Signal

## Method 1: set()

Replace the current value.

```typescript
count.set(10);
```

Output:

```
10
```

---

## Method 2: update()

Update the value using the previous value.

```typescript
count.update(value => value + 1);
```

Example:

```typescript
count.update(value => value + 5);
```

If current value is:

```
10
```

Output:

```
15
```

---

# Example

## component.ts

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
```

---

## component.html

```html
<h2>Counter: {{ count() }}</h2>

<button (click)="increment()">Increment</button>

<button (click)="decrement()">Decrement</button>

<button (click)="reset()">Reset</button>
```

---

# Computed Signals

A computed signal derives its value from one or more other signals.

Import:

```typescript
import { computed } from '@angular/core';
```

Example:

```typescript
count = signal(5);

doubleCount = computed(() => count() * 2);
```

Reading:

```typescript
doubleCount();
```

Output:

```
10
```

When:

```typescript
count.set(8);
```

Output:

```
doubleCount() = 16
```

No manual updates are required.

---

# Example

```typescript
price = signal(500);
quantity = signal(3);

total = computed(() => price() * quantity());
```

Result:

```
500 × 3 = 1500
```

Changing:

```typescript
quantity.set(5);
```

Automatically updates:

```
2500
```

---

# Effects

Effects run automatically whenever the signals they depend on change.

Import:

```typescript
import { effect } from '@angular/core';
```

Example:

```typescript
count = signal(0);

constructor() {
  effect(() => {
    console.log("Current Count:", count());
  });
}
```

Output:

```
Current Count: 0
```

After:

```typescript
count.set(5);
```

Output:

```
Current Count: 5
```

---

# Signal Methods

| Method | Description |
|----------|-------------|
| `signal()` | Creates a signal |
| `()` | Reads the signal value |
| `set()` | Replaces the current value |
| `update()` | Updates value using previous value |
| `computed()` | Creates derived state |
| `effect()` | Runs side effects when signals change |

---

# Signals vs Variables

## Normal Variable

```typescript
count = 0;

count++;
```

Angular may not know exactly what changed and can trigger broader change detection.

---

## Signal

```typescript
count = signal(0);

count.update(v => v + 1);
```

Angular knows exactly which UI depends on `count` and updates only those parts.

---

# Signals vs Observables

| Signals | Observables |
|----------|-------------|
| Hold current value | Represent a stream of values |
| Synchronous | Asynchronous by design |
| Easy to read | Require subscription |
| No unsubscribe needed | Must unsubscribe (unless handled automatically) |
| Great for component state | Great for HTTP, events, WebSockets |
| Simple API | Rich RxJS operators |

---

# When to Use Signals

Use Signals for:

- Component state
- Form state
- UI state
- Counters
- Theme switching
- Toggle buttons
- Local data
- Derived values

---

# When to Use RxJS

Use RxJS for:

- HTTP Requests
- WebSockets
- Timers
- Event streams
- Route parameters
- Complex asynchronous operations
- Combining multiple async streams

---

# Best Practices

- Use **Signals** for local component state.
- Use **Computed Signals** instead of manually recalculating values.
- Use **Effects** only for side effects (logging, local storage, API calls).
- Avoid mutating objects or arrays directly inside a signal. Instead, create a new value.

Example:

❌ Bad

```typescript
this.users().push(newUser);
```

✅ Good

```typescript
this.users.update(users => [...users, newUser]);
```

---

# Summary

- Signals are Angular's modern reactive state management solution.
- They provide fine-grained reactivity and better performance.
- `signal()` creates state.
- `set()` replaces the value.
- `update()` modifies the value based on the previous state.
- `computed()` creates derived values.
- `effect()` performs side effects when signals change.
- Signals reduce the need for RxJS in local state management while improving readability and maintainability.
