import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./default.scss";
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";

// components
import AdminToolbar from "./components/AdminToolbar";

// hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

//layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Order from "./pages/Order";
import About from "./pages/About";
import Thirtyfivemm from "./pages/Thirtyfivemm";
import MediumFormat from "./pages/MediumFormat";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <MainLayout>
              <About />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/35mm"
          render={() => (
            <MainLayout>
              <Thirtyfivemm />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/MediumFormat"
          render={() => (
            <MainLayout>
              <MediumFormat />
            </MainLayout>
          )}
        />
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <MainLayout>
              <Cart />
            </MainLayout>
          )}
        />
        <Route
          path="/payment"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Payment />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/order/:orderID"
          render={() => (
            <WithAuth>
              <AdminLayout>
                <Order />
              </AdminLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
