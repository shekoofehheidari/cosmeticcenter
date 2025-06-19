import React from "react";
import "./servicestyle.css";

import oxygenoimg2 from "../../assets/images/serviceimage/oxygeneo2.jpg";
import oxygenoimg3 from "../../assets/images/serviceimage/oxygeneo3.jpg";
import oxygenoimg4 from "../../assets/images/serviceimage/oxygeneo4.jpg";
import oxygenoimg5 from "../../assets/images/serviceimage/oxygeneo5.png";
import oxygenoimg6 from "../../assets/images/serviceimage/oxygeneo6.png";
import oxygenoimg7 from "../../assets/images/serviceimage/oxygeneo7.png";
import oxygenoimg8 from "../../assets/images/serviceimage/oxygeneo8.jpg";
import oxygenoimg9 from "../../assets/images/serviceimage/oxygeneo9.jpg";

const OxyGeneo = () => {
  const benefits = [
    "Utilizes natural Oxygen from within for maximum efficacy",
    "Ideal 3 in 1 ideal facial treatment suitable for all skin tones",
    "Immediate peeling and skin-tone brightening, delivering a firmed, radiant complexion",
    "Oxygen Therapy for cellular improvement",
    "Innovative patented oxygenation technology and approach",
    "Fast and effective treatment for special events",
    "Natural skin oxygenation on a regular basis results in long lasting results",
    "Single-use, disposable components for maximum hygiene",
    "Ideal both as a stand-alone skin revitalization treatment or combined with other aesthetic regimens",
    "Immediate and significant results, visible after 1st treatment",
    "Soothing and relaxing",
    "Natural skin oxygenation from within by Bohr effect",
    "Infusion of natural & powerful active ingredients to the skin",
    "Long term skin texture and appearance improvement",
    "Supported by real science and medical studies",
    "Suitable for all skin types",
    "Treatments for face & body",
    "Never tested on animals",
  ];

  return (
    <div className="custom-container">
      <h1 className="custom-h1">OxyGeneo</h1>
      <img src={oxygenoimg2} className="w-1/6" />
      <h3 className="custom-h3">
        Every day, tens of thousands of OxyGeneo™ treatments are performed all
        across Canada. Patented OxyGeneo™ technology harnesses the power of
        oxygen for both the face and body, providing unparalleled skin
        nourishment & oxygenation.
      </h3>
      <h2 className="custom-h2">
        OxyGeneo Technology 3-in-1 advanced facial care
      </h2>
      <h3 className="custom-h3">OXYGENATION – EXFOLIATION – INFUSION</h3>
      <p className="custom-p">
        With OxyGeneo Technology, aesthetic professionals are able to administer
        3 effective facial skin care treatments simultaneously:
      </p>
      <ul className="custom-list">
        <li>Exfoliation of the outer skin layer</li>
        <li>
          Infusion of revitalizing nutrients with Pollogen’s unique skin care
          formulas
        </li>
        <li>Oxygenation of the skin naturally generated from within</li>
      </ul>

      <h2 className="custom-h2">OxyGeneo “3 in 1” approach</h2>
      <p className="custom-p">
        OXYGENEO™ Technology is inspired by the well-known healing powers of
        natural hot springs. Hot springs, due to their high concentration of
        carbon dioxide, help stimulate oxygenation of the skin. <br />
        Similarly, OxyGeneo simulates the body, triggering a response that sends
        oxygen to the treated area. At the same time, OxyGeneo exfoliates the
        skin and creates an optimal environment for infusion of essential
        nutrients− both during and after treatment. The OxyGeneo effect saves
        time by performing all three actions simultaneously.
      </p>

      <h2 className="custom-h2">Key Treatment Benefits of OxyGeneo:</h2>
      <div className="grid grid-cols-2 gap-8 items-center">
        <ul className="custom-list">
          {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <span>
          <img
            src={oxygenoimg3}
            className="centered-image w-3/5 align-top"
            alt="OxyGeneo"
          />
        </span>
      </div>

      <h2 className="custom-h2">
        Two Specialized Formulas to Treat Specific Skin Conditions
      </h2>
      <p className="custom-p">
        While each OxyGeneo™ treatment softens the appearance of fine lines &
        wrinkles, minimizes pores, hydrates and nourishes the skin, revitalizes
        a dull complexion and improves the overall facial appearance, your
        client gets to choose a nourishing gel that fits their specific skin
        concerns.
      </p>

      <h2 className="custom-h2">
        BODY TREATMENTS WITH OXYGENEO<sup>TM</sup>
      </h2>
      <p className="custom-p">
        OxyGeneo<sup>TM</sup> offers a quick and effective solution for many
        body impurities, by harnessing the power of oxygen on problem skin
        areas. It will leave your skin detoxified, refreshed and hydrated from
        head to toe. OxygeneoTM is the ultimate skin refresher, ideal for people
        who deal with:
      </p>
      <ul className="custom-list">
        <li>Bacne and body pimples</li>
        <li>Body pigmentation</li>
        <li>Chapped skin</li>
        <li>And other annoying conditions</li>
      </ul>
      <span>
        <img
          src={oxygenoimg4}
          className="centered-image w-80 align-top"
          alt="OxyGeneo"
        />
      </span>

      <h3 className="custom-h3">
        OxyGeneo has 2 unique treatments targeting the specific needs of your
        skin:⠀
      </h3>
      <h3 className="custom-h3">▸ NeoBrightE</h3>
      <p>
        – Reduces skin pigmentation and sun damage while lightening the skin’s
        complexion⠀
      </p>
      <h3 className="custom-h3">▸ NeReviveE</h3>
      <p>
        – Smooths the appearance of fine lines and wrinkles, and revitalizes
        dull complexion ⠀
      </p>
      <h2 className="custom-h2">
        OXYGENEO™ HARNESSES THE BOHR EFFECT TO OXYGENATE THE SKIN FROM WITHIN
        THE BODY!
      </h2>
      <h3 className="custom-h3">
        Our breakthrough technology provides superior anti-aging results by
        treating the skin at a deeper level. Exfoliate, Oxygenate, and Nourish
        your way to youthful skin.
      </h3>
      <img src={oxygenoimg5} className="centered-image w-64" />
      <h2 className="custom-h2">EXFOLIATE</h2>
      <p>
        The OxyGeneo™ exfoliates the upper skin layer to remove dead cells, open
        clogged pores, smooth the surface and renew the skin. The treatment
        generates an abundance of CO2 bubbles that permeate the upper skin layer
        to trigger a physiological response known as the Bohr Effect.
      </p>
      <img src={oxygenoimg6} className="centered-image w-64" />
      <h2 className="custom-h2">OXYGENATE</h2>
      <p>
        OxyGeneo™ harnesses the natural processes of the body to oxygenate the
        skin from within with the Bohr Effect! During the Bohr Effect, the body
        sends O2-rich blood to the skin to replace the CO2. This results in
        optimal skin oxygenation and increased cellular activity.
      </p>
      <img src={oxygenoimg7} className="centered-image w-64" />
      <h2 className="custom-h2">NOURISH</h2>
      <p>
        At the same time, OxyGeneo™ nourishes the skin with nutrients, vitamins
        and other active ingredients which keep it healthy and glowing for the
        long term
      </p>

      <h2 className="custom-h2">Ultrasound Massage Hand Piece</h2>
      <p>
        By adding an ultrasound session to the OxyGeneo protocol, you
        significantly improve the absorption of active ingredients into the skin
        due to increased cellular metabolism and blood circulation. Using the
        ultrasound hand piece allows you to improve moisture retention, tighten
        enlarged pores and relieve “puffiness” around the eyes. The process is
        safe for all skin types, painless and gentle and can be used on
        sensitive skin conditions.
      </p>
      <h2 className="custom-h2">
        The ultrasound hand piece achieves superior infusion by:
      </h2>
      <img src={oxygenoimg8} className="centered-image w-1/4" />
      <ul className="custom-list">
        <li>Increasing the permeability of the skin</li>
        <li>Breaking down the long nutrient molecules into shorter ones</li>
        <li>
          Actively pushing the nutrient ingredients deep into the skin for even
          better results{" "}
        </li>
      </ul>

      <img src={oxygenoimg9} className="centered-image w-1/4" />
      <p>
        The OxyGeneo is now available with TriPollar® technology, the 3rd and
        latest generation and MOST advanced radio frequency (RF) technology in
        the industry, offering skin tightening!
      </p>
      <h3 className="custom-h3">
        OxyGeneo + Ultrasound + TriPollar = the Ultimate Facial Platform
      </h3>
      <p>
        OxyGeneo is an innovative skin renewal treatment that delivers 3
        essential treatments simultaneously as it exfoliates the outer layer of
        the skin, infuses it with revitalizing nutrients and stimulates its.
      </p>
      <h2 className="custom-h2">FREQUENTLY ASKED QUESTIONS </h2>

      <h3 className="custom-h3">
        How soon after the OxyGeneo™ treatment will I see results?
      </h3>
      <p>
        You can expect to see visible texture improvement immediately after the
        1st treatment. The OxyGeneo™ effect is cumulative, so more treatments
        will bring better results.
      </p>

      <h3 className="custom-h3">How long the results last?</h3>
      <p>
        OxyGeneo™ works with the natural repairing processes of your skin;
        therefore results are individual and may vary between people. Your
        lifestyle also affects the ability of your skin to improve itself, so
        keeping a healthy lifestyle helps to linger the OxyGeneo effect. In any
        case, the OxyGeneo effect is cumulative, so more treatments will bring
        longer-lasting results.
      </p>

      <h3 className="custom-h3">How does the OxyGeneo™ treatment feel?</h3>
      <p>
        An OxyGeneo™ treatment feels like a warm massage for the face. The
        exfoliation is described as very refreshing and comfortable and, because
        there is no harsh vacuum procedure, the treatment is soothing and
        relaxing. More sensitive skin type clients may have a gentle tingling
        sensation during the first couple of minutes.
      </p>

      <h3 className="custom-h3">How long is the OxyGeneo™ treatment?</h3>
      <p>
        The basic OxyGeneo™ treatment takes about 35-45 minutes. The OxyGeneo™
        treatment can be done as a ‘stand-alone’ facial or in combination with
        other modalities, which will extend the duration of the overall
        treatment.
      </p>

      <h3 className="custom-h3">
        Is there any downtime after OxyGeneo™ treatments?
      </h3>
      <p>No, the OxyGeneo™ has zero downtime.</p>

      <h3 className="custom-h3">
        Can I do the OxyGeneo™ treatment if I have an event in the same day?
      </h3>
      <p>
        Absolutely! The OxyGeneo™ treatment has no downtime and the skin looks
        and feels great right after, so the OxyGeneo™ is an ideal “Red Carpet”
        treatment. If you have an upcoming event, schedule your OxyGeneo™
        treatment on the same day or a day before and everyone will be sure to
        notice how radiant your skin looks during the event.
      </p>

      <h3 className="custom-h3">
        How do I know which OxyGeneo™ treatment is best for my skin?
      </h3>
      <p>
        During your first visit, our skin expert will examine your skin and
        match it with the right OxyGeneo™ treatment that suits your skin’s
        needs.
      </p>

      <h3 className="custom-h3">
        I have allergies. Is the OxyGeneo™ safe for me?
      </h3>
      <p>
        All OxyGeneo™ treatments are formulated with allergies and sensitivities
        in mind and shouldn’t cause allergic reactions; however any known
        allergies should be disclosed prior to the first treatment to ensure
        your safety.
      </p>

      <h3 className="custom-h3">Is the OxyGeneo™ safe for all skin types?</h3>
      <p>
        Yes, the OxyGeneo™ is a “color blind” technology that can safely treat
        all skin types.
      </p>

      <h2 className="custom-availablesrv">
        Available at Maria Cosmetic Center 55 Eglinton Ave E UNIT 402, Toronto,
        ON M4P 1G8 +1 (647) 887 7605 always a pleasure to serve you!
      </h2>
    </div>
  );
};

export default OxyGeneo;
