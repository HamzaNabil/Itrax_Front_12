import { createStore } from "redux";

let store = createStore();

export default store;

// Props Drilling
// Context Api  [useContext]
// Redux

// To Create Context
// Create Context | createContext
// let context = createContext();
// <context.provider value="[{}]">   App </context.provider>

// To use Context
// import context to component
// import useContext from react
// let data = useContext(context)
