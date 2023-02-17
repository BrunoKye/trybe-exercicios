import { Link, useLocation } from 'react-router-dom';
import logo from '../icons/logo.png';
import '../styles/header.css';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header-container">
      <img className="logo" src={ logo } alt="logo" />

      <nav>
        {pathname === '/favorites' ? (
          <Link className="link" to="/">Films</Link>
        ) : (
          <Link className="link" to="/favorites">Favorites</Link>
        )}
      </nav>
    </header>
  );
}
