import React, { useState } from 'react';
import customMenu from './menuConfig';
import './Header.css'; // Import a CSS file for styling

function Header() {
  const logoStyles = {
    fontFamily: 'Oswald, sans-serif',
  };

  const menuStyles = {
    fontFamily: 'Mulish, sans-serif',
  };

  const buttonStyles = {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '16px 48px',
    borderRadius: '41px',
    border: '2px solid rgba(244, 246, 252, 0.20)',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#FCD980';
    const underline = e.target.querySelector('.underline');
    if (underline) {
      underline.style.width = '100%';
      underline.style.transition = 'width 0.3s ease';
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'white';
    const underline = e.target.querySelector('.underline');
    if (underline) {
      underline.style.width = '0%';
    }
  };

  return (
    <header className="bg-p-blue py-8">
      <div className="container mx-auto flex items-center justify-between px-5">
        <div className="text-2xl font-bold text-white" style={logoStyles}>
          <span>&lt;SSD /&gt;</span>
        </div>
        <nav>
          <ul className="flex space-x-5 hidden md:flex">
            {customMenu.map((menuItem) => (
              <li key={menuItem.id}>
                {menuItem.title === 'Contact' ? (
                  <a
                    href={menuItem.url}
                    className="text-white text-base font-normal tracking-wider relative"
                    style={buttonStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItem.title}
                  </a>
                ) : (
                  <a
                    href={menuItem.url}
                    className="text-white text-base font-normal tracking-wider relative"
                    style={menuStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItem.title}
                    <div
                      className="underline"
                      style={{
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#FCD980',
                      }}
                    ></div>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="menu-button cursor-pointer md:hidden"
          onClick={handleToggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu-container">
          <div className="mobile-menu-overlay" onClick={handleToggleMenu}></div>
          <div className="mobile-menu">
            <ul className="mobile-menu-list">
              {customMenu.map((menuItem) => (
                <li key={menuItem.id}>
                  <a
                    href={menuItem.url}
                    className="text-white text-base font-normal tracking-wider"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
