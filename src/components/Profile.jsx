import React, { useEffect, useState } from "react";

const Profile = () => {
  const [useData, setUserData] = useState({});
  //useeffect used to call api once the page is rendered and also to do some cleanup activity, like - removing timer, event listeners
  useEffect(() => {
    fetchUserData();
    const timer = setInterval(()=>{
        console.log("profile component called");
    },1000)
    //this return will be called when the component is unmounted from the dom
    return ()=>{
        clearInterval(timer);
    }
  }, []);
  const fetchUserData = async () => {
    const res = await fetch("https://api.github.com/users/Subhashree13");
    const data = await res.json();
    setUserData({
      avatar_url: data.avatar_url,
      login: data.login,
    });
  };
  return (
    <div>
      This is {useData.login}
      <img src={useData.avatar_url} />
    </div>
  );
};

export default Profile;
