import React from "react";
import "./style.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bed from "../Photos/pg1/bed.jpeg";
import wallpaper from "../Photos/pg1/walppr phone.jpeg";
import flipkart from "../Photos/pg1/flipkart.png";
import camera from "../Photos/pg1/canon eos.jpeg";
import bng from "../Photos/pg1/b n g cloth.jpg";
import nighty from "../Photos/pg1/nighty.jpg";
import toys from "../Photos/pg1/toys.jpeg";
import shoes from "../Photos/pg1/shoes.jpeg";
import electronics from "../Photos/pg1/ss 3 items.png";
import coolingpad from "../Photos/pg1/cooloing pad.jpeg";
import keyboardskin from "../Photos/pg1/keyboard skin.jpeg";
import backcover from "../Photos/pg1/mobile back covers.jpeg";
import mousepad from "../Photos/pg1/mouse pad.jpeg";
import printers from "../Photos/pg1/printers.jpeg";
import routers from "../Photos/pg1/routers.jpeg";
import webcams from "../Photos/pg1/web cams.jpeg";
import footer from "../Photos/pg1/footer.png";
function Page1() {
  return (
    <div>
      {/* -------------------------------------Navbar-------------------------------------------------- */}
      <div className="header">
        <a href="#default" className="logo">
          Flipkart
          <p className="ep">
            Explore <span className="Plus">Plus </span>
          </p>
        </a>
        <div className="search">
          <input
            className="placeholder"
            type="text"
            placeholder="Search for products brands and more"
            FontAwesomeIcon
            icon={faSearch}
          />
        </div>

        <div className="header-right">
          <a className="active" href="#login">
            Login
          </a>
          <div class="more">
            <button className="morebtn">
              <span>More </span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <div className="more-content">
              <a href="#">Notification Preferences</a>
              <a href="#">Download App</a>
              <a href="#">Sell on Indiacart</a>
              <a href="#">24X7 Customer Care</a>
              <a href="#">Download App</a>
            </div>
          </div>
          <a href="#cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span> Cart</span>
          </a>
        </div>
      </div>
      {/* --------------------------------End of Navbar------------------------------------------ */}

      <div className="Secnavbar">
        <a
          style={{
            fontSize: "15px",
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="one"
          href="#"
        >
          Electronics <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            fontSize: "15px",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="two"
          href="#"
        >
          TV & Application <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="three"
          href="#"
        >
          Men
          <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="four"
          href="#"
        >
          Women
          <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="five"
          href="#"
        >
          Baby & Kids
          <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="six"
          href="#"
        >
          Home & Furniture
          <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="seven"
          href="#"
        >
          Flights
          <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="eight"
          href="#"
        >
          Sports,Books & More
          <FontAwesomeIcon icon={faAngleDown} />
        </a>

        <a
          style={{
            textDecoration: "none",
            float: "left",
            color: "black",
            marginLeft: "55px",
            fontWeight: "bolder",
            fontSize: "15px",
            fontFamily: "adobe-clean, sans-serif",
          }}
          className="nine"
          href="#"
        >
          Offer Zone
        </a>
      </div>

      {/* ------------wallpaper--------------- */}
      <img className="bg" src={wallpaper} alt="Wallpaper" />
      {/*----------- end of wallpaper--------------- */}

      <div className="dealday">
        <p>
          Flipkart Deals Of The Day
          <div className="dealRefresh">Deals Refresh Every 8 Hours</div>
        </p>
        <a className="viewmore" href="#view">
          View More
        </a>

        <img className="fk" src={flipkart} alt="Flipkart deal" />
      </div>
      <div className="items">
        <span className="bedcont">
          <img className="bed" src={bed} alt="Wallpaper" />
          <p>
            Beds
            <div className="green">From ₹7,999</div>
            <div className="grey">King,Queen & More</div>
          </p>
        </span>
        <span className="camcont">
          <img className="camera" src={camera} alt="Wallpaper" />
          <p>
            Camera
            <div className="green">NCEMI From ₹2,333/m* </div>
            <div className="grey1">
              ₹24,999{" "}
              <span style={{ fontWeight: "lighter" }} className="price">
                ₹29,496
              </span>
            </div>
          </p>
        </span>
        <span className="bngcont">
          <img className="bng" src={bng} alt="Wallpaper" />
          <p>
            Boy's & Girl's Clothing
            <div className="green">Min 50% Off</div>
            <div className="grey">Cherokee,US Polo & more</div>
          </p>
        </span>
        <span className="nightycont">
          <img className="nighty" src={nighty} alt="Wallpaper" />
          <p>
            Nighty Sets
            <div className="green">From ₹149+10%Off</div>
            <div className="grey">Chemistry,Clovia,Zivame...</div>
          </p>
        </span>
        <span className="toyscont">
          <img className="toys" src={toys} alt="Wallpaper" />
          <p>
            Toys & Games
            <div className="green">From ₹99+Extra10%Off</div>
            <div className="grey">Nerf,Barbie & more</div>
          </p>
        </span>
        <span className="shoescont">
          <img className="shoes" src={shoes} alt="Wallpaper" />
          <p>
            FCUK, Red Tape & more
            <div className="green">Min 40% Off</div>
            <div className="grey">Sports Shoes,Sneakers...</div>
          </p>
        </span>
      </div>

      <img className="electronics" src={electronics} alt="Electronics" />

      <div className="dealday">
        <p>
          Top Deals on ElectronicsVIEW
          <div className="dealRefresh1">Devices and Accessories</div>
        </p>
        <a className="viewall" href="#viewall">
          View All
        </a>
      </div>
      <div className="items">
        <span className="mousepadcont">
          <img className="mousepad" src={mousepad} alt="Wallpaper" />
          <p>
            Mouse Pad
            <div className="green">Upto 80% Off</div>
            <div className="grey">Over 40,000 Designs!</div>
          </p>
        </span>
        <span className="coolingpadcont">
          <img className="coolingpad" src={coolingpad} alt="Wallpaper" />
          <p>
            Cooling Pad
            <div className="green">Upto 80% Off!</div>
            <div className="grey">Tarken,Flipkart SmartBuy...</div>
          </p>
        </span>
        <span className="webcamscont">
          <img className="webcams" src={webcams} alt="Wallpaper" />
          <p>
            Webcams
            <div className="green">From ₹490</div>
            <div className="grey">Logitech,Quantum & more</div>
          </p>
        </span>
        <span className="printerscont">
          <img className="printers" src={printers} alt="Wallpaper" />
          <p>
            Top 10 Printers
            <div className="green">From ₹2,399</div>
            <div className="grey">Print,Scan & copy</div>
          </p>
        </span>
        <span className="keyboardskincont">
          <img className="keyboardskin" src={keyboardskin} alt="Wallpaper" />
          <p>
            Keyboard Skins
            <div className="green">Upto 70%Off!</div>
            <div className="grey">Saco,Flipkart SmartBuy...</div>
          </p>
        </span>
        <span className="backcovercont">
          <img className="backcover" src={backcover} alt="Wallpaper" />
          <p>
            Mobile Back Covers
            <div className="green">Shop Now</div>
            <div className="grey">For Your Phone</div>
          </p>
        </span>
        <span className="routerscont">
          <img className="routers" src={routers} alt="Wallpaper" />
          <p>
            <div style={{ marginRight: "-2012px", marginTop: "-65px" }}>
              Routers
              <div className="green">From ₹799</div>
              <div className="grey">MI,Netgear,tp-Links & m...</div>
            </div>
          </p>
        </span>
      </div>
      <div>
        <img className="footer" src={footer} alt="Wallpaper" />
      </div>
    </div>
  );
}

export default Page1;
