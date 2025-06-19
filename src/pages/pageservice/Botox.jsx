import React from "react";
import "./servicestyle.css";
import botox1 from "../../assets/images/serviceimage/botox1.jpg";
import botox2 from "../../assets/images/serviceimage/botox2.jpg";
import botox3 from "../../assets/images/serviceimage/botox3.jpg";

const BotoxService = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Botox®</h1>

      <p className="custom-p">
        Botox® or “botulinum toxin A” is a neurotoxin complex used to relax
        targeted muscles. It’s injected directly into the muscle to induce this
        reaction. A trained practitioner analyzes the skin, muscle, and nerve
        impulses before completing the procedure. Once injected, nerve impulses
        in the muscle are blocked with this purified protein. Patients with
        deep, creased wrinkles or “dynamic wrinkles” require immediate
        attention. Botox® aids in targeting these naturally produced wrinkles.
        As the muscle(s) relax, the skin begins to smooth out.
      </p>

      <img src={botox1} alt="Botox treatment" className="centered-image" />

      <p className="custom-p">
        Botox® aids patients with upper facial wrinkles, frown lines, and crow’s
        feet (corners of eyes).
      </p>

      <h2 className="custom-h2">Types of wrinkles include:</h2>
      <p className="custom-p">
        <strong>Dynamic Wrinkles:</strong> Created by muscle movement (smiling,
        crying, laughing)
        <strong>Static Wrinkles:</strong> Created without movement as the skin
        ages and loses elasticity. Under the supervision of a trained
        specialist, the Botox® injection will not eliminate the use of one’s
        facial muscles nor will it inhibit one’s smile. The technique provides a
        smoothing effect without preventing natural movement. This is a
        world-leading procedure and millions of cases are completed around the
        world. It’s a dynamic, top-of-the-line procedure perfect for all
        candidates.
      </p>

      <h2 className="custom-h2">Ideal Candidate for Botox®</h2>
      <p className="custom-p">
        In general, the clinic will examine a patient before determining the
        appropriate course of action. An ideal candidate is someone with fine
        lines/wrinkles between the ages of 18 and 65.
      </p>

      <h2 className="custom-h2">Procedure</h2>
      <p className="custom-p">
        After the consultation with a certified injectionist, a treatment plan
        will be penned. This will encompass one’s medical history, goals,
        treatment areas, and all related details. The injection areas are
        observed to pinpoint ideal injection sites and anatomical features.
      </p>

      <p className="custom-p">
        The procedure always includes a brand-new vial of Botox® Cosmetic.
      </p>

      <img src={botox2} alt="Botox treatment" className="centered-image" />
      <img src={botox2} alt="Botox treatment" className="centered-image" />

      <p className="custom-p">
        Once the patient is seated, a topical anesthetic is applied to the
        target area. All injections are completed with a small needle to
        minimize pain/discomfort. This treatment will conclude in less than 5–10
        minutes depending on the number of target areas.
      </p>

      <h2 className="custom-h2">Recovery</h2>
      <p className="custom-p">
        Once the treatment is completed, patients are given post-procedure
        guidelines. These details illustrate all after-care requirements at
        home. The injectionist will analyze the surface of the skin to pinpoint
        potential redness, swelling, and/or irritation. If present, an ointment
        is provided to help it settle. With the help of a certified
        injectionist, all post-treatment issues last no more than a few hours.
        The initial results will appear once the skin settles (24–48 hours). All
        long-term results appear 1–2 weeks after the session and should last 3–5
        months. Please note, each patient is unique and these dates can vary.
        The skin will go back to how it was if another injection isn’t completed
        in 3–5 months. However, patients display longer-lasting results with
        each additional injection as the skin trains itself to stay put.
      </p>

      <img
        src={botox3}
        alt="Botox treatment"
        className="centered-image w-96 max-w-1"
      />

      <h2 className="custom-h2">Side Effects of Botox®</h2>
      <p className="custom-p">
        While a certified injectionist reduces any chance of side effects, it’s
        best to keep note of what each procedure entails. Side effects can
        include pain/discomfort, fatigue, headaches, droopy eye(s), and allergic
        reactions. In most cases, these are mild and disappear in no more than a
        few hours. Patients are recommended and will be asked to state all
        medical conditions before the procedure including allergies, muscle
        conditions, nerve conditions, and pregnancies. The injectionist will
        also inquire about previous Botox® injections, facial surgeries, and
        current medications.
      </p>

      <p className="custom-availablesrv">
        Available at Maria Cosmetic Center — +1 (647) 887-7605. Always a
        pleasure to serve you!
      </p>
    </div>
  );
};

export default BotoxService;
