import Router from "./configuration/Router.jsx";
import FooterComponent from "./components/footer-component/FooterComponent.jsx";
import "./App.css";
import NavbarComponent from "./components/navbar-component/NavbarComponent.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent/>
      <div className="flex-grow">
        <Router />
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
