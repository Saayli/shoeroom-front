import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import './App.css';

import ProductList from './components/ProductList';
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import RouterDom from "./components/Router"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from "./components/Cart";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { getAccessTokenSilently, getIdTokenClaims, isAuthenticated, isLoading, user } = useAuth0();
  const [accessToken, setAccessToken] = useState();
  const [idTokenClaims, setIdTokenClaims] = useState();

  useEffect(() => {
    isAuthenticated && getAccessTokenSilently().then((token) => setAccessToken(token));
    isAuthenticated && getIdTokenClaims().then((claims) => setIdTokenClaims(claims));
  }, [isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <main>
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/" component={ProductList} exact />
            </Switch>
          </main>
          <Footer />
        </div>
    </BrowserRouter>
  );
};

export default App;
