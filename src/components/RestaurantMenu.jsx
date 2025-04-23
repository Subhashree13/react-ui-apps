import React, { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const {resInfo, menuItem} = useRestaurantMenu(resId);
  const [isOpenMenuItem, setIsOpenMenuItem] = useState(true);
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, avgRating, totalRatingsString, costForTwoMessage, areaName } =
    info;

  const renderMenuItemList = (res) => {
    return res?.card?.card.itemCards?.map((item, index) => {
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
            <p>₹ {Math.ceil(item.card.info.defaultPrice / 100)}</p>
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
  const openMenuItem = () => {
    setIsOpenMenuItem(!isOpenMenuItem);
  };
  const renderResMenuSection = () => {
    return menuItem?.map((res) => {
      return (
        res.card.card.title &&
        res?.card?.card?.itemCards && (
          <div

            key={res.card.card.categoryId}
            className="flex flex-col gap-8"
            
          >
            <div className="res-menu-type flex justify-between  cursor-pointer shadow-lg p-8 rounded-lg" onClick={openMenuItem}>
              <h3 className="font-bold">{res.card.card.title}</h3>
              <div>🔽</div>
            </div>
            {isOpenMenuItem && (
              <div>
                <ul className="flex flex-col gap-8">
                  {renderMenuItemList(res)}
                </ul>
              </div>
            )}
          </div>
        )
      );
    });
  };
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
          {renderResMenuSection()}
        </section>
      )}
    </div>
  );
};

export default RestaurantMenu;
