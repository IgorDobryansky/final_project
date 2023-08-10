import api from "./api";
import {
  getTopProducts,
  getNewProducts,
  getFeaturedProducts,
  getSaleProducts
} from "../redux/actions";

export const fetchTopProducts = () => async (dispatch) => {
  try {
    const response = await api.get(
      "/products/filter?grade=arabica,robusta&brand=Alvorada,Lavazza,Montecelio&perPage=9"
    );
    const products = response.data;
    console.log(products);
    dispatch(getTopProducts(products.products)); // Вызываем функцию действия для обновления состояния
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewProducts = () => async (dispatch) => {
  try {
    const response = await api.get(
      "/products/filter?grade=arabica,robusta&brand=Alvorada,Lavazza,Montecelio&perPage=9"
    );
    const products = response.data;
    dispatch(getNewProducts(products.products)); // Вызываем функцию действия для обновления состояния
  } catch (error) {
    console.log(error);
  }
};

export const fetchFeaturedProducts = () => async (dispatch) => {
  try {
    const response = await api.get(
      "/products/filter?grade=arabica,robusta&brand=Alvorada,Lavazza,Montecelio&perPage=9"
    );
    const products = response.data;
    dispatch(getFeaturedProducts(products.products)); // Вызываем функцию действия для обновления состояния
  } catch (error) {
    console.log(error);
  }
};

export const fetchSaleProducts = () => async (dispatch) => {
  try {
    const response = await api.get(
      "/products/filter?grade=arabica,robusta&brand=Alvorada,Lavazza,Montecelio&perPage=9"
    );
    const products = response.data;
    dispatch(getSaleProducts(products.products)); // Вызываем функцию действия для обновления состояния
  } catch (error) {
    console.log(error);
  }
};
