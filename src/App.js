import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./comps/About";
import Home from "./comps/Home";
import Posts from "./comps/Posts";
import SinglePost from "./comps/SinglePost";
import Projects from "./comps/Projects";
import NavBar from "./comps/NavBar";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/aboutMe" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Posts} path="/posts" />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}
