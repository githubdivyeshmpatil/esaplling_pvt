import React from "react";

const headers = [
  "Series / Model",
  "ESP53W1E0001", "ESP53W1E5001", "ESP53W1E6001", // Window
  "ESP53M2E0003", "ESP53M2E0002", "ESP53M2E4002", // Elegant / Floral
  "ESP53M2E0001", "ESP53M2E4001", // Standard
  "ESP53NC1M2E0001", "ESP53NC1M2E4001" // Royal
];

const data = [
  ["Tonnage", "1 Ton", "1.5 Ton", "1.5 Ton", "1 Ton", "1.5 Ton", "1.5 Ton", "1 Ton", "1.5 Ton", "1.5 Ton", "1.5 Ton (Multi Mode)"],
  ["Cooling Capacity (W)", "3200", "4800", "5050", "3520", "5200", "5600", "3500", "5200", "5200", "5200"],
  ["Compressor Type", "High EER Rotary", "High EER Rotary", "High EER Rotary", "High EER Rotary", "High EER Twin Rotary – BLDC", "High EER Twin Rotary – BLDC", "High EER Rotary", "High EER Rotary", "High EER Twin Rotary – BLDC", "High EER Twin Rotary – BLDC"],
  ["Refrigerant Gas", "R-32", "R-32", "R-32", "R-32", "R-32", "R-32", "R-32", "R-32", "R-32", "R-32"],
  ["Power Supply", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph", "230V / 50Hz / 1Ph"],
  ["Rated Power Input (W)", "1073", "1056", "1256", "1002", "1444", "1575", "985", "1430", "1430", "1430"],
  ["Rated Current (A)", "4.7", "7.1", "6.7", "4.4", "6.5", "6.6", "4.5", "6.5", "6.5", "6.5"],
  ["Star Rating", "3", "3", "5", "3", "3", "3", "3", "3", "3", "3"],
  ["Air Flow Volume (CMH)", "400", "700", "700", "430", "800", "800", "456", "800", "800", "800"],
  ["Noise Level (dB)", "54", "54", "54", "53", "46", "46", "53", "46", "46", "46"],
  ["Rated ISEER (W/W)", "2.98", "2.99", "3.31", "3.51", "4.51", "4.51", "3.51", "4.51", "4.51", "4.51"],
  ["Max Ambient Temp (°C)", "50", "50", "50", "50", "52", "52", "50", "52", "52", "52"],
  ["LCD Remote", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["LED Display", "No", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Anti Dust", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Nano Silver", "No", "No", "No", "Yes", "No", "No", "Yes", "Yes", "Yes", "Yes"],
  ["Catechin Filter", "No", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Acara Bacterium", "No", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Evaporator Fin", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue"],
  ["Copper Tubes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Sleep Mode", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Turbo Mode", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Timer", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Glow Button", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Unit Dim. (W×H×D) mm", "660×430×805", "660×430×805", "660×430×805", "800×290×222", "800×290×222", "800×290×222", "990×315×242", "990×315×242", "960×371×235", "960×371×235"],
  ["Unit Weight (Indoor / Outdoor)", "49 / 54", "58 / 64.5", "57 / 63", "9 / 20", "9 / 20", "9 / 20", "9 / 20", "9 / 20", "15 / 15", "15 / 15"]
];

const ACComparisonTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-[1000px] border border-gray-300 text-sm text-center">
        <thead className="bg-gray-200 text-xs font-semibold">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-100">
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300 px-2 py-1 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ACComparisonTable;
