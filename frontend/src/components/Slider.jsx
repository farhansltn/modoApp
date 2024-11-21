import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../css/slider.css";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="-z-10 carousel w-full relative">
      {" "}
      {/* Adjust height as needed */}
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />

            {/* Caption styled like a tweet */}
            <div className="tweet-caption absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70 text-white">
              {/* User handle and timestamp */}
              <div className="tweet-header flex items-center mb-2">
                <img
                  src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
                  alt="user-avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">@ModooRetail</span>
                  <span className="text-gray-400 text-xs">2h</span>
                </div>
              </div>
              {/* Tweet content */}
              <p>{item.caption}</p>

              {/* Like, Comment, Retweet buttons */}
              <div className="tweet-actions mt-2 flex justify-between text-gray-300">
                <span className="cursor-pointer">❤️ Like</span>
                <span className="cursor-pointer">🔁 Retweet</span>
                <span className="cursor-pointer">💬 Comment</span>
              </div>
            </div>
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Slider;
