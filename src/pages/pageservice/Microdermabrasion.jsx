import React from "react";
import "./servicestyle.css";

import Dermabrasionimg2 from "../../assets/images/serviceimage/Microdermabrasion2.jpg";
import Dermabrasionimg3 from "../../assets/images/serviceimage/microdermabrasion3.jpg";
import Dermabrasionimg4 from "../../assets/images/serviceimage/Microdermabrasion4.jpg";
import Dermabrasionimg5 from "../../assets/images/serviceimage/Microdermabrasion5.jpg";

const Microdermabrasion = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Microdermabrasion </h1>
      <p className="custom-p">
        Microdermabrasion is a simple, safe cosmetic procedure designed to
        smoothen and brighten skin using advanced technology. This clinic offers
        access to seasoned specialists to guarantee premium results and no
        downtime. The treatment uses active ingredients to suit a patient’s skin
        condition(s) ensuring a youthful appearance is right around the corner
        with the help of this clinic.
      </p>
      <img src={Dermabrasionimg2} className="centered-image w-2/6" />

      <h2 className="custom-h2">Benefits of Microdermabrasion :</h2>
      <p className="custom-p">
        Depending on a patient’s skin condition(s), a customized
        microdermabrasion treatment is established using the finest ingredients.
        This treatment offers a plethora of benefits to help rejuvenate and
        reinvigorate skin cells.
      </p>
      <img src={Dermabrasionimg3} className="centered-image w-2/6" />

      <h2 className="custom-h2">Additional benefits include:</h2>
      <ul className="custom-list">
        <li>Softening of Lines/Creases/Wrinkles</li>
        <li>Elimination of Acne</li>
        <li>Reduces Acne Scarring</li>
        <li>Lessens Age or Sunspots</li>
        <li>Refines Texture and Appearance of Skin</li>
        <li>General Anti-Aging</li>
      </ul>
      <p className="custom-p">
        These benefits demonstrate the value of microdermabrasion in the hands
        of an expert. The patient will notice an immediate change in his/her
        skin and its appearance. This is a treatment approved by Health Canada
        due to its consistency, efficiency, and overall quality.
      </p>

      <img src={Dermabrasionimg4} className="centered-image w-2/6" />

      <h2 className="custom-h2">Treatment</h2>
      <p className="custom-p">
        Before the treatment begins, a consultation is planned with a specialist
        at the clinic. This meeting is designed to help plan the best course of
        action based on the patient’s requirements, medical history, age, and
        various related details. Take the time to set up a consultation to get
        started. <br />
        Once the details are penned, the first session will be scheduled at the
        clinic. <br />
        The first session involves a brief informational segment to help
        illustrate how the procedure works and what’s required from the patient.
        This is a stepping-stone towards the initial microdermabrasion
        procedure. All target areas will be highlighted and assessed before
        beginning. These areas can include the face, hands, arms, back, neck,
        chest, and shoulders. <br />
        Microdermabrasion treatments take up 15-30 minutes per session based on
        the skin, number of areas treated, and the size of each area. In
        general, it will not take longer than 30 minutes to complete a session.
        To receive comprehensive results, a patient needs to complete six
        sessions (2-4 week intervals). The specialist will customize the
        intervals depending on how the skin responds to microdermabrasion.
        <br />
        The best time to receive treatment is before a special event as it
        brightens the skin and adds a beautiful glow. The solution is mild, easy
        to the eye, and comforting. It’s the ideal option for those wishing for
        no downtime and immediate results.
      </p>
      <h2 className="custom-h2">Recovery</h2>
      <p className="custom-p">
        Microdermabrasion procedures do not require extensive recovery periods.
        Most patients are able to go back to their regular schedule as planned.
        If necessary, the specialist will recommend avoiding excessive exposure
        to the sun.
      </p>

      <h2 className="custom-h2">
        Are there side effects to microdermabrasion procedures?
      </h2>
      <p className="custom-p">
        Patients do not cite side effects with this procedure. In rare cases, a
        patient’s skin might respond with mild redness but it will disappear in
        an hour. All precautions are taken to ease the skin and ensure those
        side effects are non-existent. <br />
        At this clinic, the specialists are experienced and certified to handle
        all relevant equipment. This speeds up the process and ensures
        everything is done in accordance to industry standards.
      </p>
      <img src={Dermabrasionimg5} className="centered-image w-3/6" />

      <h2 className="custom-h2">Ideal Candidate</h2>
      <p className="custom-p">
        While all patients are welcome to receive treatment at the clinic, it’s
        best to understand who an ideal candidate is for microdermabrasion
        procedures. In general, a patient with signs of aging, acne, or other
        related skin conditions are a better fit. <br />
        The specialist is able to examine the skin a`nd put together a robust
        plan with the use of microdermabrasion to generate positive results.
      </p>

      <h2 className="custom-h2">Who isn’t a good fit?</h2>
      <p className="custom-p">
        Patients with undiagnosed lesions, fragile capillaries, autoimmune
        disorders, diabetes, and lupus are asked to speak with a specialist in
        detail. These are taken into account while shaping treatment and
        reaching the target area(s). <br />
        To start your first microdermabrasion session at the clinic, call in and
        book a detailed consultation.
      </p>
    </div>
  );
};

export default Microdermabrasion;
