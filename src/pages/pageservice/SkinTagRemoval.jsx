import React from "react";
import "./servicestyle.css";
import skintagimg1 from "../../assets/images/serviceimage/skin-tag1.jpg";

const SkinTagRemoval = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">
        Skin Tag removal
      </h1>

      <p className="custom-p">
        Skin tag removal is one of the most commonly performed procedures at
        Maria Cosmetic Center. Skin tags, also known as acrochorda
        (dermatology), are bits of benign skin growth that hang from the
        surrounding skin by a narrow stalk. Skin tags can be smooth or wrinkled,
        flesh colored or slightly brown, and usually irregular in shape. Skin
        tag may appear on any part of the human body. They are more often found
        on the neck, groin, armpits, eyelids, and under the breasts, and other
        areas where skin frequently rubs against skin or clothing. Small skin
        tags can be removed easily without anesthesia, while larger skin tags
        may require some topical anesthesia prior to the procedure.
      </p>

      <img
        src={skintagimg1}
        alt="Skin Tag removal"
        className="centered-image w-3/6"
      />

      <h3 className="custom-h3">
        Q: What are those red “moles” on my skin? <br />
        A: Most likely a Cherry Angioma
      </h3>
      <br />

      <p className="custom-p">
        Cherry Angioma is a big name for a little, benign red growth on the skin
        that is made up of tiny blood vessels (which provides its characteristic
        red color). They are typically the size of freckles or small moles, but
        they can be larger. Like freckles and moles, they can be either flat or
        elevated and can pop up anywhere on the body. Most often, they appear on
        the chest, abdomen, back, arms and legs. The cause is unknown, but there
        does seem to be a genetic component. As if you need another reason to
        wear sunscreen daily, sun exposure is known to encourage the appearance
        of Cherry Angiomas. There is no topical cream that removes cherry
        angiomas, so you will need to see a skin expert if you want them to go
        away. Fortunately, these benign (non-cancerous) bumps can be safely and
        easily removed using the heat and light from a cosmetic laser or
        electrical current (LamProbe). Certain skin cancers can have a similar
        appearance, so it is important to have a board certified Dermatologist
        or certified PA-C check out any unusual lesions that crop up on your
        skin before seeking cosmetic removal. If you have cherry angiomas or
        other unusual moles or skin lesions causing you concern, don’t hesitate
        to call the skin experts at{" "}
        <span className="font-bold">
          {" "}
          Maria Cosmetic Center (647) 887 7605.{" "}
        </span>
      </p>
    </div>
  );
};

export default SkinTagRemoval;
