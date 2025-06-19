import React from "react";
import "./servicestyle.css";
import guashaimg1 from "../../assets/images/serviceimage/guasha1.jpg";

const GuaShaMassage = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Gua Sha Massage</h1>

      <h2 className="custom-h2">Gua Sha Facial - Sculpt, Lift & Glow</h2>
      <p className="custom-p">
        Gua Sha is an ancient Chinese facial massage technique that uses a
        smooth-edged stone tool (jade or rose quartz) to gently sculpt, lift,
        and detoxify the skin. This relaxing yet effective treatment promotes
        lymphatic drainage, reduces puffiness, and enhances facial contouring
        for a natural, youthful glow.
      </p>
      <h2 className="custom-h2">Benefits of Gua Sha Facial:</h2>
      <ul className="ul.no-bullets" >
        <li>
          ✔ Reduces Puffiness & Improves Circulation - Enhances blood flow for a
          radiant complexion
        </li>
        <li>
          ✔ Facial Sculpting & Lifting - Defines cheekbones & jawline naturally
        </li>
        <li>
          ✔ Lymphatic Drainage - Helps remove toxins & reduce fluid retention
        </li>
        <li>✔ Eases Muscle Tension - Relieves jaw clenching & TMJ discomfort</li>
        <li>
          ✔ Boosts Collagen & Skin Elasticity - Helps with fine lines & sagging
        </li>
      </ul>

      <h2 className="custom-h2">How Does It Work?</h2>
      <p className="custom-p">
        A trained esthetician gently glides the Gua Sha tool over the face,
        jawline, and neck in upward and outward strokes to promote circulation,
        release tension, and enhance skin elasticity. A nourishing facial oil is
        used to ensure smooth, comfortable movements.
      </p>
      <h2 className="custom-h2">How Many Sessions Do I Need?</h2>
      <lu className="custom-lu">
        <li>For best results: 1 session per week for 4-6 weeks</li>
        <li>For maintenance: Once a month</li>
      </lu>
      <h2 className="custom-h2">Book Your Gua Sha Facial Today!</h2>
      <p className="custom-p">
        Experience the power of ancient beauty techniques for a naturally lifted
        and glowing complexion.
      </p>
      <img src={guashaimg1} className="centered-image w-80" alt="Guasha Massage" />
    </div>
  );
};

export default GuaShaMassage;
