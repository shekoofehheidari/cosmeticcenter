import React from "react";
import Lymphatic1 from "../../assets/images/serviceimage/Lymphatic1.jpg";

const LymphaticDrainage = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Lymphatic Drainage Massage</h1>

      <h2 className="custom-h2">
        Lymphatic Drainage Massage - Detox, De-Puff & Glow
      </h2>
      <p className="custom-p">
        Lymphatic drainage facial massage is a gentle yet powerful technique
        designed to reduce puffiness, remove toxins, and enhance circulation. By
        using light, rhythmic strokes, this treatment stimulates the lymphatic
        system, helping to detoxify the skin, sculpt the face, and improve
        overall skin health.
      </p>
      <h2 className="custom-h2">Benefits of Lymphatic Drainage Facial:</h2>
      <ul className="ul.no-bullets">
        <li>
          ✔ Reduces Puffiness & Swelling - Ideal for water retention & bloating
        </li>
        <li>
          ✔ Detoxifies the Skin Removes toxins & promotes a clear complexion
        </li>
        <li>
          ✔ Enhances Circulation - Boosts oxygen & nutrient flow for a radiant
          glow
        </li>
        <li>
          ✔ Lifts & Sculpts the Face - Defines jawline & cheekbones naturally
        </li>
        <li>✔ Supports the Immune System - Encourages healthy lymph flow</li>
      </ul>
      <h2 className="custom-h2">How Does It Work?</h2>
      <p className="custom-p">
        A trained esthetician uses light, rhythmic massage movements along the
        face, neck, and jawline to stimulate the lymphatic system, encouraging
        the removal of excess fluid and toxins. This relaxing treatment not only
        improves skin tone and elasticity but also helps relieve facial tension
        and stress.
      </p>
      <h2 className="custom-h2">How Many Sessions Do I Need?</h2>
      <ul className="custom-ul">
        <li>For deep detox & sculpting: 1 session per week for 4-6 weeks</li>
        <li>For maintenance & relaxation: Once a month</li>
      </ul>
      <h2 className="custom-h2">Book Your Lymphatic Drainage Facial Today!</h2>
      <p className="custom-p">
        Experience the power of natural detox and sculpting with this gentle yet
        effective facial massage.
      </p>
      <img src={Lymphatic1} className="centered-image w-2/6" alt="Lymphatic" />
    </div>
  );
};

export default LymphaticDrainage;
