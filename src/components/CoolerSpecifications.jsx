import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundSection from './BackgroundSection';

const coolerData = [
  {
    model: 'WINDY',
    airDelivery: '3500 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '30L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'TURBO',
    airDelivery: '3500 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '30L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'TOWER PERSONNEL',
    airDelivery: '5000 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '25L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'TOWER+',
    airDelivery: '5000 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '80L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'TOWER',
    airDelivery: '5000 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '40L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'THUNDER',
    airDelivery: '5000 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '63L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'TORNADO',
    airDelivery: '5000 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '63L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'CURVY',
    airDelivery: '5000 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '100L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'SMARTY',
    airDelivery: '3500 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '30L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'COOL X',
    airDelivery: '3500 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '30L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
  {
    model: 'COOL PLUS',
    airDelivery: '3650 m³/hr',
    humidityControl: 'Yes',
    tankCapacity: '50L',
    waterIndicator: 'Yes',
    coolingMedium: 'Honeycomb Pad',
    remote: 'Yes',
    inverter: 'Yes',
    wheels: 'Yes',
  },
];

const CoolerSpecifications = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
     <Navbar />
      <div className="w-full">
        <BackgroundSection bgImage="/img/coolerbanner.jpg" />
      </div>
  
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Technical Specification</h2>
      <table className="table-auto border border-gray-300 w-full text-sm md:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Model Name</th>
            <th className="border px-4 py-2">Air Delivery</th>
            <th className="border px-4 py-2">Humidity Control</th>
            <th className="border px-4 py-2">Water Tank Capacity</th>
            <th className="border px-4 py-2">Water Level Indicator</th>
            <th className="border px-4 py-2">Cooling Medium</th>
            <th className="border px-4 py-2">Remote Control</th>
            <th className="border px-4 py-2">Inverter Compatibility</th>
            <th className="border px-4 py-2">Caster Wheels</th>
          </tr>
        </thead>
        <tbody>
          {coolerData.map((item, idx) => (
            <tr key={idx} className="text-center">
              <td className="border px-4 py-2 font-semibold">{item.model}</td>
              <td className="border px-4 py-2">{item.airDelivery}</td>
              <td className="border px-4 py-2">{item.humidityControl}</td>
              <td className="border px-4 py-2">{item.tankCapacity}</td>
              <td className="border px-4 py-2">{item.waterIndicator}</td>
              <td className="border px-4 py-2">{item.coolingMedium}</td>
              <td className="border px-4 py-2">{item.remote}</td>
              <td className="border px-4 py-2">{item.inverter}</td>
              <td className="border px-4 py-2">{item.wheels}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
  );
};

export default CoolerSpecifications;
