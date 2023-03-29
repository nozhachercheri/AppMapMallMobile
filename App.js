import { AppNavigator } from './navigation';
import {
authReducer, Init
} from"./reducers";
import React, { useEffect, useState } from 'react';
//Redux
import { Provider,useDispatch,useSelector } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import * as Font from "expo-font";
const rootReducer = combineReducers({
  auth: authReducer,
});
function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default class App extends React.Component {
  loadAssets = async () => {
    const fontAssets = cacheFonts([
      { OpenSans: require("./assets/fonts/OpenSans-Regular.ttf") },
      { Baloo: require("./assets/fonts/Baloo-Regular.ttf") },

    ]);

    await Promise.all([...fontAssets]);
  };

  componentDidMount() {
    this.loadAssets();
  }


  


  render() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
  return (
     <Provider store={store}>
        <AppNavigator />
     </Provider>
  
  );
  }
}

