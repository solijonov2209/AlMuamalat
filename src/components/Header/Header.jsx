import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/Logo.svg';
import { ProgramsDropDown } from '../ProgramsDropDown';
import './header.css';
import LanguageSwitcher from '../LanguageSelector';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('testUserToken'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('testUserToken');
    setToken(null);
    navigate('/');
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="log">
              <Link to="/" className="site-logo">
                <img className="site-logo_img" src={logo} alt="site-logo" />
              </Link>
            </div>
            <nav>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-item_link">
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span className="dropdown-label  nav-item_link">
                    Programs
                  </span>
                  {showDropdown && <ProgramsDropDown />}
                </li>
                <li className="nav-item">
                  <Link to="/finance-tools" className="nav-item_link">
                    Finance Tools
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-item_link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="nav-right">
              <LanguageSwitcher />

              {!token ? (
                <Link to="/signin" className="signin-link">
                  Sign in
                </Link>
              ) : (
                <div className="flex gap-5">
                  <Link
                    to="/user-profile"
                    className="text-2xl text-blue-600 hover:text-blue-800"
                  >
                    <FaUserCircle />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-700 text-2xl"
                    title="Logout"
                  >
                    <FiLogOut />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className="header-left">
    <Link to="/" className="logo">
    YourLogo
    </Link>
    </div>
    
    <div className="header-center">
    <Link to="/" className="nav-item">Home</Link>
    <div className="nav-item dropdown">
    <span className="dropdown-title">Programs ▾</span>
    <div className="dropdown-menu">
    <Link to="/programs/international" className="dropdown-item">International Programs</Link>
    <Link to="/programs/specialized" className="dropdown-item">Specialized Courses</Link>
    <Link to="/programs/islamic-finance" className="dropdown-item">Islamic Finance Course</Link>
    <Link to="/programs/certification" className="dropdown-item">Certification Program</Link>
    </div>
    </div>
    <Link to="/finance-tools" className="nav-item">Finance Tools</Link>
    <Link to="/contact" className="nav-item">Contact</Link>
    </div>
    
    <div className="header-right">
    <Link to="/signin" className="nav-item">Sign In</Link>
  </div> */}
      </header>
    </>
  );
};
