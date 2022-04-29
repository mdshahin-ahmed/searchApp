import React, { useState } from "react";
import Product from "../Product/Product";
import "./Home.css";
const allData = [
  {
    id: 1,
    brandName: "Apple",
    img: "data:image/jpeg;base64,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",
    price: 2500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga eum ex? Voluptates, repellendus aspernatur!",
  },
  {
    id: 2,
    brandName: "HP",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkM2wzORUVGVusIS_yduDcdL4Bo31Un9l6w&usqp=CAU",
    price: 2000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga eum ex? Voluptates, repellendus aspernatur!",
  },
  {
    id: 3,
    brandName: "Asus",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW11AG09yLCGXaronLg0GIPqrMsVLBwYRsjA&usqp=CAU",
    price: 1000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga eum ex? Voluptates, repellendus aspernatur!",
  },
  {
    id: 4,
    brandName: "Lenovo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PVKG9t9fAEO2ylSSYBsSj_8Dh9I6KrkE9A&usqp=CAU",
    price: 800,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga eum ex? Voluptates, repellendus aspernatur!",
  },
  {
    id: 5,
    brandName: "Dell",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWQF1aDrHoioHU3bFBB0LYNvdAuGi2-4Gzw&usqp=CAU",
    price: 500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga eum ex? Voluptates, repellendus aspernatur!",
  },
];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e);
  };

  return (
    <div>
      <div className="inputWrap">
        <input
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Search by Brand Name"
          type="text"
        />
      </div>
      <div className="containerWrap">
        <div className="container">
          <div className="row">
            {allData.map((data) => {
              // if (inputValue.length <= 0) {
              // } else if
              if (
                data.brandName
                  .toLowerCase()
                  .startsWith(inputValue.toLowerCase())
              ) {
                return <Product key={data.id} data={data}></Product>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
