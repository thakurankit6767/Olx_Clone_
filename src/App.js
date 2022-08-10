import './App.css';
import AllRoutes from './Components/AllRoutes';
import {MainRoutes} from "./Components/MainRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from './Pages/Homepage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes/>
      <AllRoutes />
      {/* <Homepage/> */}
      <Footer />
    </div>
  );
}

export default App;
