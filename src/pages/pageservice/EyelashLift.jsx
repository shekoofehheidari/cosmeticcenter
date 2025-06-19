import React from "react";
import "./servicestyle.css";
import EyelashLiftimg2 from "../../assets/images/serviceimage/Eyelashlift2.jpg";

const EyelashLift = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">Eyelash Lift </h1>
      <p className="custom-p">
        Getting a lash lift is best compared to coloring your hair: It’s not the
        best thing for your hair, but it won’t hurt it as long as you do it in
        moderation. … “A common mistake made with lash lifts is using the
        incorrect rod and leaving the product on for too long of a time period.
        <br />
        The results typically last four to six weeks, depending on how quickly
        your eyelashes grow. You should avoid mascara for 48 hours after the
        treatment, and leave lashes untouched for a full day. <br />
        If you wish to reverse your lash perm, the first step is to take a
        shower. … I recommend castor oil because not only will it help to
        reverse the perm treatment, but it’s also a great natural oil for
        thickening and lengthening your eyelashes. Give your lashes a lift
        without the perm by using an eyelash curler. <br />
        If you like your natural lashes and just want a more wide-eyed look, or
        have a more natural vibe and want to skip mascara, a lash lift is a
        great choice for you. … Despite not actually adding any length, the curl
        makes my lashes look longer, and it really opens up my small eyes.
      </p>
      <img src={EyelashLiftimg2} className="centered-image w-2/6" />
      <h3 className="custom-h3">Is an eyelash lift better than extensions?</h3>
      <p className="custom-p">
        –Extensions last 3-4 weeks, while a lift can last 6-8 weeks. -A lift
        does just that: lifts your natural lashes. … Lash lifts don’t require a
        refill, and people often get a lift between extensions to give their
        lashes a break and grow back in. -The process of getting extensions can
        take up to two hours.
      </p>
    </div>
  );
};

export default EyelashLift;
