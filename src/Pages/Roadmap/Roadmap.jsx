import React from "react";
import "./Roadmap.css";
import img from "../../Assets/roadmap-img.png";
function Roadmap() {
  return (
    <div className="roadmap">
      <div className="heading-div">
        <h1 className="heading">Roadmap</h1>
        <p>Deep dive into our roadmap</p>
      </div>
      <div className="roadmap-div">
        <div className="left-grid">
          <div className="top-grid-text">
            <h1>Stop 1</h1>
            <div className="text"></div>
            <p>
              Awakening the pharaohs <span>⚰️</span>
            </p>
          </div>
          <ul>
            <li>Pharaoh gods club will be launching in april 2022</li>
            <li>5,555 unique PGC gods will be joined into this journey</li>
            <li>
              1500 will be a whitelist mint for early supporters and OG'S
              minting at a lower price
            </li>
            <li>
              4000 will be available for Public mint 48 hours after WL sale
            </li>
            <li>
              72 hours after public sale, the mystery of the pharaohs will be
              revealed
            </li>
            <li>
              We have 20 legendary God's those who mint one of the gods will
              enter a free trip and ticket for 2 raffle to visit the land of the
              pharaohs and will also mint a free kingdom that will be there's to
              build in our onchain game and stacking feature. <span>⚰️</span>
            </li>
            <li>
              5% of mint sales will be given to a charity that helps affected
              people in Ukraine due to war, this will be done in a voting manner
              so the community decides to which organisation should we give
            </li>
          </ul>
        </div>
        <div className="center-grid center1">
          <img src={img} className="sign" alt="" />
          <div className="line"></div>
        </div>
        <div className="mobile-none"></div>
        <div className="mobile-none"></div>
        <div className="center-grid center2">
          <img src={img} className="sign" alt="" />
          <div className="line"></div>
        </div>
        <div className="right-grid">
          <div className="top-grid-text">
            <h1>Stop 2</h1>
            <p>Let's feed on the weak.⚰️</p>
          </div>
          <p className="grid-desc">
            After the launch of PGC, we will be setting 30% of mint sales in
            community wallet that will be used to buy back gods from paper hands
            making sure our chart never goes below mint price and those nfts
            will be used in form of giveaways, Collabs and marketing use to help
            grow our popularity ⚰️
          </p>
        </div>

        <div className="left-grid">
          <div className="top-grid-text">
            <h1>Stop 3</h1>
            <p>Gift the Gods</p>
          </div>
          <p className="grid-desc">
            As well believe that all gods should be gifted holders we launch our
            native currency God coin that serves our ecosystem, holders will be
            able to stack there nft in one of the 20 kingdoms run by the
            legendary God's minted earning god coin as a passive weekly
            income..This will happen in May 2022 a month after minting
          </p>
        </div>
        <div className="center-grid center3">
          <img src={img} className="sign" alt="" />
          <div className="line"></div>
        </div>
        <div className="mobile-none"></div>
        <div className="mobile-none"></div>
        <div className="center-grid center4">
          <img src={img} className="sign" alt="" />
          <div className="line"></div>
        </div>

        <div className="right-grid">
          <div className="top-grid-text">
            <h1>Stop 4</h1>
            <p>Let the games begin</p>
          </div>
          <p className="grid-desc">
            At this stage we expect to have surpased 10k discord and twitter
            member and will now launch our paid to play onchain game that will
            be free and exclusive for PGC holders as there nft will be an
            in-game characters which he will use to creates subkingdoms under
            the command of the legendary gods and increase the wealth and power
            of the guild in a strategy RGP game build on a high level brought to
            you by members of the team who created soul kinght a game on
            playstore. Outsiders will have to pay to play and holders can list
            there gods in game and sell it to others for god coin
          </p>
        </div>
        <div className="left-grid">
          <div className="top-grid-text">
            <h1>Stop 5</h1>
            <p>Pharaoh God's DAO</p>
          </div>
          <p className="grid-desc">
            As we believe that the power is in the hands of the people we will
            launch our DAO dapp where all gods get to vote on project decisions
            and much more to get eveyone involved and shape our future together
          </p>
        </div>

        <div className="center-grid center5">
          <img src={img} className="sign" alt="" />
          <div className="line"></div>
        </div>
        <div className="mobile-none"></div>
        <div className="mobile-none"></div>

        <div className="center-grid center6">
          <img src={img} className="sign" alt="" />
        </div>
        <div className="right-grid">
          <div className="top-grid-text">
            <h1>Stop 6</h1>
            <p>God’s marketplace</p>
          </div>
          <p className="grid-desc">
            After launching our game in late September 2022 we will proceed with
            the last step of our road map where we will launch our own
            marketplace that will be used to sell and buy nfts, in-game
            purchases and even get other projects to list there collection in
            our store where all transactions are done using our native token god
            coin to increase coin usage and awareness
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
