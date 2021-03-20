import React, { createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Search from "./components/Search/Search";
import Signup from "./components/Signup/Signup";

export const UesContext = createContext();

function App() {
  const [shareData, setShareData] = useState({});
  return (
    <UesContext.Provider value={[shareData, setShareData]}>

      <Router>
        <Header></Header>
        <Switch>

          <PrivateRoute path='/destination'>
            <Destination></Destination>
          </PrivateRoute>

          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/search/:fakeId'>
            <Search></Search>
          </PrivateRoute>

          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UesContext.Provider>
  );
}

export default App;
