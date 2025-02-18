import React from "react";
import { useStore } from "../../store/store";
import { Products } from "../../data/productsData";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { Footer } from "../../Components/Footer/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

const Cart = ({ product }) => {
  const { images, title, fullPrice, productId } = product;
  const { cart, products } = useStore();
  const cartItems = cart.map((id) =>
    Products.find((product) => product.productId === id)
  );
  return (
    <div className="flex justify-center gap-6 px-8">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between border rounded-xl px-6 w-full p-6 mb-6 dark:border-olcha">
          <p className="text-5xl dark:text-olcha">Savatcha 2 mahsulot bor</p>
          <div className="flex justify-between flex-wrap border-b gap-20 dark:border-olcha">
            <div className="flex pt-6 pb-4">
              <img
                // src={item.images[0]}
                // src="https://olcha.uz/image/original/products/supplier/stores/1/2023-09-13/pQIvLk5PqlF9p4Wcobtd6rNjLTBo67eltmac4OoVMgVKa2X13vSXN9cITv77.jpg"
                src={images}
                alt=""
                className="w-28"
              />
              <div className="pl-4">
                <p className="h-[40px] text-[16px]">
                  Apple iPhone 15 Pro Max 256GB Natural titanium
                </p>
                <p className="text-blue-gray-400 h-[40px]">Olcha Market</p>
                <div className="flex items-center gap-4">
                  <button className="text-blue-500 dark:text-olcha">
                    Sevimlilarga qo'shish
                  </button>
                  <p className="text-gray-300">|</p>
                  <button className="text-blue-500 dark:text-olcha">
                    O'chirish
                  </button>
                </div>
              </div>
            </div>

            <div className="flex pt-6 pl-28 gap-6">
              <div className="flex justify-center bg-white border-black rounded-xl px-3 gap-5 w-[120px] h-[40px] dark:bg-olcha dark:text-dark">
                <button>
                  <HiMiniMinus
                    size={22}
                    color="gray"
                    className="dark:text-olcha"
                  />
                </button>
                <button className="">1</button>
                <button>
                  <HiMiniPlus size={22} color="black" />
                </button>
              </div>
              <p className="font-bold dark:text-olcha">1 000 000 so'm</p>
            </div>
          </div>

          {/* <div className="">
          <p>{cartItems.reduce((acc, item) => acc + item.sellPrice, 0)} so'm</p>
          </div> */}
        </div>

        <div className="border w-full rounded-xl px-6 py-4 mb-32 dark:border-olcha">
          <div className="">
            <p className="text-5xl dark:text-olcha">Sizning ma'lumotlaringiz</p>
            <div className="flex justify-center items-center pt-6 gap-6">
              <div className="">
                <p className="text-gray-600">Ism va familiya</p>
                <input
                  type="text"
                  className="border-2 dark:bg-dark dark:border-olcha dark:text-olcha border-black rounded-xl w-[460px] h-[45px] px-6"
                />
              </div>
              <div>
                <p className="dark:text-gray-600">Telefon</p>
                <div className="flex justify-between border-2 border-black rounded-xl w-[460px] h-[45px] dark:border-olcha">
                  <button className="flex items-center gap-4 text-black border-r-2 border-black rounded-l-xl px-6 dark:bg-dark dark:border-olcha dark:text-olcha">
                    +998
                    <IoIosArrowDown />
                  </button>
                  <input
                    type="text"
                    placeholder="(_ _) _ _ _ _ _ _ _"
                    className="rounded-r-xl w-[460px] h-[40px] px-6 dark:bg-dark dark:text-olcha"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[670px] border rounded-xl px-8 py-4 dark:border-olcha">
        <div className="flex justify-between border-b pt-2 pb-2 dark:border-olcha">
          <p className="text-xl font-bold">Jami:</p>
          <p className="text-xl font-bold dark:text-olcha">23 764 900 so'm</p>
        </div>
        <div className="py-4">
          <div className="flex justify-between border-2 border-black rounded-xl dark:border-olcha">
            <input
              type="text"
              placeholder="Promokodni kirgazing"
              className="rounded-l-xl h-[50px] px-6 dark:bg-dark dark:text-olcha"
            />
            <button className="h-[50px] bg-olcha text-white px-6 rounded-r-xl dark:text-dark">
              Kiritish
            </button>
          </div>
          <div className="flex justify-between border-b-2 py-4 dark:border-olcha">
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-base font-bold">Qiymati:</p>
              <p className="text-base font-bold">Promokod:</p>
              <p className="text-base font-bold">Ishlatilgan bonus:</p>
              <p className="text-base font-bold w-[200px]">
                Naqd pul to'lash uchun komissiya miqdori:
              </p>
              <p className="text-base font-bold">Yetkazib berish summasi:</p>
            </div>
            <div className="flex flex-col gap-3 items-end dark:text-olcha">
              <p>23 764 900 so'm</p>
              <p>0 so'm</p>
              <p>0 so'm</p>
              <p>0 %</p>
              <p className="">0 so'm</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-base font-bold pb-6">Yetkazib berish:</p>
            <p className="text-base font-bold">To'lov turi:</p>
            <p className="text-base font-bold">Buyurtma turi:</p>
          </div>
          <div className="flex flex-col items-end gap-12 dark:text-olcha">
            <p className="w-[150px]">Kurer orqali yetqazib berish</p>
            <p className="text-base font-bold">To'liq to'lash</p>
          </div>
        </div>
        <div className="flex items-center gap-2 pb-4">
          <FiInfo color="red" />
          <p className="text-olcha">Вы не авторизованы</p>
        </div>
        <button className="w-full h-[50px] bg-olcha text-white rounded-xl dark:text-dark">
          Buyurtma berish
        </button>
        <div className="py-4">
          <p className="text-gray-600 text-sm">
            "Buyurtma berish" tugmasi bosish orqali
          </p>
          <p className="text-blue-500 text-sm dark:text-blue-gray-400">
            ommaviy taklif shartnomasiga
          </p>
          <p className="text-gray-600 text-sm">roziman</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
