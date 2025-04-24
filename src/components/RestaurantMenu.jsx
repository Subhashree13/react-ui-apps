import React, { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
//lifting the state up for the res menu category component, such that res menu will control the res menu category
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItem } = useRestaurantMenu(resId);
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, avgRating, totalRatingsString, costForTwoMessage, areaName } =
    info;
  const [isOpenMenuItem] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  return (
    <div className="res-menu-wrapper flex gap-8 flex-col w-[700px] mx-auto mt-8">
      {Object.keys(info).length !== 0 && (
        <div className="res-info border-1 border-orange-300 rounded p-5">
          <h3 className="font-bold text-lg">{name}</h3>
          <div>
            ⭐️ {avgRating}({totalRatingsString}) • {costForTwoMessage}
          </div>
          <div className="font-bold">📍 {areaName}</div>
        </div>
      )}
      {menuItem && menuItem.length > 0 && (
        <section className="res-menu flex flex-col gap-8">
          {menuItem?.map((res, index) => (
            <RestaurantMenuCategory
              resCategory={res}
              key={res.card.card.categoryId}
              showMenuItem={index === showIndex ? true : isOpenMenuItem}
              setShowIndex={()=>setShowIndex(index)}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default RestaurantMenu;
