import React from "react";
import { useStore } from "../../store/store";
import { Products } from "../../data/productsData";
import Card from "../../Containers/Card/Card";

const Favorite = () => {
  const { favorite, addToFavorite, removeFromFavorite } = useStore();
  const favorites = favorite.map((id) =>
    Products.find((product) => product.productId === id)
  );
  return (
    <div>
      <div className="flex gap-5 flex-wrap ">
        {favorites.map((product) => (
          <Card product={product} key={product.productId} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
