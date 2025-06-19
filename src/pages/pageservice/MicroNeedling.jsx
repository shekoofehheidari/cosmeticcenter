import React from "react";
import "./servicestyle.css";
import Needlingimg1 from "../../assets/images/serviceimage/Needling1.jpg";
import Needlingimg2 from "../../assets/images/serviceimage/Needling2.png";
import Needlingimg3 from "../../assets/images/serviceimage/Needling3.gif";
import Needlingimg4 from "../../assets/images/serviceimage/Needling4.jpg";
import Needlingimg5 from "../../assets/images/serviceimage/Needling5.jpg";
import Needlingimg6 from "../../assets/images/serviceimage/Needling6.jpg";
import Needlingimg7 from "../../assets/images/serviceimage/Needling7.jpg";

const MicroNeedling = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Micro Needling </h1>
      <p className="custom-p">
        Microneedling therapy is a very simple procedure that uses a
        hand-controlled device with tiny, shallow needles to puncture your outer
        layer of skin to create a controlled skin injury. This damage to the
        skin will stimulate your body to produce new collagen and elastin. The
        freshly produced collagen will rejuvenate your skin by filling in fine
        lines, resulting in an overall improvement in the texture and tightness
        of your skin by removing the wrinkles, scars and stretch marks that can
        make you look younger as you age.
      </p>
      <img src={Needlingimg1} className="centered-image w-1/2" />
      <p className="custom-p">
        Additionally, microneedling is not restricted to the face. It can be
        used on many other body parts, such as arms, legs, neck, back, hands and
        abdomen.
      </p>
      <img src={Needlingimg2} className="centered-image w-1/2" />
      <p className="custom-p">
        One microneedling session generally takes 30 minutes. At first, your
        skin will appear a little bit red — similar to a light sunburn, but your
        skin will return to normal in a couple of days. The natural growth of
        collagen will not happen instantly; it takes place over weeks and
        months. This treatment is not designed to be an “instant fix,” but is
        intended to improve the health of your skin in the long term.
      </p>
      <img src={Needlingimg3} className="centered-image w-1/2" />
      <h3 className="custom-h3">
        {" "}
        How many numbers of treatments does one need?
      </h3>
      <h3 className="custom-h3">
        {" "}
        The number of treatments is predicated on two things:
      </h3>
      <p className="custom-p">
        {" "}
        the first being the results you want to achieve, and the second being
        which part of the body treatment is being performed on. For wrinkles or
        stretch marks, depending on the severity, you may need 4 to 8
        microneedling treatments to achieve optimal results.
      </p>
      <p className="custom-p">
        Please note that all treatments are spaced 4 to 6 weeks apart to ensure
        the health and safety of your skin. The risk involved in microneedling
        treatments are minimal. After a treatment, dry skin or red discoloration
        may occur, which will typically subside within a week{" "}
      </p>
      <img src={Needlingimg4} className="centered-image w-1/3" />
      <img src={Needlingimg5} className="centered-image w-1/3" />
      <img src={Needlingimg6} className="centered-image w-1/3" />
      <img src={Needlingimg7} className="centered-image w-1/3" />
      <h3 className="custom-h3">
        What skin conditions can be treated with micro needling?
      </h3>
      <p className="custom-p">
        Wrinkles, Stretch marks, Scars, Acne scarring, Skin tone, Fine lines,
        Loose skin, Large pores, Discoloration, Regardless of your skin color or
        type is, microneedling is the best treatment you can have to have to
        make your skin look fresh and younger.
      </p>
      <h2 className="custom-availablesrv">
        Available at Maria Cosmetic Center 3-6126 Yonge st North york ON, +1
        (647) 887 7605 always a pleasure to serve you!
      </h2>
    </div>
  );
};

export default MicroNeedling;
