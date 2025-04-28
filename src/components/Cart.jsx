import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalPrice = cartItems.reduce((acc, items)=> (acc + Math.ceil(items.card.info.price || items.card.info?.defaultPrice / 100) ),0)
  console.log("totalPrice--",totalPrice);
  const renderCartItemList = () => {
    return cartItems?.map((item) => {
      return (
        <li
          key={item.card.info.id}
          className="flex justify-between border-b border-gray-200"
        >
          <div className="res-menu-info">
            <h3 className="font-bold">{item.card.info.name}</h3>
            <p>
              ⭐️ {item.card.info.ratings.aggregatedRating.rating} (
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </p>
            <p>₹ {Math.ceil(item.card.info?.price  || item.card.info?.defaultPrice / 100)}</p>
            <p className="text-gray-400">{item.card.info.description}</p>
          </div>
          <div className="res-menu-img ml-[60px] max-h-[174px] min-w-[156px]">
            <img
              alt={item.card.info.name}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              loading="lazy"
              height="144"
              width="156"
            />
          </div>
        </li>
      );
    });
  };
  return (
    <div className="w-[800px] mx-auto mt-20 flex flex-col gap-5">
      <button
        className="bg-red-400 p-5 rounded-md text-white font-bold w-3/12 cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Your cart is empty, Please add items to your cart!!!</h1>}
      <ul className="flex flex-col gap-8">{renderCartItemList()}
      {
        cartItems.length > 0 && <h1>Total Amount : ₹{totalPrice}</h1>
      }</ul>
    </div>
  );
};

export default Cart;
