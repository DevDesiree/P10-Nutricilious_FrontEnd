import React, { useState } from 'react';
import { Banner } from "./components/banner/Banner.jsx";


export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Banner currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
};
