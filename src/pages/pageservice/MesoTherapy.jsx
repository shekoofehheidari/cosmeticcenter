import React from "react";
import "./servicestyle.css";
import MesoTherapyimg2 from "../../assets/images/serviceimage/Mesotherapy1.jpg";

const MesoTherapy = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Meso Therapy </h1>
      <p className="custom-p">
        Mesotherapy is a non-surgical procedure designed to inject water base
        materials into the skin. This treatment is completed with the use of
        micro needles and helps replenish the skin. The materials are packed
        with nutrients and offer a range of advantages while revitalizing the
        skin. Skin rejuvenation using this procedure provides depth,
        comprehensive diffusion, and does not enter the bloodstream. <br />
        The clinic uses state-of-the-art technology to complete this procedure
        and will personalize the treatment to maximize efficiency. All results
        are cultivated under the careful supervision of a professional with
        years of clinical experience.
      </p>
      <h2 className="custom-h2">Treatment </h2>
      <p className="custom-p">
        Mesotherapy requires the use of micro needles to puncture the skin and
        help promote long-term collagen development. This procedure is detailed
        and is finalized after a thorough consultation. <br />
        All injections offered are completed in a seamless, pain-free manner to
        offer full value to patients. The skin’s surface is examined before
        beginning and monitored throughout the procedure. If necessary, patients
        are offered a mild painkiller or anesthetic to relieve pressure. <br />
        Patients can expect approximately 4-10 treatments depending on their
        skin’s condition, progression, and medical history. All details are
        weighed by an expert to ensure your results are as required. These
        treatments are short and will not go longer than 30-40 minutes. A
        schedule is set up after the consultation to evenly spread these
        sessions for maximum effectiveness.
      </p>
      <h2 className="custom-h2">
        What areas can be treated with Mesotherapy?{" "}
      </h2>
      <ul className="custom-list">
        <li>Thighs (Inside and Outside)</li>
        <li>Chin</li>
        <li>Upper Arms</li>
        <li>Abdomen</li>
        <li>Face</li>
      </ul>
      <p className="custom-p">
        If necessary, the consultation will detail the plan for your session(s).
        This can help provide precise results in the problem areas. <br />
        Please consult with a specialist at the clinic to determine the best
        course of action for your case.
      </p>

      <h2 className="custom-h2">Potential Side Effects</h2>
      <p className="custom-p">
        Mesotherapy is a safe, non-surgical treatment and will not lead to
        long-term side effects. In general, patients are able to go back to
        their routine as soon as they leave the clinic. <br />
        For potential side effects, the following can be seen in rare cases.
      </p>
      <ul className="custom-list">
        <li>Mild Redness</li>
        <li>Gentle Itching</li>
        <li>Minor Swelling</li>
        <li>General Discomfort</li>
        <li>Pea-Like Pustules (Very Rare!)</li>
      </ul>
      <p className="custom-p">
        Once again, these are uncommon and when a procedure is completed under
        the watchful eye of a seasoned expert, these side effects will not
        appear.
      </p>
      <h2 className="custom-h2">Ideal Candidate</h2>
      <p className="custom-p">
        While the procedure is ideal for a number of clients, it doesn’t suit
        specific patients. This is determined and relayed during the
        consultation after a specialist has examined the skin and diagnosed
        specific issues.
      </p>

      <h2 className="custom-h2">What can be a point of concern?</h2>
      <ul className="custom-list">
        <li>Pregnancy</li>
        <li>History of Stroke</li>
        <li>History of Skin Cancer (Or Any Form of Cancer)</li>
        <li>History of Diabetes</li>
        <li>History of Blood Clots</li>
        <li>Ongoing Medication For Heart Condition(s)</li>
      </ul>
      <p className="custom-p">
        If any of these concerns are relevant, Mesotherapy might not be an
        appropriate fit for your skin-related concerns. For more information,
        please contact one of the representatives at this clinic to get a
        detailed answer on your eligibility.
      </p>
      <h2 className="custom-h2">Recovery Phase</h2>
      <h3 className="custom-h3">
        Is the recovery phase extensive with Mesotherapy?
      </h3>
      <p className="custom-p">
        No, it is not extensive and in most cases patients will not have to go
        through an exhaustive plan to maintain their results. Mesotherapy is a
        consistent, all-encompassing procedure and offers a delightful change to
        the body without needing surgery.
        <br />
        If the potential side effects aren’t present, a patient will be ready to
        wear makeup/sun screen within a few hours if necessary. The specialist
        provides this information on a case-to-case basis. Feel free to
        communicate your concerns at any stage of the procedure. <br />
        For your first session, it all begins with a simple call to speak with a
        representative at the clinic. Book your consultation and notice a change
        in your skin texture, appearance, and overall quality. This is your
        opportunity to reinvigorate your skin and bring it back to life.
      </p>
      <img src={MesoTherapyimg2} className="centered-image w-full" />
    </div>
  );
};

export default MesoTherapy;
