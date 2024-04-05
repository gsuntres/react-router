## Autonomous React Router

A simple react router that works independently from the browser's history API. A pure javascript solution built to address the issue of routing without an address bar (such as in Electron.js)

This library can be used in scenarios with multiple pages and the need to have a simple way to navigate through them.

This library was inspired by the popular ```react-router``` from ```@remix```.

## Install and Set up

```bash
npm i --save @gsuntres/react-router
```

Somewhere at the top of your React app:

```jsx
import { RouterProvider } from '@gsuntres/react-router'

...

<RouterProvider>
	...
</RouterProvider>

```

## Routes and Navigation

The Router does not use urls to steer routing, instead it has something similar to it called a navigation path. 

Examples of navigation paths:

* products.view
* products.view.details

In a browser environment the above you have the equivalent urls:

* /products/view
* /products/view/details

A ``Route`` will make sure the element will get rendered on the requested navigation path (main.route1). 

```js
import { Route } from '@gsuntres/react-router'

<Route
    on='main.route1'
    element={<Route1 />}
  />
```