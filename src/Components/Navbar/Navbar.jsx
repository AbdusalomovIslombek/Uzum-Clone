import React, { useEffect, useState } from "react";
import { BsCart2, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { useTranslation } from "react-i18next";
import { BiBarChart, BiMenu } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { LiaUser } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ru");
  const [darkMode, setdarkMode] = useState(() => {
    const saqlangan = localStorage.getItem("darkMode");
    return saqlangan ? saqlangan : false;
  });

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const { comparison, favorite, cart, user } = useStore();
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function changeLanguage() {
    if (language === "uz") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else {
      i18n.changeLanguage("uz");
      setLanguage("uz");
    }
  }
  return (
    <div>
      <div>
        <img
          src="https://olcha.uz/uploads/advertising/images/top/7xlobVcBgEnWvETyrySM2DwRBppXsL9iqn0ps8Bc.jpg"
          alt=""
          className="flex justify-center w-[2000px] h-[60px]"
        />
        <div className="flex justify-between items-center bg-olcha p-2 px-10">
          <div className="flex gap-4">
            <button className="flex items-center h-8 w-[165px] bg-white text-olcha rounded-xl px-5 dark:bg-dark">
              0%Muddatli to'lov
            </button>
            <button className="flex items-center h-8 w-32 text-white rounded-xl border-2 px-5 dark:border-dark dark:text-dark">
              Chegirmalar
            </button>
            <button className="flex items-center h-8 w-36 bg-white text-olcha rounded-xl px-5 dark:bg-dark">
              Yutuqli o'yinlar
            </button>
            <Link
              className="flex items-center text-white rounded-xl dark:text-dark ml-8"
              to="/delivery-points"
            >
              Magazin xaritasi
            </Link>
          </div>

          <div className="flex gap-6">
            <a
              href="tel:+998712022021"
              className="flex items-center text-white dark:text-dark text-[20px] font-bold"
            >
              +998 (71) 202 2021
            </a>
            <button className="flex items-center h-9   w-40 text-white rounded-xl border-2 px-4 dark:border-dark dark:text-dark">
              olcha da soting
            </button>

            <div className="flex border-x dark:border-dark">
              <a href="" className="text-white p-2 dark:text-dark">
                Ўзб
              </a>
              <a href="" className="text-white p-2 dark:text-dark">
                O'z
              </a>
              <a href="" className="text-white p-2 dark:text-dark">
                Рус
              </a>
            </div>
          </div>
        </div>

        <div
          className={`flex w-full items-center p-3 left-0 top-0 z-40 ${
            sticky
              ? "stiky top-0 z-[999] bg-white backdrop-blur-[5px] fixed p-5 flex justify-between dark:bg-dark dark:text-olcha px-10 shadow"
              : "p-6 flex justify-between dark:bg-dark dark:text-olcha px-10 bg-transparent"
          }`}
        >
          <div className="flex items-center gap-8">
            <Link to={"/"}>
              <img
                src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
                alt=""
                className="w-[100px]"
              />
            </Link>
            <button className="flex justify-center border-2 rounded-xl px-4 py-[9px] border-black dark:border-olcha dark:text-olcha w-[150px] gap-3 text-xl">
              <BiMenu className="flex items-center size-7" />
              Katalog
            </button>
          </div>

          <div className="flex items-center border-2 rounded-xl bg-blue-gray-50 dark:bg-dark dark:text-dark dark:border-olcha pr-1">
            <input
              type="text"
              placeholder="Katalog bo'yicha qidirish"
              className="px-4 py-3 outline-none w-[600px] rounded-xl dark:bg-dark dark:text-olcha bg-blue-gray-50"
            />
            <button className="px-4 py-2 bg-olcha rounded-xl">
              <LuSearch className="size-5" />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <button
              className="flex items-center gap-2 text-lg hover:bg-gray-100"
              onClick={() => setdarkMode(!darkMode)}
            >
              {darkMode ? (
                <>
                  <BsSunFill className="size-5" />
                  <span className="hidden lg:flex">Light</span>
                </>
              ) : (
                <>
                  <BsMoonFill className="size-5" />
                  <span className="hidden lg:flex">Dark</span>
                </>
              )}
            </button>
            <Link
              className="items-center gap-2 text-sm hover:bg-gray-100 relative hidden lg:flex flex-col"
              to={"/comparison"}
            >
              <BiBarChart className="size-6" />
              Taqqoslash
              <span className="absolute -right-1 -top-1 text-sm text-olcha">
                {/* {favorite.length == 0 ? "" : favorite.length} */}
              </span>
            </Link>
            <Link
              className="items-center gap-2 text-sm hover:bg-gray-100 relative hidden lg:flex flex-col"
              to={"/favorite"}
            >
              <FiHeart className="size-6" />
              Sevimlilar
              <span className="absolute -right-1 -top-1 text-sm text-olcha rounded-full w-5 h-5 flex justify-center">
                {favorite.length == 0 ? "" : favorite.length}
              </span>
            </Link>
            <Link
              className="items-center gap-2 text-sm hover:bg-gray-100 relative hidden lg:flex flex-col"
              to={"/cart"}
            >
              <BsCart2 className="size-6" />
              Savatcha
              <span className="absolute -right-1 -top-1 text-sm text-white bg-olcha rounded-full w-5 h-5 flex justify-center">
                {cart.length == 0 ? "0" : cart.length}
              </span>
            </Link>
            <Link
              className="flex items-center gap-2 text-sm hover:bg-gray-100 flex-col"
              to={"/auth"}
            >
              {user.photoURL != undefined ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-8 rounded-full"
                />
              ) : (
                <LiaUser className="size-6" />
              )}

              {user.displayName == undefined ? (
                <span className="hidden lg:flex">Kirish</span>
              ) : (
                <span className="hidden xl:flex text-xs">
                  {user.displayName}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
