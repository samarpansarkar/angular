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