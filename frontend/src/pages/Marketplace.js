import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import classes from "./css/Marketplace.module.scss";
import bgr from "./../utils/images/bgremove.svg";

const Marketplace = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.bannerDiv}>
        <Banner />
      </div>
      <div className={classes.cardDiv}>
        <h4>All APIs</h4>
        <div className={classes.mainGrid}>
          <div className={classes.grid}>
            <div className={classes.grid__item}>
              <Card
                APIname="Background Remove"
                APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
                APIimg={bgr}
              />
            </div>
            <div className={classes.grid__item}>
              <Card
                APIname="Background Remove"
                APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
                APIimg="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
              />
            </div>
            <div className={classes.grid__item}>
              <Card
                APIname="Background Remove"
                APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
                APIimg={bgr}
              />
            </div>
            <div className={classes.grid__item}>
              <Card
                APIname="Background Remove"
                APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
                APIimg={bgr}
              />
            </div>
            <div className={classes.grid__item}>
              <Card
                APIname="Background Remove"
                APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
                APIimg={bgr}
              />
            </div>
            <div className={classes.grid__item}>
              <Card
                APIname="Background Remove"
                APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
                APIimg={bgr}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Card
          APIname="Background Remove"
          APIdesp="The descriptipn of the API in quick brief and we will truncate it here..."
        /> */}
      </div>
    </div>
  );
};

export default Marketplace;
