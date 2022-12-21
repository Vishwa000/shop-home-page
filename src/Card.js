import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faAppleAlt,
  faAppleWhole,
  faBandage,
  faBorderStyle,
  faStairs,
  faStar,
  faStarHalfStroke,
  faStarOfDavid,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ product, addToCart, cartList }) {
  const renderRating = (rating) => {
    let stars = [];
    if (rating) {
      for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon style={{ color: "gold" }} icon={faStar} />);
      }
    }
    return stars;
  };

  return (
    <div className="col-lg-4 mb-4">
      <div class="cards-v card h-100">
        {/* <!-- Product image--> */}
        <img class="card-img-top" src={product.Image} alt="..." />
        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder"> {product.name}</h5>
            {/*  {product.list.map((item) => {
              return <FontAwesomeIcon icon={item.isFont ? faStar : null} />;
            })} */}
            {renderRating(product.rating)}
            <p className="card-text">₹. {product.price}</p>
          </div>
        </div>
        {/*  <!-- Product actions--> */}
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <button
              disabled={cartList.some((item) => item.id === product.id)}
              class="btn btn-outline-dark mt-auto"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
