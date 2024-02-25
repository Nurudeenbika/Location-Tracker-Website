import Header from "../../components/Header/Header";
import "./homePage.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
const HomePage = () => {
  const recentPlaces = [
    {
      img: "/assets/recent-1.png",
      name: "Pacific Ocean",
      title: "Ocean",
      rating: "4.5",
    },
    {
      img: "/assets/recent-2.png",
      name: "Pacific Ocean",
      title: "Restaurant",
      rating: "4.5",
    },
    {
      img: "/assets/recent-3.png",
      name: "Pacific Ocean",
      title: "Fishing Spot",
      rating: "4.5",
    },
    {
      img: "/assets/recent-4.png",
      name: "Pacific Ocean",
      title: "Killer Vibes",
      rating: "4.5",
    },
    {
      img: "/assets/recent-5.png",
      name: "Pacific Ocean",
      title: "Personal Spa",
      rating: "4.5",
    },
  ];
  return (
    <>
      <Header />

      <div className="homepage">
        <div className="homepage-container">
          <div className="homepage-upper">
            <span className="homepage-title">Find places now</span>

            <span className="homepage-text">
              Discover and share places everywhere you go
            </span>

            <div className="hompage-input-container">
              <img src="/assets/search-icon-light.png" alt="Search" />
              <input type="text" placeholder="Search by category or place" />
              <button className="homepage-button">Go</button>
            </div>

            <button className="homepage-button semi-button">Go</button>
          </div>
          <div className="homepage-lower">
            <span className="homepage-lower-title">Recent Places</span>

            <div className="place-cards">
              {recentPlaces.map((place, i) => {
                return <PlaceCard key={i} {...place} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
