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
