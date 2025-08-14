import { useState } from "react";
import './i18n';

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LEDPage from "./RouterProduct/LEDPage";
import Iptv from "./RouterProduct/Iptv";
import Interactive_panel from "./RouterProduct/Interactive_panel";
import Vdf from "./RouterProduct/Vdf";
import Lfd from "./RouterProduct/Lfd";
import Brs from "./RouterProduct/Brs";
import Sliptac from "./RouterProduct/Sliptac";
import Vrf from "./RouterProduct/Vrf";
import Chiller from "./RouterProduct/Chiller";
import Cooler from "./RouterProduct/Cooler";
import NewdesertCooler from "./RouterProduct/NewdesertCooler";
import Refrigarator from "./RouterProduct/Refrigarator";
import Washing from "./RouterProduct/Washing";
import Geysers from "./RouterProduct/Geysers";
import CareerPage from "./pages/CareerPage";
import AboutUs from "./pages/AboutUs";
import Vison from "./pages/Vison";
import Certification from "./components/Certification";
import Quality from "./components/Quality";
import Managment from "./components/Managment";
import Recognization from "./components/Recognization";
import Corporate from "./components/Corporate";
import ChillerDis from "./components/ChillerDis";
import Dehumidifier from "./components/Dehumidifier";
import Airhandling from "./components/Airhandling";
import Ventilation from "./components/Ventilation";
import Evaporative from "./components/Evaporative";
import Aircontamination_pro from "./components/Aircontamination_pro";
import Om from "./components/Om";
import Server_airconditioning from "./components/Server_airconditioning";
import Elavator_airconditionning from "./components/Elavator_airconditionning";
import Filter_Ephoxe from "./components/Filter_Ephoxe";
import Filter_aphox from "./components/Filter_aphox";
import Filter_aktion from "./components/Filter_aktion";
import Filter_muller from "./components/Filter_muller";
import Automotive_page from "./components/Automotive_page";
import Autoaircondition from "./components/Autoaircondition";
import Ctscan from "./components/Ctscan";
import Mask_safe from "./components/Mask_safe";
import Ventilator from "./components/Ventilator";
import Thermometer from "./components/Thermometer";
import Bio_aerostar from "./components/Bio_aerostar";
import Energymanagement from "./components/Energymanagement";
import Electric_lv from "./components/Electric_lv";
import Plumbing from "./components/Plumbing";
import Fireprotection from "./components/Fireprotection";
import Plantsetup from "./components/Plantsetup";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Acquisition from "./components/Acquisition";
import TawkMessenger from "./components/TawkMessenger";
import Contact from "./pages/Contact";
import New_hvac from "./components/New_hvac";
import Heating from "./components/Heating";
import Dataled from "./components/Dataled";
import Smallappillinace from "./components/Smallappillinace";
import AeroStar from "./components/AeroStar";
import Envorment_safety from "./components/Envorment_safety";
import WashingMachineTable from "./components/WashingMachineTable";
import TVComparisonTable from "./components/TVComparisonTable";
import ACComparisonTable from "./components/ACComparisonTable";
import CoolerSpecifications from "./components/CoolerSpecifications";
import FridgeSpecs from "./components/FridgeSpecs";
import VisiCooler from "./components/VisiCooler";
import Training from "./components/Training";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrier" element={<CareerPage />} />
                    <Route path="/training" element={<Training />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/vison" element={<Vison />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/managment" element={<Managment />} />
          <Route path="/recognition" element={<Recognization />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/hvac/chillerDis" element={<ChillerDis />} />
          <Route path="/hvac/dehumidifier" element={<Dehumidifier />} />
          <Route path="/hvac/airhandling" element={<Airhandling />} />
          <Route path="/hvac/ventilation" element={<Ventilation />} />
          <Route path="/hvac/evaporative" element={<Evaporative />} />
          <Route path="/acquisition" element={<Acquisition />} />
          <Route path="/dataled" element={<Dataled />} />
         <Route path="/consumer-electronics/small_appliances" element={<Smallappillinace />} />
                  <Route path="/support/envorment_helth_guide" element={<Envorment_safety/>} />
                                    <Route path="/consumer-electronics/washingdata" element={<WashingMachineTable/>} />
                                    <Route path="/consumer-electronics/tvcomparison" element={<TVComparisonTable/>} />
                                    <Route path="/consumer-electronics/accomparison" element={<ACComparisonTable/>} />
        <Route path="/coolerspecifications" element={<CoolerSpecifications />} />
                                                <Route path="/fridgespecs" element={<FridgeSpecs />} />
                  <Route path="/consumer-electronics/visicooler" element={<VisiCooler />} />










          
          <Route
            path="/hvac/aircontamination_pro"
            element={<Aircontamination_pro />}
          />
          <Route path="/hvac/hvac_om" element={<Om />} />
          <Route
            path="/heating/server_airconditioning"
            element={<Server_airconditioning />}
          />
          <Route
            path="/heating/elavator_airconditionning"
            element={<Elavator_airconditionning />}
          />
          <Route path="/filter/filter_ephox" element={<Filter_Ephoxe />} />
          <Route path="/filter/filter_aphox" element={<Filter_aphox />} />
          <Route path="/filter/filter_aktion" element={<Filter_aktion />} />
          <Route path="/filter/filter_muller" element={<Filter_muller />} />
          <Route
            path="/automotive/automotive_page"
            element={<Automotive_page />}
          />
          <Route
            path="/automotive/autoaircondition"
            element={<Autoaircondition />}
          />
          <Route path="/biomedical/ct_scan" element={<Ctscan />} />
          <Route path="/biomedical/mask_breathsafe" element={<Mask_safe />} />
          <Route path="/biomedical/ventilator" element={<Ventilator />} />
          <Route path="/biomedical/thermometer" element={<Thermometer />} />
          <Route path="/biomedical/aerostar" element={<Bio_aerostar />} />
          <Route
            path="/services/energymanagment"
            element={<Energymanagement />}
          />
                    <Route path="/hvac/aerostar" element={<AeroStar />} />
          <Route path="/services/eletrical_and_lv" element={<Electric_lv />} />
          <Route path="/services/plumbing" element={<Plumbing />} />
          <Route path="/services/fireprotection" element={<Fireprotection />} />
          <Route path="/innovation/plant_setup" element={<Plantsetup />} />
          <Route path="/news/blog" element={<Blog />} />
          <Route path="/hvac/new_hvac" element={<New_hvac />} />
          <Route path="/consumer-electronics/led" element={<LEDPage />} />
          <Route path="/consumer-electronics/iptv" element={<Iptv />} />
          <Route
            path="/consumer-electronics/interactive-panel"
            element={<Interactive_panel />}
          />
          <Route
            path="/consumer-electronics/video-display-system"
            element={<Vdf />}
          />
          <Route
            path="/consumer-electronics/large-format-display"
            element={<Lfd />}
          />
          <Route
            path="/consumer-electronics/board-room-solution"
            element={<Brs />}
          />

          {/* ac----acccc routes------- */}
          <Route path="/consumer-electronics/split-ac" element={<Sliptac />} />
          <Route path="/consumer-electronics/vrf" element={<Vrf />} />
          <Route path="/consumer-electronics/chiller" element={<Chiller />} />
          {/* ac----cooler routes------- */}
          <Route path="/consumer-electronics/cooler" element={<Cooler />} />
          <Route
            path="/consumer-electronics/new-desert"
            element={<NewdesertCooler />}
          />
          <Route
            path="/consumer-electronics/refrigerators"
            element={<Refrigarator />}
          />
          <Route path="/consumer-electronics/washing" element={<Washing />} />
          <Route path="/consumer-electronics/geysers" element={<Geysers />} />
                    <Route path="/contact/contact_us" element={<Contact />} />
                                        <Route path="/hvac/heating" element={<Heating />} />



       
        </Routes>
         <Footer/>
      </Router>
        {/* <TawkMessenger /> */}
     
    </>
  );
}

export default App;
