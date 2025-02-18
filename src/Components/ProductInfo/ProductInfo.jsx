import React, { useState } from "react";
import Favorite from "../../pages/Favorite/Favorite";
import { FaChevronDown, FaChevronRight, FaRegHeart } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useStore } from "../../store/store";
import { Products } from "../../data/productsData";
import { FiHeart, FiInfo, FiStar } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CiMedal } from "react-icons/ci";
import { LuTruck } from "react-icons/lu";
import { BiBarChart } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
const ProductInfo = () => {
  const { products } = useStore();
  const { id } = useParams();
  const {
    images,
    title,
    rating,
    fullPrice,
    sellPrice,
    productId,
    reviewsQuantity,
    ordersQuantity,
  } = Products.find((product) => product.productId == id);
  // const [isFavorite, setIsFavorite] = useState(
  //   Products.find((id) => id === productId) ? true : false
  // );
  // const discount = Math.round(100 - sellPrice / (fullPrice / 100));

  // function handleFavorite() {
  //   if (favorite.find((id) => id === productId)) {
  //     removeFromFavorite(productId);
  //   } else {
  //     addToFavorite(productId);
  //   }
  //   setIsFavorite(!isFavorite);
  // }
  return (
    <div className="px-10 flex">
      <div>
        <h2 className="text-4xl font-bold py-2">Xiaomi Redmi Note 14 Pro</h2>
        <div className="flex items-center gap-4 py-2">
          <div className="flex gap-1">
            <FiStar color="red" size={22} />
            <FiStar color="red" size={22} />
            <FiStar color="red" size={22} />
            <FiStar color="red" size={22} />
            <FiStar color="red" size={22} />
          </div>
          <p>0 sharhlar</p>
          <div className="flex items-center gap-2">
            <BiBarChart className="size-6" color="red" />
            <p className="text-red-600">Taqqoslashga qo'shish</p>
            <FiHeart color="red" />
            {/* {isFavorite ? (
            <FaHeart
              className=""
              style={{
                animationIterationCount: "1",
              }}
              size={24}
              color="#a52a2a"
              onClick={handleFavorite}
            />
          ) : (
            <FiHeart
              className=""
              size={24}
              onClick={handleFavorite}
              color="gray"
            />
          )} */}
            <p className="text-red-600">Saralanganlarga qo'shish</p>
            <PiShareFat color="red" />
            <p className="text-red-600">Ulashish</p>
          </div>
        </div>
        <div className="">
          <div className="gap-2 pl-5">
            <img
              className="rounded-2xl w-[420px] h-[480px]"
              src={images[0]}
              alt=""
            />
          </div>
          <div className="flex">
            {images.map((image) => (
              <img src={image} className="w-[60] h-[80px] rounded-xl py-1" />
            ))}
            <FaChevronDown className="size-3 ml-[20px]" />
          </div>
        </div>
      </div>

      <div className="w-[400px]">
        <div className="border rounded-xl px-8 py-6">
          <div className="border-b">
            <p className="text-xl font-bold">{sellPrice} so'm</p>
            <div className="flex justify-between items-center pt-4 pb-4">
              <p className="text-gray-500">
                Yetkazib berish to'g'risida ma'lumot:
              </p>
              <FiInfo color="gray" />
            </div>
            <div className="pb-12">
              <div className="flex items-center gap-2">
                <LuTruck size={22} />
                <p className="font-bold">Standart yetkazib berish</p>
              </div>
              <p className="w-[350px] pl-8">
                Manzilga qarab 5 soatdan 3 kungacha yetkazib beriladi
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-6 pb-4">
            <button className="flex items-center w-full h-[45px] px-16 gap-2 text-white bg-green-400 text-lg rounded-xl">
              <RiShoppingBag3Line size={22} />
              Savatchaga qo'shish
            </button>
            <button className="w-full h-[45px] text-black border-black border-2 text-lg rounded-xl">
              Bir klikda sotib olish
            </button>
          </div>
          <div className="flex">
            <p className="text-[20px] font-bold">Prestige computers</p>
            <CiMedal size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
