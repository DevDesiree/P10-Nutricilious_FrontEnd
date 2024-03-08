<<<<<<< HEAD
import Router from './configuration/Router.jsx';
import './App.css';

//OBS IMPORTAR ESTILOS DE TAILWIND TAMBEM?
=======
import React, { useState } from 'react';
import { Banner } from "./components/banner/Banner.jsx";


export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
>>>>>>> 11d8952806653baadbceaac50952a3c5096fb9f1

  return (
<<<<<<< HEAD
    <>
      {/* <Navbar/> */}
       <Router/>
       {/* <Footer/> */}
    </>
  )
}
=======
    <div>
      <Banner currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
};
>>>>>>> 11d8952806653baadbceaac50952a3c5096fb9f1
