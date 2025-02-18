import React from "react";
import { Link } from "react-router-dom";

const Comparison = () => {
  return (
    <div className="py-3 px-10">
      <div>
        <a href="" className="text-4xl dark:text-olcha">
          Tovarlarni solishtirish
        </a>
      </div>
      <div className="flex flex-col items-center pt-8">
        <img
          src="https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png"
          alt=""
          className="w-[130px] pb-4"
        />
        <p className="dark:text-olcha text-xl font-bold pb-2">
          Afsuski, bunday mahsulot hozirda mavjud emas.
        </p>
        <p className="text-gray-800 pb-8">
          Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi
          mumkin
        </p>
        <Link
          className="flex items-center dark:text-dark bg-olcha text-white rounded-xl w-[170px] h-[50px] px-7"
          to="/"
        >
          Asosiy sahifaga
        </Link>
      </div>
    </div>
  );
};

export default Comparison;
