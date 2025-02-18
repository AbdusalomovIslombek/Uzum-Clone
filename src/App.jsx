import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase";
import { Products } from "./data/productsData";
import { MainData } from "./data/mainData";
import { useStore } from "./store/store";
import DeliveryPoints from "./pages/DeliveryPoints/DeliveryPoints";
import Comparison from "./pages/Comparison/Comparison";

function App() {
  const { products, setProducts, mainData, setMainData } = useStore();
  const firebaseProducts = collection(db, "Products");
  const firebaseMainData = collection(db, "mainData");
  useEffect(() => {
    async function getProducts() {
      const data = await getDocs(firebaseProducts);
      setProducts(data.docs.map((doc) => ({ ...doc.data() })));
    }
    async function getMainData() {
      const data = await getDocs(firebaseMainData);
      setMainData(data.docs.map((doc) => ({ ...doc.data() })));
    }
    getMainData();
  }, []);

  return (
    <div className="dark:bg-dark dark:text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Auth} />
        <Route path="/favorite" Component={Favorite} />
        <Route path="/delivery-points" Component={DeliveryPoints} />
        <Route path="/comparison" Component={Comparison} />
        <Route path="/cart" Component={Cart} />
        <Route path="/Product/:id" Component={ProductInfo} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
