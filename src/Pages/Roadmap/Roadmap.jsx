import React from "react";
import "./Roadmap.css";
import img from "../../Assets/roadmap-img.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <ScrollAnimation
        duration={1.5}
        animateOnce={true}
        className="heading-div"
        animateIn="animate__jackInTheBox"
      >
        <h1 className="heading">Roadmap</h1>
        <p>Deep dive into our roadmap</p>
      </ScrollAnimation>
      <div className="roadmap-div">
        <div className="left-grid">
          <ScrollAnimation
            duration={1.25}
            animateOnce={true}
            className="top-grid-text"
            animateIn="animate__bounce"
          >
            <h1>Stop 1</h1>
            <p>
              Awakening the pharaohs <span>⚰️</span>
            </p>
          </ScrollAnimation>

          <ul>
            <ScrollAnimation
              duration={0.75}
              delay={800}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>Pharaoh gods club will be launching in april 2022</li>
            </ScrollAnimation>
            <ScrollAnimation
              duration={0.75}
              delay={900}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>5,555 unique PGC gods will be joined into this journey</li>
            </ScrollAnimation>
            <ScrollAnimation
              duration={0.75}
              delay={1000}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>
                1500 will be a whitelist mint for early supporters and OG'S
                minting at a lower price
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              duration={0.75}
              delay={1100}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>
                4000 will be available for Public mint 48 hours after WL sale
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              duration={0.75}
              delay={1200}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>
                72 hours after public sale, the mystery of the pharaohs will be
                revealed
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              duration={0.75}
              delay={1300}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>
                We have 20 legendary God's those who mint one of the gods will
                enter a free trip and ticket for 2 raffle to visit the land of
                the pharaohs and will also mint a free kingdom that will be
                there's to build in our onchain game and stacking feature.{" "}
                <span>⚰️</span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              duration={0.75}
              delay={1400}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <li>
                5% of mint sales will be given to a charity that helps affected
                people in Ukraine due to war, this will be done in a voting
                manner so the community decides to which organisation should we
                give
              </li>
            </ScrollAnimation>
          </ul>
        </div>

        <div className="center-grid center1">
          <ScrollAnimation
            duration={0.75}
            animateOnce={true}
            animateIn="animate__slideInDown"
          >
            <img src={img} className="sign" alt="" />
          </ScrollAnimation>
          <div className="line"></div>
        </div>
        <div className="mobile-none"></div>
        <div className="mobile-none"></div>
        <div className="center-grid center2">
          <ScrollAnimation
            duration={0.75}
            animateOnce={true}
            animateIn="animate__slideInDown"
          >
            <img src={img} className="sign" alt="" />
          </ScrollAnimation>
          <div className="line"></div>
        </div>

        <div className="right-grid">
          <ScrollAnimation
            duration={1.25}
            animateOnce={true}
            className="top-grid-text"
            animateIn="animate__bounce"
          >
            <h1>Stop 2</h1>
            <p>Let's feed on the weak.⚰️</p>
          </ScrollAnimation>
          <ScrollAnimation
            duration={0.75}
            delay={800}
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="flex"
          >
            <p className="grid-desc">
              After the launch of PGC, we will be setting 30% of mint sales in
              community wallet that will be used to buy back gods from paper
              hands making sure our chart never goes below mint price and those
              nfts will be used in form of giveaways, Collabs and marketing use
              to help grow our popularity ⚰️
            </p>
          </ScrollAnimation>
        </div>
        <div className="left-grid">
          <ScrollAnimation
            duration={1.25}
            animateOnce={true}
            className="top-grid-text"
            animateIn="animate__bounce"
          >
            <h1>Stop 3</h1>
            <p>Gift the Gods</p>
          </ScrollAnimation>
          <ScrollAnimation
            duration={0.75}
            delay={800}
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="flex"
          >
            <p className="grid-desc">
              As well believe that all gods should be gifted holders we launch
              our native currency God coin that serves our ecosystem, holders
              will be able to stack there nft in one of the 20 kingdoms run by
              the legendary God's minted earning god coin as a passive weekly
              income..This will happen in May 2022 a month after minting
            </p>
          </ScrollAnimation>
        </div>

        <div className="center-grid center3">
          <ScrollAnimation
            duration={0.75}
            animateOnce={true}
            animateIn="animate__slideInDown"
          >
            <img src={img} className="sign" alt="" />
          </ScrollAnimation>
          <div className="line"></div>
        </div>
        <div className="mobile-none"></div>
        <div className="mobile-none"></div>
        <div className="center-grid center4">
          <ScrollAnimation
            duration={0.75}
            animateOnce={true}
            animateIn="animate__slideInDown"
          >
            <img src={img} className="sign" alt="" />
          </ScrollAnimation>
          <div className="line"></div>
        </div>
        <div className="right-grid">
          <ScrollAnimation
            duration={1.25}
            animateOnce={true}
            className="top-grid-text"
            animateIn="animate__bounce"
          >
            <h1>Stop 4</h1>
            <p>Let the games begin</p>
          </ScrollAnimation>
          <ScrollAnimation
            duration={0.75}
            delay={800}
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="flex"
          >
            <p className="grid-desc">
              At this stage we expect to have surpased 10k discord and twitter
              member and will now launch our paid to play onchain game that will
              be free and exclusive for PGC holders as there nft will be an
              in-game characters which he will use to creates subkingdoms under
              the command of the legendary gods and increase the wealth and
              power of the guild in a strategy RGP game build on a high level
              brought to you by members of the team who created soul kinght a
              game on playstore. Outsiders will have to pay to play and holders
              can list there gods in game and sell it to others for god coin
            </p>
          </ScrollAnimation>
        </div>
        <div className="left-grid">
          <ScrollAnimation
            duration={1.25}
            animateOnce={true}
            className="top-grid-text"
            animateIn="animate__bounce"
          >
            <h1>Stop 5</h1>
            <p>Pharaoh God's DAO</p>
          </ScrollAnimation>
          <ScrollAnimation
            duration={0.75}
            delay={800}
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="flex"
          >
            <p className="grid-desc">
              As we believe that the power is in the hands of the people we will
              launch our DAO dapp where all gods get to vote on project
              decisions and much more to get eveyone involved and shape our
              future together
            </p>
          </ScrollAnimation>
        </div>

        <div className="center-grid center5">
          <ScrollAnimation
            duration={0.75}
            animateOnce={true}
            animateIn="animate__slideInDown"
          >
            <img src={img} className="sign" alt="" />
          </ScrollAnimation>
          <div className="line"></div>
        </div>
        <div className="mobile-none"></div>
        <div className="mobile-none"></div>

        <div className="center-grid center6">
          <ScrollAnimation
            duration={0.75}
            animateOnce={true}
            animateIn="animate__slideInDown"
          >
            <img src={img} className="sign" alt="" />
          </ScrollAnimation>
        </div>
        <div className="right-grid">
          <ScrollAnimation
            duration={1.25}
            animateOnce={true}
            className="top-grid-text"
            animateIn="animate__bounce"
          >
            <h1>Stop 6</h1>
            <p>God’s marketplace</p>
          </ScrollAnimation>

          <ScrollAnimation
            duration={0.75}
            delay={800}
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="flex"
          >
            <p className="grid-desc">
              After launching our game in late September 2022 we will proceed
              with the last step of our road map where we will launch our own
              marketplace that will be used to sell and buy nfts, in-game
              purchases and even get other projects to list there collection in
              our store where all transactions are done using our native token
              god coin to increase coin usage and awareness
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
