import React from "react";
import Header from "./Header";
import HeaderSp from "./HeaderSp";
import useWindowWidth from "../hooks/useWindowWidth";

const AppHeader = () => {
  const width = useWindowWidth();
  const isSp = width <= 767;

  return isSp ? <HeaderSp /> : <Header />;
};

export default AppHeader;
