import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Ac from '../components/Ac';
import BackgroundSection from '../components/BackgroundSection';

function FridgeSpecs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headings = ["Specification", "50 L", "95 L", "180 L", "195 L", "215 L"];

  const rows = [
    ["Gross Capacity (L)", "50", "95", "180", "195", "215"],
    ["Net Capacity", "", "", "170", "184", ""],
    ["Freezer Gross Capacity", "Freezer not declared (4 lt)", "Freezer not declared (7 lt)", "24", "24", "24"],
    ["Fridge Gross", "50", "95", "155", "170", "189.5"],
    ["Compressor Warranty", "As per RMA agreement", "As per RMA agreement", "", "", ""],
    ["Low Voltage Stability", "160 V@ 43 Ambient", "160 V@ 43 Ambient", "160 V@ 43 Ambient", "160 V@ 43 Ambient", "160 V@ 43 Ambient"],
    ["Refrigerant", "R-600a - 18 g", "R-600a - 18 g", "R-600a - 29 g", "R-600a - 32 g", "R-600a - 32 g"],
    ["Compressor Type", "CSH10", "CSH10", "CSH10", "CSH10", "CSH10"],
    ["Compressor", "Reciprocating", "Reciprocating", "Reciprocating", "Reciprocating", "Reciprocating"],
    ["Condenser Type", "INTERNAL SKIN", "INTERNAL SKIN", "EXTERNAL", "EXTERNAL", "EXTERNAL"],
    ["Condenser", "L TYPE", "L TYPE", "O TYPE", "O TYPE", "O TYPE"],
    ["Suction Length", "1500 mm", "1700 mm", "2500 mm", "2500 mm", "2500 mm"],
    ["Capillary Length", "2584 mm", "2700 mm", "", "", ""],
    ["Lowest Temp.", "-23°C", "-23°C", "-23°C", "-23°C", "-23°C"],
    ["Capillary Material", "COPPER", "COPPER", "COPPER", "COPPER", "COPPER"],
    ["Gasket", "REMOVABLE", "REMOVABLE", "REMOVABLE", "REMOVABLE", "REMOVABLE"],
    ["Anti Bacterial", "Yes", "Yes", "Yes", "Yes", "Yes"],
    ["Thermostat", "ELECTRO MECHANICAL", "ELECTRO MECHANICAL", "ELECTRO MECHANICAL", "ELECTRO MECHANICAL", "ELECTRO MECHANICAL"],
    ["Defrost", "Manual", "Manual", "Manual", "Manual", "Manual"],
    ["Operating Range", "-22°C ± 2", "-22°C ± 2", "-22°C ± 2", "-22°C ± 2", "-22°C ± 2"],
    ["Freezer Door", "N/A", "N/A", "TRANSPARENT", "TRANSPARENT", "TRANSPARENT"],
    ["Lamp", "N/A", "N/A", "0.5W", "0.5W", "0.5W"],
    ["Chiller Tray", "YES-GPPS-1 NO.", "YES-GPPS-1 NO.", "YES-GPPS-1 NO.", "YES-GPPS-1 NO.", "YES-GPPS-1 NO."],
    ["Ice Tray", "YES-PP-1 NOS", "YES-PP-1 NOS", "YES-PP-2 NOS", "YES-PP-2 NOS", "YES-PP-2 NOS"],
    ["Shelf", "Wire shelves", "Wire shelves", "Toughened Glass", "Toughened Glass", "Toughened Glass"],
    ["No. of Shelf", "2", "2", "3", "3", "3"],
    ["Egg Tray", "NO", "NO", "HIPS –OPAQUE-1 NO.", "HIPS –OPAQUE-1 NO.", "HIPS –OPAQUE-1 NO."],
    ["Crisper", "NO", "YES–PP-OPAQUE", "YES–GPPS", "YES–GPPS", "YES–GPPS"],
    ["Cord Set Spec", "6 A / 220 - 240 V", "6 A / 220 - 240 V", "6 A / 220 - 240 V", "6 A / 220 - 240 V", "6 A / 220 - 240 V"],
    ["Cabinet Finish", "PAINTED/PCM/PET", "PAINTED/PCM/PET", "PAINTED/PCM/PET", "PAINTED/PCM/PET", "PAINTED/PCM/PET"],
    ["Shelf Utility", "wire shelves", "wire shelves", "YES-GPPS", "YES-GPPS", "YES-GPPS"],
    ["Handle", "NO", "NO", "YES–T TYPE", "YES–T TYPE", "YES–T TYPE"],
    ["Lock", "NO", "NO", "REMOVABLE", "REMOVABLE", "REMOVABLE"],
    ["Width (mm)", "480", "480", "590", "590", "590"],
    ["Height (mm)", "520", "520", "1300", "1300", "1300"],
    ["Depth (mm)", "460", "460", "700", "700", "700"],
    ["Voltage", "220–240 V", "220–240 V", "220–240 V", "220–240 V", "220–240 V"],
    ["Frequency", "50 Hz", "50 Hz", "50 Hz", "50 Hz", "50 Hz"],
    ["Base Stand", "ADJUSTABLE - 2 NOS.", "ADJUSTABLE - 2 NOS.", "ADJUSTABLE - 2 NOS.", "ADJUSTABLE - 2 NOS.", "ADJUSTABLE - 2 NOS."],
  ];

  return (
    <>
      <Navbar />
      <BackgroundSection bgImage="/img/Fridge_banner.jpeg" />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Refrigerator Technical Specifications</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left text-gray-700">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                {headings.map((head, idx) => (
                  <th key={idx} className="border px-4 py-2">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {row.map((col, cIdx) => (
                    <td key={cIdx} className="border px-4 py-2">{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Ac />
      </div>
    </>
  );
}

export default FridgeSpecs;
