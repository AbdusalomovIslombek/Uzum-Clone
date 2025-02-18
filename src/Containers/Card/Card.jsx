import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useStore } from "../../store/store";
import { IoBagAddOutline, IoBagCheckOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";

const Card = ({ product }) => {
  const { images, title, fullPrice, installmentPrice, productId } = product;
  const {
    addToFavorite,
    favorite,
    removeFromFavorite,
    cart,
    addToCart,
    removeFromCart,
  } = useStore();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(
    favorite.find((id) => id === productId) ? true : false
  );
  const [isCart, setIsCart] = useState(
    cart.find((id) => id === productId) ? true : false
  );
  function hanleClick() {
    navigate(`/product/${productId}`);
  }
  function handleFavorite() {
    if (favorite.find((id) => id === productId)) {
      removeFromFavorite(productId);
    } else {
      addToFavorite(productId);
    }
    setIsFavorite(!isFavorite);
  }
  function handleCart() {
    if (cart.find((id) => id === productId)) {
      removeCart(productId);
    } else {
      addToCart(productId);
    }
    setIsCart(!isCart);
  }
  function handleCart() {
    if (cart.find((id) => id === productId)) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  }

  return (
    <div className="bg-slate-50 w-[270px] cursor-pointer dark:bg-dark dark:text-olcha">
      <div className="relative">
        <img
          src={images[0]}
          alt=""
          className="w-[270px] rounded-xl"
          onClick={hanleClick}
        />
        <div className="flex flex-col space-y-4">
          {isFavorite ? (
            <FaHeart
              className="absolute top-4 right-4 animate-yurak border rounded-full p-1 box-content bg-white"
              style={{
                animationIterationCount: "1",
              }}
              size={24}
              color="#a52a2a"
              onClick={handleFavorite}
            />
          ) : (
            <FiHeart
              className="absolute top-4 right-4 border rounded-full p-1 box-content bg-white"
              size={24}
              onClick={handleFavorite}
              color="gray"
            />
          )}

          <BiBarChart
            className="absolute top-11 right-4 border rounded-full p-1 box-content bg-white"
            size={24}
            color="gray"
          />
        </div>
      </div>
      <p className="dark:text-white line-clamp-1">{title}</p>

      <p className="pt-5 font-bold">{fullPrice} so'm</p>

      <p className="bg-yellow-700 w-32 mt-2 text-xs rounded-md p-1 dark:bg-white">
        {installmentPrice} so'm x 12oy
      </p>

      <div className="flex justify-between py-5">
        <button className="border rounded-xl py-2 px-4 border-black dark:border-olcha dark:text-olcha">
          <LuShoppingCart className="" size={20} onClick={handleCart} />
        </button>
        <button className="border rounded-xl py-2 px-12 border-red-800 text-red-800">
          Muddatli to'lov
        </button>
      </div>
    </div>
  );
};

export default Card;
