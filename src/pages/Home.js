import React from "react";
import Categories from "../components/Categories";
import CarouselArea from "../components/CarouselArea";
import Discount from "../components/Discount";
import Showcase from "../components/Showcase";
import NavBar from "../components/NavBar";
import ContainerWithCarousel from "../components/ContainerWithCarousel";
function Home() {
  return (
    <>
      <NavBar />
      <Categories />
      <CarouselArea />
      <Discount />
      <Showcase />
      <ContainerWithCarousel />
    </>
  );
}

export default Home;
