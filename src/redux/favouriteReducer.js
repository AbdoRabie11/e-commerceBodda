import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTVmMDI1YThkYmExMWYyMzg3NjRhNSIsImlhdCI6MTY3MjA3Mjg5OCwiZXhwIjoxNjcyMjQ1Njk4fQ.7Jg23tgNb-Dw57y6HjoefEJJMzBtGNQS0782QLMThPU";

const ADD_TO_FAV = "ADD_TO_FAV";
const GET_FAV = "GET_FAV";

const getFav = (products) => {
  console.log("====================================");
  console.log("00000000");
  console.log("====================================");
  return {
    type: GET_FAV,
    payload: products,
  };
};


export const fetchUsers = (queries = "") => {
  return async (dispatch) => {
    const options = getOptions();

    try {
      if (options !== "noToken") {
        const { data } = await axios.get(`${URL}?${queries}`, options);
        dispatch(getUsers(data));
      }
    } catch (error) {
      console.error("Error: fetchUsers action");
    }
  };
};

export const fetchFavorites = () => {
  return async (dispatch) => {
    try {
      const products = await axios({
        method: "get",
        url: "http://localhost:8000/api/v1/favorite",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      console.log("====================================");
      console.log("okkkk");
      console.log("====================================");
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };
};

const inialState = {
  products: [],
  touched: false,
};

export const favouriteReducer = (state = inialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return state;
    case GET_FAV:
      return state;
    default:
      return state;
  }
};

// const { type, payload } = action;

//   if (type === "ADD_FAV") {
//     let nCart = [...state.products]
//     const existed = nCart.findIndex((item) => item.id === payload.id)

//     if(existed <= -1) {
//       nCart = nCart.concat({ ...payload });
//     } else {
//       nCart = nCart.filter((item) => item.id !== payload.id)
//     }

//     return {
//       ...state,
//       products: nCart,
//       touched: true
//     };
//   }
//   return {
//     ...state,
//   };
