import React from "react";

const RestaurantCard = (props) => {
    const {name,locality, avgRating, deliveryTime, cuisines, image } = props;
  return (
    <div className="res-card w-[300px] cursor-pointer hover: ease-in" >
      <img
        className="res-img rounded-md h-[300px] w-[300px]"
        alt={name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
      />
      <div className="res-info">
        <h3 className="font-bold">{name}</h3>
        <div>
          <span> {avgRating} ⭐️</span>
          <span> {deliveryTime} mins</span>
        </div>
        <div className="cuisines">{cuisines.join(', ')}</div>
        <div className="location">{locality}</div>
      </div>
    </div>
  );
};

//HOC(Higher order component)
export const resCardWithDiscount = (RestaurantCard)=>{
  return ({discountAmount, ...rest})=>{
    return <div>
      <h1 className="absolute text-white font-bold m-1 bg-gradient-to-b from-black">{discountAmount}</h1>
      <RestaurantCard {...rest}/>
    </div>
  }

}
export default RestaurantCard;
