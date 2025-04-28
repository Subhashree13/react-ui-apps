import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenuItem = (props) => {
  const { res } = props;
  console.log(res)
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const renderMenuItemList = () => {
    return res?.card?.card.itemCards?.map((item) => {
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
            <div className="absolute ">
              <button
                className="cursor-pointer bg-black text-white rounded-md p-2 mx-2 "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>

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
    <div>
      <ul className="flex flex-col gap-8">{renderMenuItemList()}</ul>
    </div>
  );
};

export default RestaurantMenuItem;
