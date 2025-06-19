import React from "react";
import "./servicestyle.css";
import Acupunctureimg2 from "../../assets/images/serviceimage/Acupuncture2.jpg";

const Acupuncture = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Acupuncture Theraphy</h1>

      <p className="custom-p">
        Acupuncture is a time-tested healing practice that involves inserting
        thin, sterile stainless steel needles into specific points on the body.
        These points, located along meridians (energy pathways), help promote
        circulation, relax muscles, improve neurological function, and provide
        pain relief. Rooted in Traditional Chinese Medicine (TCM) and
        Contemporary Medical Acupuncture (CMA), acupuncture has been practiced
        for thousands of years and continues to be a trusted method for holistic
        healing and wellness.
      </p>
      <h2 className="custom-h2">Why Choose Acupuncture?</h2>
      <p className="custom-p">
        Many people prefer acupuncture over medication or surgery because it is:
      </p>
      <ul className="ul.no-bullets">
        <li>✔ Non-invasive and natural</li>
        <li>✔ Safe with minimal side effects</li>
        <li>✔ Effective for pain relief and overall wellness</li>
        <li>✔ Covered by most insurance providers</li>
      </ul>
      <h3 className="custom-h3">
        At Maria Cosmetic Center (MCC), we have seen firsthand how acupuncture
        enhances recovery, relieves pain, and improves overall health.
      </h3>
      <h2 className="custom-h2"> How Does Acupuncture Work?</h2>
      <p className="custom-p">
        While researchers are still studying its exact mechanisms, acupuncture
        is believed to work by:
      </p>
      <ul className="ul.no-bullets">
        <li>✔ Stimulating endorphin release, the body’s natural painkillers</li>
        <li>
          ✔ Regulating the autonomic nervous system, which can impact breathing,
          blood pressure, and heart rate
        </li>
        <li>✔ Enhancing circulation and reducing inflammation</li>
      </ul>

      <h2 className="custom-h2"> What Conditions Can Acupuncture Help With?</h2>
      <p className="custom-p">
        Acupuncture has been used to support the treatment of:
      </p>
      <ul className="ul.no-bullets">
        <li>
          🔹 Pain Management – Arthritis, back pain, knee pain, migraines, and
          tension headaches
        </li>
        <li>🔹 Mental Health – Anxiety, depression, and stress relief</li>
        <li>🔹 Sleep Disorders – Insomnia and sleep difficulties</li>
        <li>🔹 Digestive Health – Nausea, bloating, and sinus congestion</li>
        <li>🔹 Reproductive Health – Infertility and hormonal balance</li>
        <li>
          🔹 Skin Rejuvenation – Cosmetic acupuncture for anti-aging and
          improved skin elasticity
        </li>
      </ul>

      <h2 className="custom-h2"> Benefits of Acupuncture</h2>
      <p className="custom-p">While results vary, many people report:</p>
      <ul className="ul.no-bullets">
        <li>🔹 Reduced pain and inflammation</li>
        <li>🔹 Improved sleep and relaxation</li>
        <li>🔹 Boosted energy levels</li>
        <li>🔹 Better circulation and immune function</li>
        <li>🔹 Enhanced skin appearance with cosmetic acupuncture</li>
      </ul>

      <h2 className="custom-h2">
        What to Expect During an Acupuncture Session
      </h2>
      <p className="custom-p">
        Your session begins with a consultation to discuss your health concerns.
        The acupuncturist will then insert fine needles into targeted areas and
        may enhance the treatment with:
      </p>
      <ul className="ul.no-bullets">
        <li>
          ✔ Electroacupuncture – Gentle electrical stimulation for deeper
          effects
        </li>
        <li>
          ✔ Moxibustion – Heated herbal therapy to stimulate acupuncture points
        </li>
        <li>
          ✔ Cupping Therapy – Suction cups to enhance blood flow and
          detoxification
        </li>
      </ul>
      <p className="custom-p">
        Most sessions last 30–60 minutes, and many patients feel a sense of deep
        relaxation and well-being afterward.
      </p>

      <h2 className="custom-h2">Is Acupuncture Painful?</h2>
      <p className="custom-p">
        You may feel a mild pinch, tingling, or warmth during treatment. The
        sensation varies from person to person, but acupuncture is generally
        well-tolerated.
      </p>

      <h2 className="custom-h2">Are There Any Side Effects?</h2>
      <h3 className="custom-h3">
        Acupuncture is safe when performed by a licensed practitioner.
      </h3>
      <p className="custom-p">
        However, some individuals may experience mild effects like:
      </p>
      <ul className="ul.no-bullets">
        <li>🔹Slight soreness or bruising at the needle site </li>
        <li>🔹Temporary dizziness or fatigue</li>
      </ul>
      <p className="custom-p">
        Serious complications are extremely rare when acupuncture is done by a
        trained professional using sterile, disposable needles.
      </p>
      <img src={Acupunctureimg2} className="centered-image w-2/4" alt="Acupuncture" />
      <h2 className="custom-h2">
        Ready to Experience the Benefits of Acupuncture?
      </h2>
      <p className="custom-p">
        Book your consultation today and take the first step toward natural
        healing and wellness.
      </p>
      <p className="custom-p">
        👉 Follow us on Instagram for health tips & update &nbsp;&nbsp;&nbsp;
        <a
          href="https://www.instagram.com/healing_points_therapy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
           @healing_points_therapy
        </a>
      </p>
    </div>
  );
};

export default Acupuncture;
