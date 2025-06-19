import React from "react";
import "./servicestyle.css";
import Dermalfillerimg2 from "../../assets/images/serviceimage/dermalfiller2.jpg";
import Dermalfillerimg3 from "../../assets/images/serviceimage/dermalfiller3.jpg";

const DermalFiller = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1"> Dermal Filler</h1>
      <p className="custom-p">
        Dermal fillers are a safe, non-surgical medical treatment used to
        correct creasing, wrinkles, and sagging. The procedure assists in
        contouring the face and adding definition. The treatment is completed
        with the use of prudently placed injections into the target area(s).
        This clinic offers a comprehensive solution to reinvigorate skin and
        stimulate a youthful appearance.
      </p>
      <h2 className="custom-h2"> Treatment</h2>
      <p className="custopm-p">
        Dermal fillers are used to improve facial features near the cheeks,
        lips, and chin. A specialist will define the use of injections and which
        areas will be targeted to lessen the signs of aging. Patients choosing
        to pursue dermal fillers will notice an increase in collagen and elastin
        development. This treatment is an exceptional and recommended
        alternative to surgical procedures and related exceedingly invasive
        treatments. <br />
        Before the treatment, the nurse will apply a topical numbing gel to
        soothe the injection site. A fine needle is used to inject the dermal
        filler into the outer layer of skin. The injectionist continues to
        analyze the skin during this stage and massages the area to customize
        results. <br />
        This treatment will require a 30-40 minute session under the watchful
        eyes of a certified injectionist. <br />
        Once the injection has taken place, the filler will bind and add volume
        to the region. In rare cases, a patient will develop little redness and
        mild bleeding. This will dissipate in no more than an hour. If minor
        swelling is present, a robust recovery plan is offered and the skin will
        settle in three days. <br />
        Patients without these side effects can return to their daily activities
        immediately. If necessary, doctor assistant will follow-up to see how
        you’re doing.
      </p>
      <h2 className="custom-h2"> Injection Areas</h2>
      <p className="custom-p">
        Each case is distinct and the signs of aging will vary based on genetic
        disposition, environmental factors, and other related variables. The
        specialist will take these into account before pinpointing key target
        regions around the face.
      </p>
      <img src={Dermalfillerimg2} className="centered-image w-3/6" alt="Dermal filler" />
      <h2 className="custom-h2"> What are some of the injection areas?</h2>
      <ul className="custom-list">
        <li>Under Eyes</li>
        <li>Forehead Wrinkles</li>
        <li>Cheeks</li>
        <li>Jawline and Chin</li>
        <li>Nose</li>
        <li>Lips</li>
        <li>Nasolabial Folds</li>
        <li>Area(s) With Scarring from Acne</li>
      </ul>

      <p className="custom-p">
        These injection areas are vigilantly examined to guarantee each
        injection provides maximum value. The specialist will use
        state-of-the-art equipment to manage the completion of this procedure.
        Dermal Fillers in the hands of a professional can lead to delicate,
        aesthetically pleasing results.Results <br />
        Dermal filler procedures require meticulous attention to detail and a
        seasoned injectionist offering refined excellence throughout the
        experience. At this clinic, the results are top-notch and no stone is
        left unturned to offer superior quality. <br />
        The specialist will offer a comprehensive plan to control volume,
        balance, and texture. If these factors remain unaccounted for, the
        results can vary and injection sites easily become clumpy. For a smooth,
        easy-going finish, please consult this clinic and take advantage of a
        leading specialist as soon as possible. <br />
        In general, the final results will appear in 1-2 weeks depending on the
        patient’s skin, medical history, and response to treatment. If minor
        swelling is present, the full two weeks are required for suitable
        assessment of the dermal fillers. Many patients state they notice a
        difference instantaneously once the dermal filler is injected. This will
        depend on the skin type and how it handles the new filler. <br />
        The team prides itself on offering subtle results that aesthetically
        pleasing and remove signs of aging. This is a vigorous cosmetic
        procedure and your trained professional will use his/her years of
        experience to offer a picture-perfect finish.
      </p>
      <img src={Dermalfillerimg3} className="centered-image w-3/6" alt="Dermal filler" />
      <p className="custopm-p">
        To schedule your no-obligation consultation, call in and book a meeting
        with one of the clinic’s top-tier specialists. The consultation will
        include an array of information such as your skin’s condition, medical
        history, procedural details, and goals. This treatment is the ultimate
        anti-aging tool to reduce the wrinkles and creasing
      </p>
      <h2 className="custom-availablesrv">
        Available at Maria Cosmetic Center 55 Eglinton Ave E UNIT 402, Toronto,
        ON M4P 1G8. +1 (647) 887 7605 always a pleasure to serve you!
      </h2>
    </div>
  );
};

export default DermalFiller;
