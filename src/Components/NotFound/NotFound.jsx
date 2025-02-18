import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center gap-20 pt-12">
      <img
        className=""
        src="https://olcha.uz/_nuxt/network.BCpDSYMO.png"
        alt=""
      />
      <div>
        <p className="text-4xl font-bold pb-6">Network Error 511</p>
        <p className="text-xl pb-6">
          Nimadir xato ketdi, iltimos qaytadan urinib ko'ring.
        </p>
        <Link
          className="text-white text-base rounded-xl bg-olcha px-4 py-3"
          to={"/"}
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
