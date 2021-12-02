import React from "react";

const Banner = () => {
  function BES(props) {
    function handleClick(){
      return;
    }
    return (
      <div className="product-item" onClick={handleClick}>
        <img src={props.besimg} alt="" className="product-img" />
        <i className="product-icon">
          <img src={props.producticon} alt="" />
        </i>
        <div className="product-desc">
          <p className="Text-Style-20">{props.text}</p>
          <a href="#" className="product-more">
            <img src={props.goicon} alt="" className="img-icon" />
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="banner">
      <div className="main-banner" >
        <img src="/images/main-banner.png" alt="banner" />
      </div>
      <div className-="intro">
        <div className="introduction-bg">
          <img src="/images/introduction-bg.png" alt="intro-bg" />
          
          <div className="intro-desc">
            <h5 class="Text-Style-19 intro-text">What Happened!</h5>
            <p class="Text-Style-6 intro-text">
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
              step to your brand's success. How to create mobile-optimized
              videos in minutes.
            </p>
          </div>
        </div>

        <div className="best-product">
          <div className="bes-bg">
            <img src="/images/bes-bg.png" alt="" />
            <dev className="bes-text">
              <p className="Text-Style-5">BEST PRODUCT</p>
              <p className="Text-Style-16">
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first{" "}
              </p>
            </dev>
          </div>

          <div className="product-intro">
            <BES
              besimg="/images/best-image-01.png"
              producticon="/images/producticon-01.png"
              text="How to create mobile-optimized"
              goicon="/images/go-icon_2.png"
            />
            <BES
              besimg="/images/best-image-02.png"
              producticon="/images/producticon-02.png"
              text="How to create mobile-optimized"
              goicon="/images/go-icon_2.png"
            />
            <BES
              besimg="/images/best-image-03.png"
              producticon="/images/producticon-03.png"
              text="How to create mobile-optimized"
              goicon="/images/go-icon_2.png"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
