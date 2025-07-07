import React from "react";

const headers = [
  "Features",
  "Model 1",
  "Model 2",
  "Model 3",
  "Model 4",
  "Model 5",
  "Model 6",
  "Model 7",
  "Model 8"
];

const data = [
  ["Viewing Angle", "178°H / 178°V", "178°H / 178°V", "178°H / 178°V", "178°H / 178°V", "178°H / 178°V", "178°H / 178°V", "178°H / 178°V", "178°H / 178°V"],
  ["Response Time", "20ms", "20ms", "8.0ms", "8.0ms", "8.0ms", "8.0ms", "8.0ms", "8.0ms"],
  ["Video Color System", "PAL + SECAM", "PAL + SECAM", "PAL + SECAM", "PAL + SECAM", "PAL + SECAM", "PAL + SECAM", "PAL + SECAM", "PAL + SECAM"],
  ["HDMI", "2", "2", "2", "2", "2", "2", "2", "2"],
  ["PC VGA", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["AV IN", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["EARPHONE", "—", "—", "1", "1", "1", "1", "1", "1"],
  ["RF IN", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["PC IN", "—", "—", "—", "—", "—", "—", "—", "—"],
  ["PC Audio IN", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["USB", "2", "2", "2", "2", "2", "2", "2", "2"],
  ["CPU", "—", "—", "CA7*2 core – 1.5GHz", "CA7*2 core – 1.5GHz", "CA7*2 core – 1.5GHz", "CA7*2 core – 1.5GHz", "CA7*2 core – 1.4GHz", "CA53*2 core – 1.4GHz"],
  ["RAM", "—", "—", "1 GB", "1 GB", "1 GB", "1 GB", "1 GB", "1 GB"],
  ["ROM", "—", "—", "8 GB", "8 GB", "8 GB", "8 GB", "8 GB", "8 GB"],
  ["LAN", "—", "—", "Yes", "Yes", "Yes", "Yes", "Yes", "1"],
  ["Android Version", "—", "—", "4.4", "4.4", "4.4", "4.4", "4.4", "4.4"],
  ["Miracast / Cast", "—", "—", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Eshare / Screen Share", "—", "—", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Line Out", "—", "—", "1", "1", "1", "1", "1", "1"],
  ["TF IN (Mini SD)", "—", "—", "1", "1", "1", "1", "1", "1"],
  ["Wi-Fi", "—", "—", "—", "—", "—", "—", "Yes", "Yes"],
  ["OSD Language", "English", "English", "English", "English", "English", "English", "English", "English"],
  ["Audio Output", "8W + 8W", "8W + 8W", "8W + 8W (Box Speaker)", "8W + 8W (Box Speaker)", "10W + 10W", "10W + 10W", "10W + 10W", "10W + 10W"],
  ["Power Requirement", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz", "100–260V AC, 50/60Hz"],
  ["Max Power Consumption", "≤65W", "≤65W", "≤75W", "≤75W", "≤75W", "≤110W", "≤140W", "≤220W"],
  ["Gross Weight", "6.25 kg", "6.25 kg", "9.5 kg", "9.5 kg", "9.5 kg", "11.3 kg", "13.5 kg", "31.0 kg"],
  ["Net Weight (w/ base stand)", "4.13 kg", "4.13 kg", "6.8 kg", "6.8 kg", "6.8 kg", "11.0 kg", "12.3 kg", "18.0 kg"],
  ["Net Weight (w/o base stand)", "4.2 kg", "4.2 kg", "6.7 kg", "6.7 kg", "6.7 kg", "10.5 kg", "12.0 kg", "17.0 kg"],
  ["Gross Dimension", "80.5×51.3×14 cm", "80.0×51.5×14 cm", "98.5×63×14.5 cm", "98.5×63×14.5 cm", "98.5×63×14.5 cm", "122×71.6×18.5 cm", "138×84.5×19.2 cm", "146×91×20 cm"],
  ["Net Dim (w/ stand)", "73.5×47.5×19.5 cm", "73.5×47.5×19.5 cm", "92×57.8×20 cm", "92×57.8×20 cm", "92×57.8×20 cm", "110×72.5×21 cm", "124×77.5×21 cm", "146×84×21 cm"],
  ["Net Dim (w/o stand)", "73.5×43.5×7.7 cm", "73.5×43.5×7.7 cm", "92×53.8×8.5 cm", "92×53.8×8.5 cm", "92×53.8×8.5 cm", "110.5×65×8.5 cm", "124×71.5×8.5 cm", "146×84×8.5 cm"]
];

const TVComparisonTable = () => {
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

export default TVComparisonTable;
