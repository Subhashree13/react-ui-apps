import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
//call the api to fetch the list of restaurants on page load
const Body = () => {
  const resUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const [resList, setReslist] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, []);
  const fetchRestaurant = async () => {
    const res = await fetch(resUrl);
    const data = await res.json();
    let resInfo = data.data.cards?.filter(
      (res) => res?.card?.card?.id === "restaurant_grid_listing_v2"
    )[0]?.card?.card?.gridElements?.infoWithStyle;
    if (resInfo ) {
      const restaurants = resInfo?.restaurants;
      setReslist((list) => [...list, ...restaurants]);
    }
  };
  const renderRestaurantCard = () => {
    if (resList && resList.length > 0) {
      return resList.map((res) => {
        let info = res.info;
        return (
          <RestaurantCard
            key={info.id}
            name={info.name}
            locality={info.locality}
            avgRating={info.avgRating}
            deliveryTime={info.sla.deliveryTime}
            cuisines={info.cuisines}
            image={info.cloudinaryImageId}
          />
        );
      });
    }
    return null;
  };
const handleFilter = ()=>{
  const topRatedRestaurants = resList.filter(
    (item) => item.info.avgRating > 4.5
  );
  setReslist(topRatedRestaurants); 
}
  return (
    <div className="body mt-8 flex flex-col gap-8">
      <div className="filter-container m-5">
        <button className="cursor-pointer border-1" onClick={handleFilter}> Top Rated Restaurants</button>
      </div>
      <div className="res-container flex flex-wrap gap-5 m-5 justify-between">
        {renderRestaurantCard()}
      </div>
    </div>
  );
};

export default Body;
