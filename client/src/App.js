import { Routes, Route } from "react-router-dom";

// //home page
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import Main from "./component/main/Main";


/////// pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/ipad/ipad";
import Watch from "./Pages/watch/watch";
import Tv from "./Pages/tv/tv";
import AirPod from "./Pages/other/AirPod";
import Support from "./Pages/other/support";
import Productpage from "./Pages/Productpage/Productpage";
import Four04 from "./Pages/Four04/Four04";

import "./css/bootstrap.css";
import "./css/styles.css";




function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:productID" element={<Productpage />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="AirPod" element={<AirPod />} />
        <Route path="support" element={<Support />} />
        
        <Route path="*" element={<Four04 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
