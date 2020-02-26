import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEncryptor from "redux-persist-transform-encrypt";
import rootReducer from "../../reducers";



const encryptor = createEncryptor({
  secretKey: "my-low-key",
  onError() {
    // Handle the error.
  }
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store =  createStore(

 
    persistedReducer,
    {},
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);

export default store;
