import React from "react";
import Categories from "../components/Categories";
import CarouselArea from "../components/CarouselArea";
import Discount from "../components/Discount";
import Showcase from "../components/Showcase";
import NavBar from "../components/NavBar";
import ContainerWithCarousel from "../components/ContainerWithCarousel";
function Home() {
  const items = {
    image1: "https://i.postimg.cc/C1F1cKzL/showcase1.png",
    image2: "https://i.postimg.cc/tJN82Xny/showcase2.png",
    image3: "https://i.postimg.cc/dtnzCVKj/showcase3.png",
    image4: "https://i.postimg.cc/br53xP94/showcase4.png",
    image5: "https://i.postimg.cc/yYJfVJVK/showcase5.png",
    image6: "https://i.postimg.cc/tCLB7XTx/showcase6.png",
    image7: "https://i.postimg.cc/wjL0mSyb/showcase7.png",
    image8: "https://i.postimg.cc/pdvkYqKV/showcase8.png",
    image9: "https://i.postimg.cc/JhQxTZQN/showcase9.png",
  };
  return (
    <div>
      <NavBar />
      <Categories />
      <CarouselArea />
      <Discount />
      <Showcase
        image1={items.image1}
        image2={items.image2}
        image3={items.image3}
      />
      <ContainerWithCarousel />
      <Showcase
        image1={items.image4}
        image2={items.image5}
        image3={items.image6}
      />
      <Showcase
        image1={items.image7}
        image2={items.image8}
        image3={items.image9}
      />
      <div className="loginHandle">Hello</div>
    </div>
  );
}

export default Home;
