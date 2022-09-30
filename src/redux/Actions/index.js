import { async } from "@firebase/util";
import axios from "axios";
import Swal from "sweetalert2";
export function getAllProducts() {
  return async function(dispatch) {
    dispatch(setLoading(true));
    let json = await axios.get("https://api-movilgates.herokuapp.com/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
    dispatch(setLoading(false));
  };
}

export const setSearch = (payload) => (dispatch) => {
  dispatch({
    type: "CASE_SEARCH",
    payload,
  });
};

export function getPhonesById(id) {
  return async function(dispatch) {
    try {
      dispatch(setLoading(true));
      let json = await axios.get(`https://api-movilgates.herokuapp.com/products/${id}`);
      dispatch({
        type: "GET_PHONES_BY_ID",
        payload: json.data,
      });
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getClean(payload) {
  return {
    type: "GET_CLEAN",
    payload,
  };
}

export function getImg(payload) {
  return {
    type: "GET_IMG",
    payload,
  };
}

// export function getFilterByCategories(payload) {
// 	return {
// 		type: 'GET_FILTER_BY_CATEGORIES',
// 		payload,
// 	};
// }
// export function getFilterByRam(payload) {
// 	return {
// 		type: 'GET_FILTER_BY_RAM',
// 		payload,
// 	};
// }
export function getSort(payload) {
  return {
    type: "GET_SORT",
    payload,
  };
}
export function getSortByPrice(payload) {
  return {
    type: "GET_SORT_BY_PRICE",
    payload,
  };
}
// export function getFilterByCapacity(payload) {
// 	return {
// 		type: 'GET_FILTER_BY_CAPACITY',
// 		payload,
// 	};
// }
export const setFilter = (filter, filterName) => (dispatch) => {
  dispatch({
    type: "SET_FILTER",
    payload: {
      filter,
      filterName,
    },
  });
};

export function addUser(payload) {
  console.log("Payload en addUser-actions", payload);
  return async function() {
    try {
      const newUser = {
        email: payload.email,
      };
      await axios.post("https://api-movilgates.herokuapp.com/users", newUser);
    } catch (e) {
      console.log(e);
    }
  };
}

export function setLoading(payload) {
  return {
    type: "SET_LOADING",
    payload,
  };
}
export function addToCart(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}
export function getCart() {
  return {
    type: "GET_CART",
  };
}
export function deleteProductInCart(payload) {
  return function(dispatch) {
    dispatch({
      type: "DELETE_PRODUCT_IN_CART",
      payload,
    });
  };
}

export function cleanCart() {
  return function(dispatch) {
    dispatch({
      type: "CLEAN_CART",
    });
  };
}

export const getProductsByNameAndFilters = (search, filters) => async (
  dispatch
) => {
  dispatch(setLoading(true));
  if (!search) search = "";
  let filterString = "";
  for (const filter in filters) {
    filterString += "&" + filter + "=" + filters[filter];
  }
  //BUENA MANERA DE UTILIZAR EL AXIOS
  const resultado = await axios
    .get(
      "https://api-movilgates.herokuapp.com/products?" +
        "name=" +
        search.toLowerCase().trim() +
        filterString
    )
    //'https://api-movilgates.herokuapp.com/products?' +'name=' +search.toLowerCase().trim() +filterString
    //https://api-movilgates.herokuapp.com/products?name=+&ram=&category=Tablets&capacity= EJEMPLO
    .then((res) => res.data);
  dispatch({
    type: "GET_PRODUCTS_BY_NAME_AND_FILTERS",
    payload: resultado,
  });
  //BUENA MANERA DE UTILIZAR EL AXIOS
  dispatch(setLoading(false));
};
export const getCategories = () => async (dispatch) => {
  const resultado = await axios("https://api-movilgates.herokuapp.com/brands").then(
    (res) => res.data
  );
  dispatch({
    type: "GET_ALL_CATEGORIES",
    payload: resultado,
  });
};
export const getRams = () => async (dispatch) => {
  const json = await axios("https://api-movilgates.herokuapp.com/rams").then(
    (res) => res.data
  );
  dispatch({
    type: "GET_RAMS",
    payload: json,
  });
};
export const getCapacity = () => async (dispatch) => {
  const json = await axios("https://api-movilgates.herokuapp.com/capacities").then(
    (res) => res.data
  );
  dispatch({
    type: "GET_CAPACITY",
    payload: json,
  });
};

export const searching = (payload) => {
  return {
    type: "SEARCHING",
    payload,
  };
};

export const handleClearCart = () => {
  alert("clickeado");
  return {
    type: "CLEAR_CART",
  };
};
export function getPurchase() {
  return async function(dispatch) {
    let json = await axios.get("https://api-movilgates.herokuapp.com/purchases");
    return dispatch({
      type: "GET_PURCHASE",
      payload: json.data,
    });
  };
}

export function postPurchase(payload) {
  return async function(dispatch) {
    console.log(payload, "ACTION DE POSTPURCHASE");
    const purchase = await axios.post(
      "https://api-movilgates.herokuapp.com/purchases",
      payload
    );
    return purchase;
  };
}
export function getPurchaseRepeat(payload) {
  return {
    type: "GET_PURCHASE_REPEAT",
    payload,
  };
}

export function addInputPurchase(payload) {
  return function(dispatch) {
    return dispatch({
      type: "ADD_INPUT_PURCHASE",
      payload,
    });
  };
}

export function setFinalPrice(payload) {
  return function(dispatch) {
    return dispatch({
      type: "FINAL_PRICE",
      payload,
    });
  };
}
export function postFeedback(payload) {
  return async function(dispatch) {
    console.log(payload, "ACTION DE FEEDBACKS");
    const feedback = await axios.post(
      "https://api-movilgates.herokuapp.com/feedbacks",
      payload
    );
    return dispatch({
      type: "POST_FEEDBACK",
      payload: feedback,
    });
  };
}

export function getFeedbacks(payload) {
  console.log("FEEDBACK A ENVIAR:", payload);
  return async function(dispatch) {
    let feedBacks = await axios.get("https://api-movilgates.herokuapp.com/feedbacks");
    return dispatch({
      type: "GET_FEEDBACKS",
      payload: feedBacks,
    });
  };
}

export function postPhone(payload) {
  return async function(dispatch) {
    const newPhone = await axios.post(
      "https://api-movilgates.herokuapp.com/products",
      payload
    );
    return newPhone;
  };
}

export function putPhone(id, payload) {
  return async function() {
    const modifyPhone = await axios.put(
      `https://api-movilgates.herokuapp.com/products/${id}`,
      payload
    );
    return modifyPhone;
  };
}

export function deletePhone(id) {
  return async function() {
    const deletePhone = await axios.delete(
      `https://api-movilgates.herokuapp.com/products/${id}`
    );
    return deletePhone;
  };
}

export function preventCartBug() {
  return { type: "PREVENT_CART_BUG" };
}

export function purchaseMail(payload) {
  return async function() {
    await axios.post("https://api-movilgates.herokuapp.com/purchases/purchasemail", payload);
  };
}

// esta action se va a utilizar al momento de simular el despacho del producto.
export function shippingMail(payload) {
  return async function() {
    await axios.post("https://api-movilgates.herokuapp.com/purchases/shippingmail", payload);
  };
}
