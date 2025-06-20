import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgaftercare from "../../assets/images/aftercare.jpg";
import { Button } from "../buttons/Button"; 

const AfterCare = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/after-care-pdfs"); 
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
        
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">After Care</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Proper aftercare is essential to maintain the results of your skin treatments and ensure long-lasting benefits. 
            We recommend following all instructions provided by our specialists.
          </p>

          {/* Button */}
          <Button onClick={handleClick}>
            Learn More About After Care ...
          </Button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={imgaftercare}
            alt="After Care"
            className="w-full h-auto max-w-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AfterCare;
