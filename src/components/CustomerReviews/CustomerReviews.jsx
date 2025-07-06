import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "./reviewsData";

const MAX_LINES = 5;

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalPages - 1 : (prev - 1) % totalPages
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const start = currentIndex * reviewsPerPage;
  const visibleReviews = reviews.slice(start, start + reviewsPerPage);

  return (
    <div className="w-full px-4 py-8 bg-rose-50 relative">
      {/* Controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-6">
        {visibleReviews.map((review, index) => {
          const text = review.comment;
          const isExpanded = expanded[start + index];
          const isLong = text.split(" ").length > MAX_LINES * 6; // approx words per line

          return (
            <div
              key={start + index}
              className="bg-white max-w-sm w-full p-4 rounded-xl shadow-lg relative"
            >
              <FaQuoteLeft className="text-gray-400 text-2xl mb-2" />
              <p className="text-gray-800 mb-4 leading-relaxed text-justify">
                {isExpanded || !isLong
                  ? text
                  : text
                      .split(" ")
                      .slice(0, MAX_LINES * 6)
                      .join(" ") + "..."}
              </p>

              {isLong && (
                <button
                  onClick={() => handleToggleExpand(start + index)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {isExpanded ? "Close" : "Read more..."}
                </button>
              )}

              <p className="text-right font-semibold text-gray-600 mt-4">
                — {review.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReviews;
