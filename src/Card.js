import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faAppleAlt,
  faAppleWhole,
  faBandage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ product, addToCart, cartList }) {
  return (
    <div className="col-lg-4 mb-4">
      <div class="card h-100">
        {/* <!-- Product image--> */}
        <img class="card-img-top" src={product.Image} alt="..." />
        {/*  <!-- Product details--> */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* <!-- Product name--> */}
            <h5 class="fw-bolder">{product.name}</h5>
            {/*  <!-- Product price--> */}
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star" />
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
