import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../genericComponents/Header/Header";
import DetailsHeroImage from "./components/DetailsHeroImage";
import images from "../../assets/images/imageImports";
import GreyHorizontalLine from "../../genericComponents/GreyHorizontalLine";
import ProductDescription from "./components/ProductDescription";
import DescriptionBox from "./components/DescriptionBox";
import SizeBox from "./components/SizeBox";
import PageFooter from "./components/PageFooter";
const Details = () => {
  // will get the category and id form HandleCardClick function in the home page
  // the category and id will be used in fetching the data from JSON
  const { category, id } = useParams();
  return (
    <>
      <Header pageName="Details" />
      <DetailsHeroImage imageName={images.coffee7} />
      <ProductDescription itemName="Coffee Mocha" />
      <GreyHorizontalLine />
      <DescriptionBox textDiscription="A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.." />
      <SizeBox />
      <PageFooter itemPrice="5.06" />
    </>
  );
};

export default Details;
