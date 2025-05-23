import React,  { useState, useEffect } from 'react';
import { RES_MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    const [menuItem, setMenuItem] = useState([]);
    useEffect(() => {
        fetchMenuList();
      }, []);   
//fetchData
const fetchMenuList = async () => {
    const res = await fetch(RES_MENU_URL.replace("{res_id}", resId));
    const resData = await res.json();
    setResInfo(resData.data);
    setMenuItem(
      resData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (res) => res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };
    return {resInfo, menuItem};
}
export default useRestaurantMenu;