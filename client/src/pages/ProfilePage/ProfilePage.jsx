import Header from "../../components/Header/Header";
import "./profilePage.css";

const ProfilePage = () => {
  const isMe = false;
  const noOfSavedPlaces = 12;

  return (
    <>
      <Header />

      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-top">
            <div className="profile-top-left">
              <div className="profile-image-cont">
                <img src="/assets/profile-image.png" alt="Profile Image" />
              </div>

              <div className="profile-info">
                <span className="profile-name">Alice Wu</span>
                <span className="profile-followers">100 followers</span>
                <span className="profile-location">Stanford University</span>
              </div>
            </div>
            {!isMe ? (
              <div className="profile-top-right">
                <button className="follow-button">Follow</button>
                <button className="message-button">Message</button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="profile-top-right-mobile">
            <button className="follow-button">Follow</button>
            <button className="message-button">Message</button>
          </div>
          <div className="profile-middle">
            <span className="profile-visited-places">Visted Places</span>

            <div className="profile-visited-images-container">
              <div className="profile-visited-places-container">
                <img src="/assets/visited-place.png" alt="Image" />

                <div className="visited-image-absolute">
                  <span className="hover-name">KFC, Albequerqy</span>
                  <span className="hover-location">Arkansas, USA</span>
                  <span className="hover-visited-on">25th February 2024</span>
                </div>
              </div>
              <div className="profile-visited-places-container">
                <img src="/assets/visited-place.png" alt="Image" />

                <div className="visited-image-absolute">
                  <span className="hover-name">KFC, Albequerqy</span>
                  <span className="hover-location">Arkansas, USA</span>
                  <span className="hover-visited-on">25th February 2024</span>
                </div>
              </div>
              <div className="profile-visited-places-container">
                <img src="/assets/visited-place.png" alt="Image" />

                <div className="visited-image-absolute">
                  <span className="hover-name">KFC, Albequerqy</span>
                  <span className="hover-location">Arkansas, USA</span>
                  <span className="hover-visited-on">25th February 2024</span>
                </div>
              </div>
              <div className="profile-visited-places-container">
                <img src="/assets/visited-place.png" alt="Image" />

                <div className="visited-image-absolute">
                  <span className="hover-name">KFC, Albequerqy</span>
                  <span className="hover-location">Arkansas, USA</span>
                  <span className="hover-visited-on">25th February 2024</span>
                </div>
              </div>
              <div className="profile-visited-places-container">
                <img src="/assets/visited-place.png" alt="Image" />

                <div className="visited-image-absolute">
                  <span className="hover-name">KFC, Albequerqy</span>
                  <span className="hover-location">Arkansas, USA</span>
                  <span className="hover-visited-on">25th February 2024</span>
                </div>
              </div>
              <div className="profile-visited-places-container">
                <img src="/assets/visited-place.png" alt="Image" />

                <div className="visited-image-absolute">
                  <span className="hover-name">KFC, Albequerqy</span>
                  <span className="hover-location">Arkansas, USA</span>
                  <span className="hover-visited-on">25th February 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-bottom">
            <span className="profile-visited-places">
              Saved Places
              {noOfSavedPlaces > 0 ? `(${noOfSavedPlaces})` : ""}
            </span>

            {noOfSavedPlaces > 0 ? (
              <div className="profile-saved-place-images-container">
                <div className="profile-visited-places-container">
                  <img src="/assets/saved-place.png" alt="Image" />

                  <div className="visited-image-absolute">
                    <span className="hover-saved-name">KFC, Albequerqy</span>
                    <span className="hover-saved-location">Arkansas, USA</span>
                    <span className="hover-saved-visited-on">
                      25th February 2024
                    </span>
                  </div>
                </div>
                <div className="profile-visited-places-container">
                  <img src="/assets/saved-place.png" alt="Image" />

                  <div className="visited-image-absolute">
                    <span className="hover-saved-name">KFC, Albequerqy</span>
                    <span className="hover-saved-location">Arkansas, USA</span>
                    <span className="hover-saved-visited-on">
                      25th February 2024
                    </span>
                  </div>
                </div>
                <div className="profile-visited-places-container">
                  <img src="/assets/saved-place.png" alt="Image" />

                  <div className="visited-image-absolute">
                    <span className="hover-saved-name">KFC, Albequerqy</span>
                    <span className="hover-saved-location">Arkansas, USA</span>
                    <span className="hover-saved-visited-on">
                      25th February 2024
                    </span>
                  </div>
                </div>
                <div className="profile-visited-places-container">
                  <img src="/assets/saved-place.png" alt="Image" />

                  <div className="visited-image-absolute">
                    <span className="hover-saved-name">KFC, Albequerqy</span>
                    <span className="hover-saved-location">Arkansas, USA</span>
                    <span className="hover-saved-visited-on">
                      25th February 2024
                    </span>
                  </div>
                </div>
                <div className="profile-visited-places-container">
                  <img src="/assets/saved-place.png" alt="Image" />

                  <div className="visited-image-absolute">
                    <span className="hover-saved-name">KFC, Albequerqy</span>
                    <span className="hover-saved-location">Arkansas, USA</span>
                    <span className="hover-saved-visited-on">
                      25th February 2024
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <span>You havent saved any places yet</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
