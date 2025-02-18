import React from "react";
import { useStore } from "../../store/store";
import Card from "../../Containers/Card/Card";
import { Products } from "../../data/productsData";

const Favorite = () => {
  const { favorite, addToFavorite, removeFromFavorite, products } = useStore();
  const favorites = favorite.map((id) =>
    Products.find((product) => product.productId === id)
  );
  return (
    <div>
      <div className="flex-wrap gap-5 py-3 px-10">
        <div>
          <a href="" className="text-4xl dark:text-olcha">
            Sevimli mahsulotlar
          </a>
        </div>
        {favorite.length == 0 ? (
          <div className="flex flex-col items-center py-16">
            <img
              src="https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png"
              alt=""
              className="w-[140px] pb-2"
            />
            <p className="dark:text-olcha text-xl font-bold">
              Sevimli mahsulotlar yo'q
            </p>
          </div>
        ) : (
          <div className="flex gap-5 py-8">
            {favorites.map((product) => (
              <Card product={product} key={product.productId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
