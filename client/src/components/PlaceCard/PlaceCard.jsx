import PropTypes from "prop-types";
import "./placeCard.css";

const PlaceCard = ({ img, name, title, rating }) => {
  return (
    <div className="place-card">
      <div className="place-card-img-container">
        <img src={img} alt={name} />
      </div>

      <div className="place-card-lower">
        <span className="place-card-name">{name}</span>
        <span className="place-card-title">{title}</span>
        <span className="place-card-rating">{rating}</span>
      </div>
    </div>
  );
};

PlaceCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default PlaceCard;
