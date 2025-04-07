const Header = () => {
  return (
    <div className="header flex justify-between items-center bg-orange-50 ">
      <div className="logo-container m-[30px] w-[100px] h-[100px] cursor-pointer">
        <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="brand-logo" href="/" className="logo " />
      </div>
      <div className="nav-items m-[30px]">
        <ul className="flex gap-2 font-bold text-lg">
          <li className="cursor-pointer hover:underline" href="/">Home</li>
          <li className="cursor-pointer hover:underline" href="/about">About</li>
          <li className="cursor-pointer hover:underline" href="/contact">Contact Us</li>
          <li className="cursor-pointer hover:underline" href="/cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
