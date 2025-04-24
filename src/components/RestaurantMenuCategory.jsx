import React, { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";
//currently each res menu category has its won isOPenmenuitem state which is why when you open one category the others will still be opened(previous ones)
//however if we want to implement a scenario whereif we open one category then the previously opened category should get closed.
//there we have to lift the state up as in we have to pass isOPenMenuitem as a props, hence now it will becaome a controlled component
const RestaurantMenuCategory = (props) => {
    const {resCategory : res, showMenuItem, setShowIndex} = props;
//uncontrolled component
  // const [isOpenMenuItem, setIsOpenMenuItem] = useState(false);
  // const openMenuItem = () => {
  //   setIsOpenMenuItem(!isOpenMenuItem);
  // };
  return  (
    res.card.card.title &&
    res?.card?.card?.itemCards && (
      <div

        key={res.card.card.categoryId}
        className="flex flex-col gap-8"
        
      >
        <div className="res-menu-type flex justify-between  cursor-pointer shadow-lg p-8 rounded-lg" onClick={setShowIndex}>
          <h3 className="font-bold">{res.card.card.title} ({res?.card?.card.itemCards.length})</h3>
          <div>🔽</div>
        </div>
        {showMenuItem && <RestaurantMenuItem res = {res}/>}
      </div>
    )
  );
}

export default RestaurantMenuCategory