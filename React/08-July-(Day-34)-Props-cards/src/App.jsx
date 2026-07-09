import React from "react";
import "./App.css";
import Card from "./Components/Card";

const products = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=90",
    pname: "iPhone 16 Pro Max",
    cname: "Apple",
    desc: "12GB RAM | 256GB Storage",
    price: "₹60,000",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwLvGFwXajCXqgUel3Mke0yJM3PPlZTogfyW75LNP1Q&s=10",
    pname: "Samsung S25 Ultra",
    cname: "Samsung",
    desc: "12GB RAM | 512GB Storage",
    price: "₹85,000",
  },
  {
    id: 3,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSo3FDcVuKiWBXDKEz-f4r6cZGVy4Tz61lXayc4jz62KEDYKEiZZgxbDeX_aTUj3he9TQMBCwVV0K3VYb5OScnm065DkJ_4pPXTXDQuJU-P2NO2pxJ22yx9yk32vZtf7hoAg4Q_vaZn3w&usqp=CAc",
    pname: "Google Pixel 9",
    cname: "Google",
    desc: "16GB RAM | 256GB Storage",
    price: "₹72,000",
  },
  {
    id: 4,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGDkkWo9j4Qtjs1txzzRBPA1HaU8rlOUBfFchsEROs1qJBM61F08dAK7fLF_2CaZY_7ZpmvNKKamkba9cVrLfmEjp45x3y5Y5NZH9HdHnYwuobjUDNT-96QTW42avSzWZmiHVYu0g&usqp=CAc",
    pname: "OnePlus 13",
    cname: "OnePlus",
    desc: "16GB RAM | 512GB Storage",
    price: "₹69,999",
  },
];

const App = () => {
  return (
    <div className="container">
      {products.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          pname={item.pname}
          cname={item.cname}
          desc={item.desc}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default App;