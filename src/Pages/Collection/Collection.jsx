import React from "react";
import "./Collection.css";
import bg from "../../Assets/collection-line.png";
import nft from "../../Assets/nft-img.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
function Collection() {
  const data = {
    list1: [
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
    ],
    list2: [
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
    ],
    list3: [
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
      { img: nft, name: "NFT Name" },
    ],
  };
  return (
    <div className="collection">
      <img className="line-bg" src={bg} alt="" />
      <div className="heading-div">
        <h1 className="heading">Pharaoh Collection</h1>
        <p>Welcome to the Pharaoh God’s Club Collections</p>
      </div>
      <div className="slide-div">
        <h1 className="slide-head"> ( Male Pharaoh God )</h1>
        <Splide
          options={{
            autoplay: "play",
            type: "loop",
            rewind: true,
            perPage: 3,
            height: "auto",
            gap: "0.5rem",
            width: "80%",
            arrows: false,
            pagination: true,
            perMove: 3,
            drag: true,
            breakpoints: {
              1398: {
                width: "100%",
              },
              912: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          {data.list1.map((elem, key) => {
            return (
              <SplideSlide>
                <div className="nft-box" key={key}>
                  <img className="nft-img" src={elem.img} alt="Image 1" />
                  <p>{elem.name}</p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>{" "}
      </div>
      <div className="slide-div">
        <h1 className="slide-head"> ( Female Pharaoh God )</h1>

        <Splide
          options={{
            autoplay: "play",
            type: "loop",
            rewind: true,
            perPage: 3,
            height: "auto",
            gap: "0.5rem",
            width: "80%",
            arrows: false,
            pagination: true,
            perMove: 3,
            drag: true,
            breakpoints: {
              1398: {
                width: "100%",
              },
              912: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          {data.list1.map((elem, key) => {
            return (
              <SplideSlide>
                <div className="nft-box" key={key}>
                  <img className="nft-img" src={elem.img} alt="Image 1" />
                  <p>{elem.name}</p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="slide-div">
        <h1 className="slide-head"> ( Mutated Pharaoh God )</h1>

        <Splide
          options={{
            autoplay: "play",
            type: "loop",
            rewind: true,
            perPage: 3,
            height: "auto",
            gap: "0.5rem",
            width: "80%",
            arrows: false,
            pagination: true,
            perMove: 3,
            drag: true,
            breakpoints: {
              1398: {
                width: "100%",
              },
              912: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          {data.list1.map((elem, key) => {
            return (
              <SplideSlide>
                <div className="nft-box" key={key}>
                  <img className="nft-img" src={elem.img} alt="Image 1" />
                  <p>{elem.name}</p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Collection;
