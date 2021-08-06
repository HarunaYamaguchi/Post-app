import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Account from "./templates/Account";
import Complete from "./templates/Complete";
import Home from "./templates/Home";
import Login from "./templates/Login";
import MyPage from "./templates/MyPage";
import NewPost from "./templates/NewPost";
import Search from "./templates/Search";
// import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/mypage" component={MyPage}></Route>
        <Route exact path="/account" component={Account}></Route>
        <Route exact path="/newpost" component={NewPost}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/complete" component={Complete}></Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
