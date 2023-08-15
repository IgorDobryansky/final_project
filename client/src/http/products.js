// /* eslint-disable no-console */
// import api from "./api";
// import {
//   getTopProducts,
//   getNewProducts,
//   getFeaturedProducts,
//   getSaleProducts
// } from "../redux/actions/productsActions";

// export const fetchTopProducts = () => async (dispatch) => {
//   try {
//     const response = await api.get(
//       "/products/filter?grade=arabica,robusta&brand=Alvorada,Lavazza,Montecelio&perPage=9"
//     );
//     const products = response.data;
//     dispatch(getTopProducts(products.products));
//     console.log(products); // Вызываем функцию действия для обновления состояния
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchNewProducts = () => async (dispatch) => {
//   try {
//     const response = await api.get(
//       "/products/filter?perPage=9&date=2023-07-20"
//     );
//     const products = response.data;
//     dispatch(getNewProducts(products.products)); // Вызываем функцию действия для обновления состояния
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchFeaturedProducts = () => async (dispatch) => {
//   try {
//     const response = await api.get(
//       "/products/filter?perPage=9&grade=arabica,robusta&brand=Alvorada,Lavazza,Prima Italiano&degree_of_roasting=medium,dark"
//     );
//     const products = response.data;
//     dispatch(getFeaturedProducts(products.products)); // Вызываем функцию действия для обновления состояния
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchSaleProducts = () => async (dispatch) => {
//   try {
//     const response = await api.get("/products/filter?perPage=9&previousPrice");
//     const products = response.data;
//     dispatch(getSaleProducts(products.products)); // Вызываем функцию действия для обновления состояния
//   } catch (error) {
//     console.log(error);
//   }
// };
