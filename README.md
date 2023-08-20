# 리액트 2차 과제

![CDE19A97-205D-4CF6-9338-D04007713D38](https://github.com/seobinbang7/react-homework2/assets/45528125/a0a73992-2982-492e-9569-41cefc891f39)

홈 화면에서 nav에서 주문하기 메뉴에서 확인할 수 있습니다.

-----

App.jsx

```jsx 
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

------

routes.jsx

```jsx
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Cart from './pages/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Cart />} />
      <Route path="contact" element={<Payment />} />
    </Route>
  )
)

export default router;
```
