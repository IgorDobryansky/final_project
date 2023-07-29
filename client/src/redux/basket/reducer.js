import {
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
  CLEAR,
  // SET_PRODUCTS
} from "./actions";
// import productImage from "../../assets/images/basket/product-image.png";

// const initialState = {
//   productsArray: [
//     {
//       _id: {$oid: "64b10c033c7ec254e00b68ec"},
//       enabled: true,
//       imageUrls: [
//         "https://res.cloudinary.com/da3lgdlf3/image/upload/f_auto,q_auto/v1/products/jisjshwbdsutpwymxqha"
//       ],
//       quantity: {$numberInt: "3"},
//       name: "кава lavazza crema e gusto (250 г), растворимая",
//       currentPrice: {$numberDouble: "149.99"},
//       previousPrice: {$numberInt: "199"},
//       categories: "instant",
//       productUrl: "/coffee",
//       weight: {$numberInt: "250"},
//       grade: "arabica",
//       degree_of_roasting: "medium",
//       brand: "Lavazza",
//       type: "instant",
//       itemNo: "88143",
//       date: {$date: {$numberLong: "1689324547464"}},
//       __v: {$numberInt: "0"}
//     },
//     {
//       _id: {$oid: "64b10c153c7ec254e00b68ef"},
//       enabled: true,
//       imageUrls: [
//         "https://res.cloudinary.com/da3lgdlf3/image/upload/f_auto,q_auto/v1/products/rqeqdmkyidyaj1xhxk2v"
//       ],
//       quantity: {$numberInt: "1"},
//       name: "кава alvorada espresso (1 кг), зерно",
//       currentPrice: {$numberDouble: "439.99"},
//       previousPrice: {$numberInt: "539"},
//       categories: "grain",
//       productUrl: "/coffee",
//       weight: {$numberInt: "1000"},
//       grade: "arabica",
//       degree_of_roasting: "light",
//       brand: "Alvorada",
//       type: "in_grains",
//       itemNo: "751675",
//       date: {$date: {$numberLong: "1689324565849"}},
//       __v: {$numberInt: "0"}
//     }
//   ]
//   // isDeleting: false
// };
const initState = {
  productsArray: []
}

// const initialState = {
//   productsArray: [
//     {
//       id: 1,
//       name: "Кава Melitta Bella Crema Bio (750 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       oldPrice: 1231,
//       image: productImage,
//       count: 1
//     },
//     {
//       id: 2,
//       name: "Кава Melitta Bella Crema Bio (1000 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       image: productImage,
//       count: 1
//     },
//     {
//       id: 3,
//       name: "Кава Melitta Bella Crema Bio (1250 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       image: productImage,
//       count: 1
//     },
//     {
//       id: 4,
//       name: "Кава Melitta Bella Crema Bio (1500 г), зерно",
//       price: +Date.now().toString().slice(-4),
//       oldPrice: 1231,
//       image: productImage,
//       count: 1
//     }
//   ],
//   isDeleting: false
// };

// eslint-disable-next-line default-param-last
// const basketReducer = (state = [], action) => {
const basketReducer = (state = initState, action) => {
  switch (action.type) {
    // case SET_PRODUCTS:
    //   return action.payload;

    case REMOVE_PRODUCT:
      return {
        ...state,
        isDeleting: true,
        productsArray: state.productsArray.filter(
          (product) => product.itemNo !== action.payload
        )
      };
      case ADD_PRODUCT:
      return {
        ...state,
        productsArray: [...state.productsArray, action.payload],
      };
    case INCREASE_COUNT:
      return {
        ...state,
        productsArray: state.productsArray.map((product) =>
          product.itemNo === action.payload
            ? {
              ...product,
              quantity: parseFloat(product.quantity) + 1
            }
            : product
        )
      };
    case DECREASE_COUNT:
      return {
        ...state,
        productsArray: state.productsArray.map((product) =>
          product.itemNo === action.payload
            ? {
              ...product,
              quantity: Math.max(
                  parseFloat(product.quantity) - 1,
                  1
                )
            }
            : product
        )
      };

    case CLEAR:
      return {
        ...state,
        productsArray: []
      };
    default:
      return state;
  }
};

export default basketReducer;
