import React from "react";
import buccalimg1 from  "../../assets/images/serviceimage/buccal1.jpg";

const BuccalMassage = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Buccal Massage</h1>

      <h2 className="custom-h2">
        Buccal Massage - Sculpt, Lift & Release Tension
      </h2>
      <p className="custom-p">
        Buccal massage is a unique facial massage technique that works both
        inside and outside the mouth to sculpt, tone, and relax facial muscles.
        This deep-tissue massage helps release tension in the jaw, cheeks, and
        nasolabial folds, improving circulation and promoting a natural lifting
        effect.
      </p>
      <img src={buccalimg1} className="centered-image w-80" alt="Buccal" />

      <h2 className="custom-h2">Benefits of Buccal Massage:</h2>
      <ul className="ul.no-bullets">
        <li>
          ✔ Natural Face Sculpting – Enhances cheekbones & jawline definition
        </li>
        <li>✔ Tension Release – Relieves tight jaw muscles & TMJ discomfort</li>
        <li>
          ✔ Lymphatic Drainage – Reduces puffiness & detoxifies the skin glow
        </li>
        <li>
          ✔ Boosts Collagen Production – Helps with skin elasticity & anti-aging
        </li>
        <li>
          ✔ Promotes Relaxation – Eases stress & improves overall well-being
        </li>
      </ul>
      <h2 className="custom-h2">How Does It Work?</h2>
      <p className="custom-p">
        During the session, a trained esthetician will use gentle yet firm
        movements inside the mouth to massage and release muscle tension, while
        also working externally on the cheeks, jawline, and neck for a complete
        sculpting effect.
      </p>
      <h2 className="custom-h2">How Many Sessions Do I Need?</h2>
      <ul className="custom-ul">
        <li>For best results: 1 session per week for 4–6 weeks</li>
        <li>For maintenance: Once a month</li>
      </ul>
      <h2 className="custom-h2">Book Your Buccal Massage Today!</h2>
      <p className="custom-p">
        Experience a natural facelift without needles or surgery. Your journey
        to a more sculpted, youthful look starts here!
      </p>

    </div>
  );
};

export default BuccalMassage;
