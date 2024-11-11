import { combineReducers, createStore } from "redux";
// import { myCreateStore } from "./my-redux";
import { productList } from "./productsList";
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  incrementCartItemQuantity,
  removeCartItem,
} from "./cartReducer";
import wishListReducer, {
  wishListAddItem,
  wishListRemoveItem,
} from "./wishListReducer";
import productsReducer from "./productsReducer";

// const initialState = {
//   products: productList,
//   cartItems: [],
//   wishList: [],
// };

export const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// const WISHLIST_ADD_ITEM = "wishList/addItem";
// const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case CART_REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (cartItem) => cartItem.productId !== action.payload.productId
//         ),
//       };
//     case CART_ITEM_INCREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 };
//           } else {
//             return cartItem;
//           }
//         }),
//       };
//     case CART_ITEM_DECREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems
//           .map((cartItem) => {
//             if (cartItem.productId === action.payload.productId) {
//               return {
//                 ...cartItem,
//                 quantity: cartItem.quantity - 1,
//               };
//             } else {
//               return cartItem;
//             }
//           })
//           .filter((cartItem) => cartItem.quantity > 0),
//       };
//     case WISHLIST_ADD_ITEM:
//       return {
//         ...state,
//         wishList: [...state.wishList, action.payload],
//       };
//     case WISHLIST_REMOVE_ITEM:
//       return {
//         ...state,
//         wishList: state.wishList.filter(
//           (wishItem) => wishItem.productId !== action.payload.productId
//         ),
//       };
//     default:
//       return state;
//   }
// }

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

console.log(store);

store.dispatch(addCartItem(1, 1));
store.dispatch(addCartItem(2, 12));
store.dispatch(addCartItem(5, 13));
store.dispatch(addCartItem(12, 30));
store.dispatch(addCartItem(3, 1));
store.dispatch(removeCartItem(2));
store.dispatch(incrementCartItemQuantity(5));

store.dispatch(decreaseCartItemQuantity(12));
store.dispatch(decreaseCartItemQuantity(1));

// const a = decreaseCartItemQuantity(70);
// console.log(a, "from line 138");
store.dispatch(wishListAddItem(1));
store.dispatch(wishListAddItem(13));
store.dispatch(wishListAddItem(24));
store.dispatch(wishListRemoveItem(1));
console.log(store.getState());
