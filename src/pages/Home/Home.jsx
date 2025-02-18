import { ThreeDots } from "react-loader-spinner";
import Category from "../../Components/Category/Category";
import { Footer } from "../../Components/Footer/Footer";
import CarouselComponent from "../../Components/Carousel/CarouselComponent";
import { useStore } from "../../store/store";
import { Carousel } from "@material-tailwind/react";
import Card from "../../Containers/Card/Card";
import Cards from "../../Containers/Cards/Cards";
import { MainData } from "../../data/mainData";
const Home = () => {
  if (MainData.length == 0)
    return (
      <div className="flex justify-center p-32">
        <ThreeDots color="#a52a2a" />
      </div>
    );

  return (
    <div className="dark:bg-dark dark:text-white px-9">
      <div className="flex justify-center">
        <div className="flex justify-center">
          <CarouselComponent />
        </div>
        <div className="">
          <Carousel
            className="w-[100%] rounded-xl"
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            autoplayDelay={5000}
          >
            <Cards
              product={
                ({
                  productId: 712,
                  title:
                    "Joystisk Sony PlayStation 5 DualSense Gray Camouflage (from U.A.E.)",
                  sellPrice: 915000,
                  fullPrice: 1300000,
                  installmentPrice: 108000,
                  images: [
                    "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-06-24/eveD7cM9AWuLGKGl3oRiQKnucWCjqbF16Gbq3beVcvxgY2bPbCEuWBn34yK0.JPG",
                  ],
                },
                {
                  productId: 713,
                  title: "Whoop 4.0 Fitness bilaguzuk",
                  sellPrice: 1065000,
                  fullPrice: 1264000,
                  installmentPrice: 125000,
                  images: [
                    "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-03-26/YBge9IxCHwult7idsf6w1rg9iXOp1LE0IabIm8ucSyNOAbTUgnQpztXdlK7C.jpg",
                  ],
                },
                {
                  productId: 714,
                  title: "Dubay shokoladi Fix Dessert Chocolatier (Original)",
                  sellPrice: 399000,
                  fullPrice: 520000,
                  installmentPrice: 47000,
                  images: [
                    "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-01-28/AzXTwqSDzGNy5NWjCXtJVCcFegiNQSbI1SsL44EMK0ppoyCYW4QJiRoZQlPp.jpg",
                  ],
                })
              }
            />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center gap-6 p-9">
        <img
          src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-12-07/m6p0KCXvKzR0coSQItBqZZLojsfyOaD60CoGTrIsFpg1MFQVmWlqc5jH29rE.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-12-07/IKVXPd1K9UBKruF9X1xMm7IgPyjKErlUv2TCy8Ie1VP9kKK5UOxBatmuHvy8.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-12-07/z5wQMZyEWoUKB0xcfQY2eqs3zL0f0RSXdrDWYZzclkuL4Ip1KMbcbqFkchFG.png"
          alt=""
          className="rounded-xl"
        />
      </div>
      {MainData.map((category, index) => {
        if (category.productList?.length != 0) {
          return <Category data={category} key={index} />;
        }
      })}
      <Footer />
    </div>
  );
};

export default Home;
