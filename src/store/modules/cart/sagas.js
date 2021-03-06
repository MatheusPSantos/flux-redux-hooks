import { call, put, all, select, takeLatest } from "redux-saga/effects";
import { formatPrice } from "../../../util/format";
import api from "../../../services/api";

import { addToCartSuccess, updateAmount } from "./actions";

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/product/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);
