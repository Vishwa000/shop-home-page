import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAppleAlt, faIceCream } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const productlist = [
    {
      id: 1,
      name: "iPhone 13",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/r/1/r1434_blue_pdp_image_position-1a_avail__en-in_1-removebg-preview_1.png",
      price: 63999,
      isFont: false,
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_13_pro_max_green_pdp_image_position-1a_avail__en-in_3.jpg",
      price: 112900,
      isFont: true,
    },
    {
      id: 3,
      name: "iPhone 14",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/r/1/r1594_blue_pdp_image_position-1a_avail__en-in-removebg-preview.png",
      price: 75990,
      isFont: false,
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_14_pro_gold_pdp_image_position-1a_avail__en-in_1.jpg",
      price: 129900,
      isFont: true,
    },
    {
      id: 5,
      name: "iPhone 14 Pro Max",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_14_pro_max_silver_pdp_image_position-1a_avail__en-in.jpg",
      price: 139900,
      isFont: false,
    },
    {
      id: 6,
      name: "16-inch MacBook Pro: Apple M1 Pro chip",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/m/b/mbp14-spacegray-select-202110-removebg-preview_2__1.png",
      price: 227905,
      isFont: true,
    },
    {
      id: 7,
      name: "iPad Pro M1 Chip - 11 inch",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/i/n/in_r1444_cellular_pdp_image_position-1b_space_grey-removebg-preview_1.png",
      price: 71900,
      isFont: false,
    },
    {
      id: 8,
      name: "Watch Series 8",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/g/o/gold_stainless_steel_milanese_loop.png",
      price: 45900,
      isFont: true,
    },
    {
      id: 9,
      name: "Watch Series 7",
      Image:
        "https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/g/o/gold_3.png",
      price: 37710,
      isFont: false,
    },
  ];
  let [cartlist, setCart] = useState([]);
  let [total, setTotal] = useState(0);

  let addToCart = (product) => {
    setCart([...cartlist, { ...product, quantity: 1 }]);
    setTotal(total + product.price);
  };
  let removeCart = (product) => {
    let itemIndex = cartlist.findIndex((item) => product.id === item.id);
    cartlist.splice(itemIndex, 1);
    setCart([...cartlist]);
    setTotal(total - product.price * product.quantity);
  };
  let inQuantity = (cartItem) => {
    let itemIndex = cartlist.findIndex((item) => cartItem.id === item.id);
    cartlist[itemIndex].quantity = cartlist[itemIndex].quantity + 1;
    setCart([...cartlist]);
    setTotal(total + cartItem.price);
  };
  let decQuantity = (cartItem) => {
    let itemIndex = cartlist.findIndex((item) => cartItem.id === item.id);
    cartlist[itemIndex].quantity = cartlist[itemIndex].quantity - 1;
    setCart([...cartlist]);
    setTotal(total - cartItem.price);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  bg-secondary">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand text-white" href="#!">
            {/* <FontAwesomeIcon icon={brands(`apple`)} /> */} Apple Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#!"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline text-white" type="submit">
                <i class="bi-cart-fill me-1 text-white"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill ">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="card text-white">
        <img
          class="card-img"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-2-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667592114752"
          alt="Card image"
        />
        <div class="card-img-overlay"></div>
      </div>
      <div class="rs-shop-subheader">
        The best way to buy the products you love.
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-9">
            <div className="row">
              {productlist.map((product) => {
                return (
                  <Card
                    product={product}
                    addToCart={addToCart}
                    cartList={cartlist}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-3">
            <h1 className="ele">Cart</h1>
            <Cart
              cartlist={cartlist}
              removeCart={removeCart}
              inQuantity={inQuantity}
              decQuantity={decQuantity}
            />

            <h1 className="totals">
              Total:<span className="rs">₹.</span>
              {total}
            </h1>
          </div>
        </div>
      </div>
      {/*   <!-- Footer--> */}
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
