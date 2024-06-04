// import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>E Shopping</h1>
//       </div>

//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// ./shop.jsx
// import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>E Shopping</h1>
//       </div>

//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product key={product.id} data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>PedroTech Shop</h1>
//       </div>

//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E Shopping</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};