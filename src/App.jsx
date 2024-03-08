import Router from './configuration/Router.jsx';
import FooterComponent from './components/footer-component/FooterComponent.jsx';
import './App.css';

//OBS IMPORTAR ESTILOS DE TAILWIND TAMBEM?

export default function App() {
  return (
    <>
      {/* <Navbar/> */}
       <Router/>
       {/* <Footer/> */}
       <FooterComponent></FooterComponent>
    </>
  )
}
