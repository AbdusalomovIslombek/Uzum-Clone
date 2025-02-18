import React from "react";
import Countdown from "../../Components/CountDown/CountDown";
import { CarouselData } from "../../data/carouselData";

const Cards = () => {
  const { images, title, fullPrice, sellPrice, installmentPrice, productId } =
    CarouselData;
  return (
    <div className="border-2 rounded-xl border-olcha w-[290px] h-[380px] py-2 px-3">
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-bold dark:text-olcha">Kun mahsuloti</p>
          <Countdown />
        </div>
        <div className="flex items-center flex-col">
          <img src={images} alt="" className="w-[180px]" />
        </div>
        <p className="">{title}</p>
        <div className="py-5">
          <div className="flex items-center gap-2">
            <p className="font-bold text-olcha">{sellPrice} so'm</p>
            <p className="line-through text-sm  right-28  text-blue-gray-200 dark:text-white">
              {fullPrice} so'm
            </p>
          </div>
          <p className="bg-yellow-700 w-32 mt-2 px-2 text-xs rounded-md p-1 dark:bg-white dark:text-olcha">
            {installmentPrice} so'm x 12 oy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
