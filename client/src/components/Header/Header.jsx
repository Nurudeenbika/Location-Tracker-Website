import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isSearchBarOut, setIsSearchBarOut] = useState(false);
  const inputRef = useRef(null);
  const isLoggedIn = false;

  const handleSearchClick = () => {
    setIsSearchBarOut(!isSearchBarOut);
  };

  // Ensure inputRef.current is not null before calling focus()
  useEffect(() => {
    if (inputRef.current && isSearchBarOut) {
      inputRef.current.focus();
    }
  }, [isSearchBarOut]);

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo-container">
          <img src="/assets/logo.png" alt="Logo" height={50} />
        </div>

        <span className="header-title">Places</span>

        <ul className="header-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="feed">
            <li>Feed</li>
          </Link>
          <Link to="following">
            <li>Following</li>
          </Link>
        </ul>
      </div>
      <div className="header-right">
        {isSearchBarOut && (
          <div className="header-input-container">
            <img src="/assets/search-icon.png" alt="Search" />
            <input type="text" ref={inputRef} />

            <img
              src="/assets/cancel-icon.svg"
              alt="Cancel"
              className="cancel-icon"
              onClick={() => setIsSearchBarOut(false)}
            />
          </div>
        )}

        <div className="header-tags">
          <ul>
            {!isSearchBarOut && (
              <li onClick={handleSearchClick} className="header-tag-search">
                <img src="/assets/search-icon.png" alt="Search" />
              </li>
            )}
            <li className="header-tag-bookmark">
              <img src="/assets/bookmark-icon.svg" alt="Bookmark" />
            </li>
            <li className="header-tag">
              <img src="/assets/notif-icon.png" alt="Notification" />
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <div className="avatar-container">
            <img src="/assets/avatar-img.png" alt="Avatar" />
          </div>
        ) : (
          <div className="header-buttons">
            <Link to="/login">
              <button className="header-login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="header-signup">Get started</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

//one frivolous comment wouldnt hurt

export default Header;
