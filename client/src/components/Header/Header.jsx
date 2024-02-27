import { useRef, useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isSearchBarOut, setIsSearchBarOut] = useState(false);
  const inputRef = useRef(null);

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
          <li>Explore</li>
          <li>Feed</li>
          <li>Following</li>
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
              <li onClick={handleSearchClick}>
                <img src="/assets/search-icon.png" alt="Search" />
              </li>
            )}
            <li>
              <img src="/assets/bookmark-icon.svg" alt="Bookmark" />
            </li>
            <li>
              <img src="/assets/notif-icon.png" alt="Notification" />
            </li>
          </ul>
        </div>

        <div className="avatar-container">
          <img src="/assets/avatar-img.png" alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
