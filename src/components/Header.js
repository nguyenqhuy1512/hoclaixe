import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/courses', label: 'Khóa Học' },
    { path: '/branches', label: 'Chi Nhánh' },
    { path: '/about', label: 'Về Chúng Tôi' },
    { path: '/contact', label: 'Liên Hệ' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>HoclaixeAZ</h1>
            <span>Học Lái Xe AZ</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:0974513516" className="phone-btn">
              <FiPhone />
              <span>0974.513.516</span>
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 