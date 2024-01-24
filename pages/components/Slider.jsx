import React, { useState } from "react";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";

export default function Slider({ value, setValue }) {
  const handleChange = (range) => {
    if (setValue) {
      setValue(range);
    }
  };

  return (
    <div className="w-56 mt-4 relative">

      <span className="absoluet left-0 top-0 bg-gray-500 text-white p-1 rounded">{value[0]}</span>
      <span className="absolute right-0  bg-gray-500 text-white p-1 rounded">{value[1]}</span>
    <div className="mt-4">
    <RangeSlider
      
      min={499}
      max={24500}
      defaultValue={[499, 5000]}
      step={1}
      value={value}
      onInput={handleChange}
    />
    </div>
    </div>
  );
}
