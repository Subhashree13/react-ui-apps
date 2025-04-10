import React, { useEffect, useState } from "react";
import { RES_TYPE, RES_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import RestaurantShimmerCard from "./RestaurantShimmerCard";
//call the api to fetch the list of restaurants on page load
const Body = () => {
  const [resList, setReslist] = useState([]);
  const [cuisineType, setCuisineType] = useState('');
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, []);
  const fetchRestaurant = async () => {
    const res = await fetch(RES_URL);
    const data = await res.json();
    let resInfo = data.data.cards?.filter(
      (res) => res?.card?.card?.id === RES_TYPE
    )[0]?.card?.card?.gridElements?.infoWithStyle;
    if (resInfo ) {
      const restaurants = resInfo?.restaurants;
      setReslist((list) => [...list, ...restaurants]);
      setFilteredResList((list) => [...list, ...restaurants]);
    }
  };
  const renderRestaurantCard = () => {
    if (filteredResList && filteredResList.length > 0) {
      return filteredResList.map((res) => {
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
const handleCuisineType = (e)=>{
  setCuisineType(e.target.value);
}
const handleSearchCuisines = ()=>{
const filteredData = resList.filter((item)=>item.info.cuisines.find(item => item.toLowerCase() === cuisineType.toLowerCase()))
setFilteredResList(filteredData);
}
  return resList.length ===0? <RestaurantShimmerCard/>:(
    <div className="body mt-8 flex flex-col gap-8">
      <div className="filter-search-container m-5 flex gap-5">
        <div className="search-box flex gap-2">
            <input type= "text" className="border-1" value = {cuisineType} onChange={handleCuisineType}/>
            <button className="cursor-pointer border-1 p-2" onClick={handleSearchCuisines}>Search</button>
        </div>
        <button className="cursor-pointer border-1 p-2" onClick={handleFilter}>Top Rated Restaurants</button>
      </div>
      <div className="res-container flex flex-wrap gap-5 m-5 justify-between">
        {renderRestaurantCard()}
      </div>
    </div>
  );
};

export default Body;
