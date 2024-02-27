import Header from "../../components/Header/Header";
import "./placePage.css";

const PlacePage = () => {
  return (
    <>
      <Header />
      <div className="place-page">
        <div className="place-page-container">
          <div className="place-page-top">
            <img src="/assets/place-image-2.jpg" alt="Place Image" />

            <div className="place-absolute-container">
              <span className="place-name">Coffee Shop</span>
              <span className="place-location">LA, Carlifornia</span>

              <button className="place-share-button">Share</button>
            </div>
          </div>
          <div className="place-page-middle">
            <div className="album-left">
              <img src="/assets/place-image-2.jpg" alt="Place Image" />
            </div>
            <div className="album-right">
              <div className="album-right-top">
                <img src="/assets/place-image-2.jpg" alt="Place Image" />
                <img src="/assets/place-image-1.jpg" alt="Place Image" />

                <img src="/assets/background-image.jpg" alt="Place Image" />
                <img src="/assets/place-image-3.jpg" alt="Place Image" />
              </div>
            </div>
          </div>
          <div className="place-page-bottom">
            <div className="page-bottom-top">
              <span className="page-bottom-title">Lion Heart Cafe</span>

              <span className="page-bottom-subtitle">
                Coffee Shop -- San Fransisco
              </span>

              <div className="page-bottom-rating-container">
                <div className="page-bottom-top-left">
                  <span className="bottom-review">4.2</span>
                  <span className="bottom-review-stars">4 stars</span>
                  <span className="bottom-number-of-reviews">320 reviews</span>
                </div>
                <div className="page-bottom-top-right">
                  <div className="rating-bar-container">
                    <span className="rating-bar-identifier">5</span>
                    <span
                      className="rating-bar"
                      style={{ width: "70%" }}
                    ></span>
                  </div>
                  <div className="rating-bar-container">
                    <span className="rating-bar-identifier">4</span>
                    <span className="rating-bar"></span>
                  </div>
                  <div className="rating-bar-container">
                    <span className="rating-bar-identifier">3</span>
                    <span className="rating-bar"></span>
                  </div>
                  <div className="rating-bar-container">
                    <span className="rating-bar-identifier">2</span>
                    <span className="rating-bar"></span>
                  </div>
                  <div className="rating-bar-container">
                    <span className="rating-bar-identifier">1</span>
                    <span
                      className="rating-bar"
                      style={{ width: "30%" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-bottom-bottom">
              <img src="/assets/map.png" alt="Map" />

              <button className="map-button">Diretions</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
