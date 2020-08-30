import React, { useEffect } from "react";
import "./App.css";
import HeaderContent from "./Header";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import {Home,Products,Detail,Cart} from './pages'
import StateProvider from "./StateProvider";
import reducer, { initialState } from "./reducer";
import CartModal from "./Modal";

const CustomRoute = (props) => {
  let path = props.path;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return <Route {...props} />;
};

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <header>
          <HeaderTop />
          <HeaderContent />
          <Navbar />
        </header>
        <Switch>
          <CustomRoute exact path="/" component={Home} />
          <CustomRoute path="/category/:type" exact component={Products} />
          <CustomRoute path="/detail/:slug" component={Detail} />
          <CustomRoute path="/viewcart" component={Cart} />
          <CustomRoute path="*" exact>
            <h2>Not Found</h2>
          </CustomRoute>
        </Switch>
        <CartModal />
        <Footer />
      </Router>
    </StateProvider>
  );
}

export default App;
