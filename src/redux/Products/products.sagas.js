import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  setProducts,
  fetchProductsStart,
  setProduct,
} from "./products.actions";

import { auth } from "../../firebase/utils";

import productsTypes from "./products.types";
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProduct,
  handleFetchProduct,
} from "./products.helpers";

export function* addProduct({ payload }) {
  try {
    const timeStamp = new Date();
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timeStamp,
    });
    yield put(fetchProductsStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({
  payload: { filterType, startAfterDoc, persistProducts },
}) {
  try {
    const products = yield handleFetchProducts({
      filterType,
      startAfterDoc,
      persistProducts,
    });
    yield put(setProducts(products));
  } catch (err) {
    // console.log(err)
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (err) {
    // console.log(err)
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCTS_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    yield put(setProduct(product));
  } catch (err) {
    // console.log(err)
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ]);
}
