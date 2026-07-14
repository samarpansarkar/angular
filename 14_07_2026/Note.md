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

## Data Binding

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