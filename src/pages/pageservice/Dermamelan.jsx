import React from "react";
import "./servicestyle.css";
import Dermamelan1img1 from "../../assets/images/serviceimage/Dermamelan1.jpg";
import Dermamelan1img2 from "../../assets/images/serviceimage/Dermamelan2.jpg";

const Dermamelan = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1"> Dermamelan</h1>
      <p className="custom-p">
        One of the most common concerns that we see at the Institute of Cosmetic
        in Toronto, Ontario is pigmentation and melasma (brown spots on the
        skin). Derm–Eclat™/Dermamelan is a topical de–pigmentation procedure
        that is extremely versatile and adapts well to any skin type.
        Derm–Eclat™/Dermamelan softens or eliminates mild to severe
        pigmentation, while helping to reveal the luminosity and tone of the
        skin. Derm–Eclat™/Dermamelan is based on the inhibition of tyrosinase, a
        basic enzyme in the melanin formation process (how excessive brown
        develops). Several of the substances present in the
        Derm–Eclat™/Dermamelan formulation work by blocking this enzyme, or even
        by inverting the metabolic process of the transformation chain.
      </p>
      <img src={Dermamelan1img1} className="centered-image w-2/6" />
      <p className="custopm-p">
        A chemical peel is applied to the face prior to the application of the
        Derm–Eclat™/Dermamelan mask. Derm–Eclat™/Dermamelan is a thick
        “mask–like” substance that is applied to the full face. It is left on
        for 8–12 hours and can be washed off at home. Clints can expect mild to
        significant peeling at around day 2–5 and can continue for up to a week.
        Two weeks later the mask will be re–applied to any remaining spots.
        Overall, patients can expect a significant reduction in areas of
        hyperpigmentation / melasma. An at–home maintenance cream is given to
        clients and is to be used on a daily basis post–treatment.
      </p>
      <img src={Dermamelan1img2} className="centered-image w-2/6" />
      <p className="custopm-p">
        To find out if Derm–Eclat™/Dermamelan is right for you, please contact
        us for your consultation.We will be able to provide you with all of the
        information you need to make the most informed decision.{" "}
      </p>
    </div>
  );
};

export default Dermamelan;
