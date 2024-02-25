import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo-container">
          <img src="/assets/logo.png" alt="Logo" height={50} />
        </div>

        <span className="header-title">Places</span>

        <ul className="header-links">
          <li>Places</li>
          <li>Feed</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="header-right">
        <div className="header-input-container">
          <img src="/assets/search-icon.png" alt="Search" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="header-tags">
          <ul>
            <li>
              <img src="/assets/bookmark-icon.png" alt="Bookmark" />
            </li>
            <li>
              <img src="/assets/notif-icon.png" alt="Notification" />
            </li>
          </ul>
        </div>

        <div className="avater-container">
          <img src="/assets/avatar-img.png" alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
