import React from "react";
import "./Header.css";
import Content from "./Content";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <ul>
            <li>
              <a href="">SKATEBOARDS</a>
            </li>
            <li>
              <a href="">BANZAI MINIMART</a>
            </li>
            <li>
              <a href="">NEWS</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
          </ul>
          <img
            src="https://cdn.shopify.com/s/files/1/0606/6788/7856/t/2/assets/banzai-logo.svg?v=15609163023979835111636476142"
            alt="#"
          />
          <div>
            <a href="">SEARCH</a>
            <a href="">CART (0)</a>
          </div>
        </div>
      </header>
      <section>
        <img
          src="https://cdn.shopify.com/s/files/1/0606/6788/7856/files/TS-Banzai-Shoot-55_Kopie_3c5bcbbd-ddc2-4085-8dc8-eec6cc43eb1b_1950x.jpg?v=1656336890"
          className="kids"
          alt=""
        />
      </section>
      <Content />
    </Fragment>
  );
};

export default Header;
