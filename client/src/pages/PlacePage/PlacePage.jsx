import Header from "../../components/Header/Header";
import "./placePage.css";

const PlacePage = () => {
  return (
    <>
      <Header />
      <div className="place-page">
        <div className="place-page-container">
          <div className="page-place-top">
            <img src="/assets/place-image-1.jpg" alt="Place Image" />

            <div className="place-absolute-container">
              <span className="place-name">Coffee Shop</span>
              <span className="place-location">LA, Carlifornia</span>

              <button className="place-share-button">Share</button>
            </div>
          </div>
          <div className="page-place-middle"></div>
          <div className="page-place-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
