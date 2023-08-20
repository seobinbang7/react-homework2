import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 p-5 font-extralight">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            장바구니
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            주문하기
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;