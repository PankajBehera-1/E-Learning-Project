import React, { useEffect, useRef, useState } from "react";
import style from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
import paymentsvg from "../../assets/payment.png"

export const CartPage = () => {
  const [data, setData] = useState([]);
  const loading = useRef(true);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token && token.user && token.user._id) {
      axios
        .get(`https://udemy-vr4p.onrender.com/cart/${token.user._id}`)
        .then(({ data }) => {
          loading.current = false;
          setData([...data]);
        })
        .catch((error) => {
          console.error("Error fetching cart:", error);
          loading.current = false; // Stop loading even if there's an error
        });
    } else {
      console.warn("User ID is not available");
      loading.current = false; // Stop loading if there's no valid token
    }
  }, []);

  return (
    <>
      <h1 className={style.heading}>Shopping Cart</h1>
      {loading.current ? (
        <CircularProgress size={"8rem"} className="cart-loader" />
      ) : (
        <div className={style.cart_body}>
          <div className={style.main}>
            <div className={style.cartitems}>
              <p>Courses in Cart</p>
              <div className={style.cart_items_container}>
                {data.map((el) => (
                  <CartProdCard key={el.productId._id} db={el.productId} />
                ))}
              </div>
            </div>
            <div className={style.total_div}>
              <div className={style.total_price}>
                <p>Total: </p>
                <h1>
                  <TotalPrice db={data} />
                </h1>
              </div>
              <div className={style.checkOutButton}>
                <button onClick={() => navigate("/payment")}>
                  <h4>checkout</h4>
                </button>
              </div>
              <div className={style.promotion}>
                <h4>Promotions</h4>
                <div className={style.promotion_div}>
                  <CloseIcon className={style.closeicon} style={{marginBottom:"15px"}}/>
                  <p>
                    <span>KEEPLEARNING </span>is applied
                  </p>
                </div>
                <div className="inputbtn">
                  <input type="text" className={style.inputCop} placeholder="Enter Coupon" />
                  <button className={style.applybtn}>Apply</button>
                </div>
              </div>
              <div className={style.last_div}>
                <p>Buy now, pay later for orders of $25 and over</p>
                <img className={style.klarna} src={paymentsvg} alt="klarna" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CartProdCard = ({ db }) => {
  const { title, price, image, _id, level, author, rating } = db;

  return (
    <div className={style.items_info}>
      <div className={style.product_img}>
        <img src={image} alt={title} />
      </div>
      <div className={style.title}>
        <h4>{title}</h4>
        <p>{author}</p>
        <div className={style.bestseller_div}>
          <button>Bestseller</button>
          <div className={style.rating}>
            <span className={style.rate_num}>{rating || 4.5}</span>
            <Rating name="read-only" size="small" precision={0.5} value={rating || 4.5} readOnly />
            <span className={style.rate_count}>(1200)</span>
          </div>
        </div>
        <div className={style.list}>
          <ul>
            <li>2.5 total hours</li>
            <li>33 lectures</li>
            <li>{level}</li>
          </ul>
        </div>
      </div>
      <div className="add-remove-quant">
        <div className={style.btn}>
          <button onClick={() => {}}>Remove</button>
          <button>Save for Later</button>
          <button>Move to Wishlist</button>
        </div>
      </div>
      <div className={style.cart_price}>
        <h3>₹{price}</h3>
        <LocalOfferIcon className={style.icon_tag} />
      </div>
    </div>
  );
};

const TotalPrice = ({ db }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const total = db.reduce((acc, el) => acc + (el.productId.price || 0), 0);
    setPrice(total);
  }, [db]);

  return <div>₹{price}</div>;
};
