import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import './Landing.css'; // Import Landing.css if needed
import Login from './Login';
import Signup from './Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import UserLoggedIn from './UserLoggedIn';
import { Link } from 'react-router-dom';
import DevreportModal from './devreport';

const Header = ({ isLandingPage, isAboutPage }) => {
  const [user, setUser] = useState(null);
  const [logoSrc, setLogoSrc] = useState('https://cdn.builder.io/api/v1/image/assets/TEMP/16d9e73da749028535b483d8ace7f27155660c5f575d746c967a83d4b5ac0d87?apiKey=d22a939618da4e96809232126d1f951c&'); // Default logo
  const [atAbout, setAtAbout] = useState(false);

  const toggleAtAbout = ()=> {
    setAtAbout(atAbout => !atAbout);
  }

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed: ', currentUser);
      setUser(currentUser);
    });

    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrolled = window.scrollY > 50; // Adjust the value as needed
      if (scrolled) {
        setLogoSrc('https://cdn.builder.io/api/v1/image/assets/TEMP/e8a7c30444b5d585ef1ed03ec70f8b1de851d84fd4eeca6b699c6be680ced422?apiKey=d22a939618da4e96809232126d1f951c&');
        header.classList.add('scrolled');
      } else {
        setLogoSrc('https://cdn.builder.io/api/v1/image/assets/TEMP/16d9e73da749028535b483d8ace7f27155660c5f575d746c967a83d4b5ac0d87?apiKey=d22a939618da4e96809232126d1f951c&');
        header.classList.remove('scrolled');
      }
    };

    if (isLandingPage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isLandingPage) {
        window.removeEventListener('scroll', handleScroll);
      }
      logout();
    };
  }, [isLandingPage]);

  const [devreportshow, setdevreportShow] = useState(false);
  const handleOpendevrep = () => setdevreportShow(true);
  const handleClosedevrep = () => setdevreportShow(false);
  return (
    <header className={`header ${isLandingPage ? 'landing-header' : ''} ${isAboutPage ? 'about-page-header' : ''}`}>
      
      {!atAbout ? (
      <Link to="/about" onClick={toggleAtAbout} className="no-underline">
        <span className={`nav-link about-link`} >About</span>
      </Link>
      ) : (
        <Link to='/cure' onClick={toggleAtAbout} className='no-underline'>
          <span className={'nav-link cure-link'}>Home</span>
        </Link>
      )}
        {/* <span className={`nav-link about-link`}>About</span> */}
      
      <a href="/" className="logo-container">
        <img
          src={logoSrc}
          alt="BSDOC Logo"
          className="logo"
        />
      </a>
      <nav className="nav">
        {/* <a className="nav-sched-link" onClick={handleOpendevrep} role="button">Report</a> */}

        {user ? (
          <div style={{ cursor: 'pointer' }}>
            <UserLoggedIn user={user} />
          </div>
        ) : (
          <>
            <Login />
            <Signup />
          </>
        )}
        <DevreportModal show={devreportshow} handleClose={handleClosedevrep} />
      </nav>
    </header>
  );
};

export default Header;
