# TechVault — Static Product List in React

A React-based product landing page that renders a static list of products using reusable components, array mapping, and CSS styling. Built with Vite for fast development.
https://youtu.be/_tNfHWiBYRk
## App Overview

TechVault is a single-page storefront that displays a curated list of tech products. Users can browse items and click "Add to Cart" to increment a cart counter in the navbar. The app is fully responsive and supports light/dark mode.

## How Each Requirement Was Achieved

### ProductList Component (`src/ProductList.jsx`)

Created a dedicated `ProductList` component responsible for rendering the product data. This keeps product rendering logic separate from the main `App` component, following React's component-based architecture.

### Product Data

Defined a `products` constant array directly inside `ProductList.jsx`. Each product is an object with four properties:

- `id` — unique identifier
- `name` — product title
- `description` — short product summary
- `price` — numeric price value

Six products are included: Laptop, Wireless Headphones, Mechanical Keyboard, 4K Monitor, Portable SSD, and Webcam Pro.

### Rendering the List

**Mapping Data:** Used JavaScript's `Array.map()` to iterate over the `products` array and return a JSX `<article>` element for each product.

**Structure:** Each product renders as a card with:
- Product name (`<h3>`)
- Description (`<p>`)
- Price (formatted with `toFixed(2)`)
- An "Add to Cart" button

**Unique Keys:** Each mapped element receives `key={product.id}` to satisfy React's requirement for stable, unique keys in lists.

### Styling (`src/ProductList.css` and `src/App.css`)

Applied custom CSS using stylesheets to create a polished, real-website feel:

- **CSS custom properties** in `index.css` for consistent theming (colors, shadows, radii)
- **Responsive grid layout** using `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` so cards reflow based on viewport width
- **Card hover effects** with `translateY` and elevated box shadows for interactivity
- **Dark mode support** via `@media (prefers-color-scheme: dark)` overriding CSS variables
- **Sticky navbar** with backdrop blur
- **Hero section** with a gradient background and call-to-action button

### Additional Features

- **Cart counter** — State managed in `App` with `useState`. The count increments each time any "Add to Cart" button is clicked and displays as a badge on the navbar cart icon.
- **Props drilling** — `App` passes an `onAddToCart` callback to `ProductList`, demonstrating parent-to-child data flow in React.

## Project Structure

```
src/
├── App.jsx          — Main layout (navbar, hero, footer, cart state)
├── App.css          — Layout and navigation styles
├── ProductList.jsx  — Product data + list rendering component
├── ProductList.css  — Product grid and card styles
├── index.css        — Global reset, variables, typography
└── main.jsx         — React entry point
```

## Running the App

```bash
npm install
npm run dev
```

Open the local URL shown in terminal to view the site.
