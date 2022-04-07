import Header from "./Components/Header/Header";
import DesignFuture from "./Components/DesignforFuture/DesignforFuture";
import StateofArt from "./Components/StateofArt/StateofArt";
import FreeOpen from "./Components/FreeOpen/FreeOpen";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="relative z-0">
      <Header />
      <DesignFuture />
      <StateofArt />
      <FreeOpen />
      <Footer />
    </div>
  );
}

export default App;
