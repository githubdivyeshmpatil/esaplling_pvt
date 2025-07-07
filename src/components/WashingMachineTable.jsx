import React from "react";

const headers = [
  "Feature",
  "MBWM7000", "M3WM8000", "M4WM8000", "MWM8000", "M6WM8000", "WM6800",
  "4WM7000", "7WM7000", "1WM8000", "6WM8000", "5WM7000", "7WM8000"
];

const data = [
  ["Wash Capacity (Kg)", "7", "8", "8", "8", "8", "6.8", "7", "7", "8", "8", "7", "7"],
  ["Spin Capacity (Kg)", "6", "6.5", "6.5", "6.5", "6.5", "6", "6", "6", "6.5", "6.5", "6", "6"],
  ["Water Inlets", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
  ["Control Knobs", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
  ["Spin Tub Cover", "Toughened Glass", "Toughened Glass", "Polypropylene", "Toughened Glass", "Toughened Glass", "Polypropylene", "Toughened Glass", "Toughened Glass", "Toughened Glass", "Toughened Glass", "Toughened Glass", "Toughened Glass"],
  ["Wash Tub Cover", "Toughened Glass", "Toughened Glass", "Polypropylene", "Toughened Glass", "Toughened Glass", "Polypropylene", "Toughened Glass", "Toughened Glass", "Toughened Glass", "Toughened Glass", "Toughened Glass", "Toughened Glass"],
  ["Control Panel", "Toughened Glass GT Cover", "Toughened Glass GT Cover", "ABS", "ABS", "ABS", "ABS", "Toughened Glass GT Cover", "Toughened Glass GT Cover", "ABS", "Toughened Glass GT Cover", "Toughened Glass GT Cover", "Toughened Glass GT Cover"],
  ["Body Frame", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS", "ABS"],
  ["Knob Design", "Normal", "Deco", "Normal", "Deco", "Normal", "Normal", "Normal", "Normal", "Deco", "Normal", "Normal", "Normal"],
  ["Layers of Body", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene", "Polypropylene"],
  ["Water Inlet Position", "Left & Right (back)", "Left & Right", "Left & Right", "Left & Right", "Left & Right", "Left & Right", "Left & Right (back)", "Left & Right (back)", "Left & Right", "Left & Right", "Left & Right (back)", "Left & Right (back)"],
  ["Power Cord Hanger", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Lid Design", "Toughened Glass with Printed Design", "Curved Toughened Glass with Printed Design", "Opaque", "Curved Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Window Type", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Curved Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design"],
  ["Spin Lid Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Opaque with Transparent Air Jet Dome", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Window Type", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design", "Toughened Glass with Printed Design"],
  ["Filter Type", "Net", "Net", "Net", "Net", "Net", "Net", "Net", "Net", "Net", "Net", "Net", "Net"],
  ["Wash Timer (min)", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35"],
  ["Spin Timer (min)", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
  ["Soak Timer (min)", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
  ["Buzzer", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
  ["Caster Wheels", "Available", "Specialized Pulsator", "Available", "Available", "Available", "Available", "Available", "Available", "Specialized Pulsator", "Available", "Available", "Available"],
  ["Pulsator Type", "Roller Jet Pulsator", "Specialized Pulsator", "Specialized Pulsator", "Specialized Pulsator", "Specialized Pulsator", "Normal", "Roller Jet Pulsator", "Roller Jet Pulsator", "Specialized Pulsator", "Specialized Pulsator", "Roller Jet Pulsator", "Roller Jet Pulsator"],
  ["Input Power (W)", "120 / 60", "123 / 60", "122 / 60", "123 / 60", "124 / 60", "120 / 60", "120 / 60", "120 / 60", "123 / 60", "120 / 60", "120 / 60", "120 / 60"],
  ["Motor Output Power (W)", "360 / 180", "383 / 180", "362 / 180", "383 / 180", "384 / 180", "360 / 180", "360 / 180", "360 / 180", "383 / 180", "360 / 180", "360 / 180", "360 / 180"],
  ["Wash Motor RPM", ">800", ">800", ">800", ">800", ">800", ">800", ">800", ">800", ">800", ">800", ">800", ">800"],
  ["Spin Motor RPM", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350", ">1350"],
  ["Safety Cover", "One", "One", "One", "One", "One", "One", "One", "One", "One", "One", "One", "One"],
  ["Water Inlet Pipe", "One", "One", "One", "One", "One", "One", "One", "One", "One", "One", "One", "One"],
  ["Net Weight (kg)", "20", "23.5", "23", "23.5", "24.2", "21", "20.9", "21", "23.5", "24.7", "20", "20"],
  ["Gross Weight (kg)", "24", "26", "26", "26", "26", "24", "24", "24", "26", "27", "24", "24"],
  ["Length (mm)", "830", "900", "900", "900", "900", "850", "850", "850", "900", "905", "850", "850"],
  ["Width (mm)", "450", "500", "500", "500", "500", "475", "475", "475", "500", "515", "475", "475"],
  ["Height (mm)", "1015", "960", "960", "960", "960", "960", "960", "960", "960", "960", "950", "950"],
];

const WashingMachineTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-[1000px] border border-gray-300 text-sm text-center">
        <thead className="bg-gray-200 text-xs font-semibold">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-300 px-2 py-1 whitespace-nowrap">
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

export default WashingMachineTable;
