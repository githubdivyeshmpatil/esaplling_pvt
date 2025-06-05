import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import YourComponent from "../components/YourComponent";
import Ac from "../components/Ac";
import Background from "../components/Background";

// Product data with subcategories under televisions
const productsData = {
  
  televisions: {
    LED: [
      {
        id: 1,
        name: "ESAP65S4KLED (165cm)",
        dis: "Esaplling Series 165 cm (65  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/tv1.jpg",
        price: 34999,
        cutPrice: 69999,
        offer: "50% OFF",
      },
      {
        id: 2,
        name: "ESAP32SLED (80cm)",
        dis: "Esaplling Series 80 cm (32  inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED1.png",
        price: 54999,
        cutPrice: 79999,
        offer: "31% OFF",
      },
      {
        id: 3,
        name: "ESAP40LED (102cm)",
        dis: "Esaplling Series 102 cm (40  inch) Ultra HD 768p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | HDMI x 2, USB x 2|  Earphone Jack | SuperLuma |AV IN x 2 |Turbo Sound",
        img: "/img/LED2.png",
        price: 48999,
        cutPrice: 72999,
        offer: "33% OFF",
      },
      {
        id: 4,
        name: "ESAP40SLED (102cm)",
        dis: "Esaplling Series 102 cm (40  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED3.png",
        price: 28999,
        cutPrice: 39999,
        offer: "28% OFF",
      },
      {
        id: 5,
        name: "ESAP42LED (106cm)",
        dis: "Esaplling Series 106 cm (42  inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED4.png",
        price: 54999,
        cutPrice: 79999,
        offer: "31% OFF",
      },
      {
        id: 6,
        name: "ESAP42SLED (106cm)",
        dis: "Esaplling Series 106 cm (42  inch) Ultra HD 1080p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED5.png",
        price: 48999,
        cutPrice: 72999,
        offer: "33% OFF",
      },
      {
        id: 7,
        name: "ESAP48LED (122cm)",
        dis: "Esaplling Series 122 cm (48  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED6.png",
        price: 28999,
        cutPrice: 39999,
        offer: "28% OFF",
      },
      {
        id: 8,
        name: "ESAP55SLED (140cm)",
        dis: "Esaplling Series 140 cm (55  inch) Ultra HD 3840p Internet Enabled | WiFi + LAN Connectivity |HDMI x 2, USB x 3, SD Card Slot |Color Booster | 4K Dolby Vision | Airfly Remote (optional)",
        img: "/img/LED7.png",
        price: 28999,
        cutPrice: 39999,
        offer: "28% OFF",
      },
    ],
    iptv: [
      {
        id: 9,
        name: "Jio IPTV Box",
        dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
        img: "/img/iptv1.png",
        price: 1999,
        cutPrice: 2999,
        offer: "33% OFF",
      },
      {
        id: 10,
        name: "Airtel Xstream Box",
        dis: "Esaplling IPTV Service – Over 5000 Live Channels | HD & 4K Streaming | Multi-Device Support | WiFi & Ethernet Connectivity | Catch-up TV | Video on Demand | User-Friendly Interface | Compatible with Smart TVs, Android, iOS & Firestick | Secure & Reliable Streaming",
        img: "/img/iptv2.png",
        price: 2499,
        cutPrice: 3499,
        offer: "29% OFF",
      },
    ],
    interactivePanel: [
      {
        id: 11,
        name: "BenQ Interactive Panel",
        dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
        img: "/img/intractive1.png",
        price: 85000,
        cutPrice: 95000,
        offer: "11% OFF",
      },
      {
        id: 12,
        name: "Samsung Flip Board",
        dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
        img: "/img/intractive2.png",
        price: 92000,
        cutPrice: 105000,
        offer: "12% OFF",
      },
      {
        id: 13,
        name: "BenQ Interactive Panel",
        dis: "TouchPro Interactive Panel – 138 cm (55 inch) 4K UHD Display | 20-Point Multi-Touch | Android + Windows Dual OS Support | Built-in WiFi + LAN | HDMI x 2, USB x 3, Type-C | Anti-Glare Glass | Wireless Screen Sharing | Smart Pen Support | Ideal for Classrooms & Meetings",
        img: "/img/intractive3.png",
        price: 85000,
        cutPrice: 95000,
        offer: "11% OFF",
      },
    ],
    vds: [
      {
        id: 14,
        name: "LG VDS Display",
        dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
        img: "/img/vds2.png",
        price: 112000,
        cutPrice: 125000,
        offer: "10% OFF",
      },
      {
        id: 15,
        name: "LG VDS Display",
        dis: "VisionX VDS – 165 cm (65 inch) Professional Video Display System | 4K UHD Resolution | Ultra-Slim Bezel Design | HDMI x 3, USB x 2, DP, VGA | Wall Mount & Stand Compatible | Built-in Speakers | 24/7 Operation Ready | Anti-Glare Panel | Ideal for Control Rooms, Retail Signage & Conference Displays",
        img: "/img/vds3.png",
        price: 112000,
        cutPrice: 125000,
        offer: "10% OFF",
      },
    ],
    lfd: [
      {
        id: 16,
        name: 'Sony LFD 55"',
        dis: "ProView LFD – 190 cm (75 inch) Large Format Display | Ultra HD 4K Resolution | Slim Bezel Design | HDMI x 2, USB x 2, VGA, DP | High Brightness Panel (500 nits) | 24/7 Commercial-Grade Operation | Wall Mount Ready | Anti-Glare Coating | Ideal for Digital Signage, Retail, Airports & Corporate Environments",
        img: "/img/lfd1.jpg",
        price: 99000,
        cutPrice: 110000,
        offer: "10% OFF",
      },
    ],
    
   boardRoomSolution: [
      {
        id: 17,
        name: "Cisco Board Room Kit",
        dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
        img: "/img/board1.png",
        price: 120000,
        cutPrice: 140000,
        offer: "14% OFF",
      },
      {
        id: 18,
        name: "Poly Studio X50",
        dis: "EliteBoard Room Display Solution – 165 cm (65 inch) 4K UHD Touch Display | Dual OS (Android + Windows) | Wireless Screen Sharing | Smart Whiteboard | HDMI x 2, USB x 3, LAN | Built-in Camera & Mic (Optional) | Anti-Glare Panel | Seamless Video Conferencing | Ideal for Corporate Boardrooms & Meeting Halls",
        img: "/img/board2.png",
        price: 135000,
        cutPrice: 155000,
        offer: "13% OFF",
      },
    ],
  },
  "air-conditioners": {
    splitAC: [
      {
        id: 1,
        name: "ESPS3M12E003",
        dis: "Esaplling 2025 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC1.png",
        price: 35000,
        cutPrice: 42000,
        offer: "15% OFF",
      },
      {
        id: 2,
        name: "ESPS3M12E002",
        dis: "Esaplling Floral Series 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC2.png",
        price: 28000,
        cutPrice: 35000,
        offer: "20% OFF",
      },
       {
        id: 3,
        name: "ESPS3M12E001",
        dis: "Esaplling Standard Series 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC3.png",
        price: 28000,
        cutPrice: 35000,
        offer: "20% OFF",
      },
        {
        id: 4,
        name: "ESPS3INCM12E001",
        dis: "Esaplling Royal Series 1.0 to 2.0 Ton 3 Star Split Inverter AC – 4-in-1 Convertible with Turbo Cool Technology – White (Copper Condenser)",
        img: "/img/AC4.png",
        price: 28000,
        cutPrice: 35000,
        offer: "20% OFF",
      },
    ],
    VRF: [
      {
        id: 1,
        name: "ESAPS3W1E001",
        dis: "Esaplling ESAPS3W1E001 – 2025 1.0 Ton 3 Star Window AC – Copper Condenser, White",
        img: "/img/window.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
        id: 2,
        name: " ESP4PR0C1001",
        dis: "Esaplling ESP4PR0C1001 – 2025 VRF Air Conditioning System (3 Ton to 30 Ton) – High Efficiency, Copper Condenser, White",
        img: "/img/vrf.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 3,
        name: " ESP4PR0C1001",
        dis: "Esaplling ESP4PR0C1001 – 2025 VRF Air Conditioning System (3 Ton to 30 Ton) – High Efficiency, Copper Condenser, White",
        img: "/img/vrf2.jpg",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
    ],
     CHILLER: [
      {
        id: 1,
        name: "ESAPS3W1E001",
        dis: "The Esaplling Industrial Chiller is designed to deliver powerful and efficient cooling performance for commercial and industrial applications. With a simple yet robust structure, this chiller system is built for long-term reliability, reduced energy consumption, and easy maintenance.",
          img: "/img/chiller.jpg",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
     
    ],
  },
   "cooler": {
    volta: [
      {
        id: 1,
        name: "Tower Personnel",
        dis: "Esaplling 25 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler1.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
        id: 2,
        name: "Tower",
        dis: "Esaplling 40 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler1.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
       id: 3,
        name: "Tower",
        dis: "Esaplling 80 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler1.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
        {
        id: 4,
        name: "Thunder",
        dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler4.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
        id: 4,
        name: "Thunder",
        dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler4.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
        id: 4,
        name: "Thunder",
        dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler4.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
        id: 5,
        name: "Curvy",
        dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler1.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
      {
         id: 6,
        name: "Ultima",
        dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler6.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 7,
        name: "Tornado",
        dis: "Esaplling 63 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler7.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
          id: 8,
        name: "Elegance Plus",
        dis: "Esaplling 80 Litre Room/Personal Air Cooler  (White, Polar)",
        img: "/img/cooler8.png",
         price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
    ],
   
     Desert: [
      {
        id: 1,
        name: "Cool Plus",
        dis: "Esaplling Cool Plus is a 50-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler1.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Cool X",
        dis: "Esaplling Cool Plus is a 35-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler2.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Cyclone",
        dis: "Esaplling Cyclone is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler3.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Extreme",
        dis: "Esaplling Extreme is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler4.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Storm",
        dis: "Esaplling Storm is a 25-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler5.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Windy",
        dis: "Esaplling Windy is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler6.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Turbo",
        dis: "Esaplling Turbo is a 30-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler7.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
       {
        id: 1,
        name: "Smarty",
        dis: "Esaplling Turbo is a 35-litre powerful desert air cooler with 4-way air deflection, wall/window mount design, and energy-efficient cooling.",
          img: "/img/bigcooler8.png",
        price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
      },
     
    ],
  },
  "kitchen-appliances": [
    {
      id: 1,
      name: "Philips Mixer Grinder",
      dis: "Efficient mixer grinder with multiple jars.",
      img: "img/kitchen1.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
    {
      id: 2,
      name: "Butterfly Toaster",
      dis: "Durable toaster with adjustable browning.",
      img: "img/kitchen2.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
  ],
  refrigerators: [
    {
      id: 1,
      name: "ESAPLLING ESAPREF430",
      dis: "ESAPLLING 430 Litre Refrigerator (Model: ESAPREF430) with 780x740x1780 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge1.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
    {
      id: 2,
      name: "ESAPLLING ESAPREF430",
      dis: "ESAPLLING 430 Litre Refrigerator (Model: ESAPREF430) with 750x760x1780 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge2.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
    {
      id: 1,
      name: "ESAPLLING ESAPREF225",
      dis: "ESAPLLING 225  Litre Refrigerator (Model: ESAPREF225) with 565X675X1620 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge3.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
    {
      id: 2,
      name: "ESAPLLING ESAPREF225",
      dis: "ESAPLLING 225 Litre Litre Refrigerator (Model: ESAPREF225) with 550X645X1545 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge4.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
     {
      id: 2,
      name: "ESAPLLING ESAPREF220",
      dis: "ESAPLLING 220  Litre Litre Refrigerator (Model: ESAPREF220) with 540X665X1300 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge5.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
     {
      id: 3,
      name: "ESAPLLING ESAPREF240",
      dis: "ESAPLLING 240   Litre Litre Refrigerator (Model: ESAPREF240) with 540X665X1300 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge6.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
     {
      id: 2,
      name: "ESAPLLING ESAPREF170",
      dis: "ESAPLLING 170 Litre Refrigerator (Model: ESAPREF170) with 540X665X975 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge7.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
     {
      id: 2,
      name: "ESAPLLING ESAPREF100",
      dis: "ESAPLLING 100 Litre and 50   Litre Refrigerator (Model: ESAPREF100) with 455X510X845 mm dimensions – spacious and efficient cooling.",
      img: "/img/fridge8.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
    
  ],
washing: [
  {
    id: 1,
    name: "ESAPSATM1WM8000",
    dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM1WM8000) with compact 900x530x995 mm design for efficient home laundry.",
    img: "/img/washing1.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
  {
    id: 2,
    name: "ESAPSATM6WM8000",
    dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM6WM8000) with compact 900x535x990 mm design for efficient home laundry.",
    img: "/img/washing2.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
    {
    id: 3,
    name: "ESAPSATMWM6800",
    dis: "ESAPLLING 6.8 Kg Top Load Washing Machine (Model: ESAPSATMWM6800) with compact 840x510x965 mm design for efficient home laundry.",
    img: "/img/washing3.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
  {
    id: 4,
    name: "ESAPSATM7WM8000",
    dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM7WM8000) with compact 830X530x950 mm design for efficient home laundry.",
    img: "/img/washing4.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
   {
    id: 1,
    name: "ESAPSATM8WM7000",
    dis: "ESAPLLING 7 Kg Top Load Washing Machine (Model: ESAPSATM8WM7000) with compact 830X530x950 mm design for efficient home laundry.",
    img: "/img/washing5.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
  {
    id: 2,
    name: "ESAPSATM4WM8000",
    dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM1WM8000) with compact 900x530x1015 mm design for efficient home laundry.",
    img: "/img/washing6.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
    {
    id: 3,
    name: "ESAPSATM5WM7000",
    dis: "ESAPLLING 7 Kg Top Load Washing Machine (Model: ESAPSATM5WM7000) with compact 830X530x950 mm design for efficient home laundry.",
    img: "/img/washing7.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
  {
    id: 4,
    name: "ESAPSATM4WM7000",
    dis: "ESAPLLING 8 Kg Top Load Washing Machine (Model: ESAPSATM4WM7000) with compact 830X530x950 mm design for efficient home laundry.",
    img: "/img/washing8.png",
     price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
  },
   
],
  geysers: [
    {
      id: 1,
      name: "SCHNELL",
      dis: "Esaplling | Capacity: 8 Kg | Dimensions: 900×530×995 mm | Warranty: 1 Year | Color: White | Voltage: 230V | Max Rated Pressure: 5–10 Bar |  Frequency: 50 Hz AC | Power Input: 4500W",
      img: "/img/gyser1.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
    {
      id: 2,
      name: "JUMBO",
      dis: "Esaplling JUMBO | Capacity: 15–30 Ltr | Warranty: 1 Year | Color: White | Voltage: 230V | Max Rated Pressure: 5–10 Bar | Frequency: 50 Hz AC | Power Input: 4500W",
      img: "/img/gyser2.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
     {
      id: 2,
      name: "SPRERO",
      dis: "Esaplling SPRERO | Capacity: 6–60 Ltr | Warranty: 1 Year | Color: White | Voltage: 230V | Max Rated Pressure: 5–10 Bar | Frequency: 50 Hz AC | Power Input: 4500W",
      img: "/img/gyser3.png",
       price: 15000,
        cutPrice: 18000,
        offer: "17% OFF",
    },
  ],
};

// 🔧 Updated function with full forms
const formatSubCategoryName = (str) => {
  const mapping = {
    LED: "LED",
    iptv: "IPTV",
    interactivePanel: "Interactive Panel",
    vds: "Video Display System",
    lfd: "Large Format Display",
     splitAC: "Split AC",
    windowAC: "Window AC",
    CHILLER: "CHILLER",
    volta:"cooler",
     Desert:"new desert",
        
   

  };

  if (mapping[str]) return mapping[str];

  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};

// ProductCard component
const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const maxLength = 100;

  const description = product.dis || "";
  const shouldTruncate = description.length > maxLength;
  const displayedDescription = expanded
    ? description
    : description.slice(0, maxLength);

  return (
    <div className="p-3 sm:p-4 rounded-lg bg-white ">
      <div className="aspect-[4/3] mb-2">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain rounded"
        />
      </div>
      <h2 className="font-medium text-sm sm:text-base leading-snug line-clamp-2">
        {product.name}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-black mt-1 cursor-pointer text-justify">
          {displayedDescription}
          {shouldTruncate && !expanded && "..."}
          {shouldTruncate && (
            <button
              onClick={toggleExpanded}
              className="text-blue-600 ml-1 underline text-xs sm:text-sm"
              aria-label={expanded ? "Read less" : "Read more"}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      )}
      <div className="mt-2 flex items-center flex-wrap gap-2">
        {product.price && (
          <span className="text-green-600 font-semibold text-sm sm:text-base">
            ₹{product.price.toLocaleString()}
          </span>
        )}
        {product.cutPrice && (
          <span className="text-gray-500 line-through text-sm sm:text-base">
            ₹{product.cutPrice.toLocaleString()}
          </span>
        )}
        {product.offer && (
          <span className="text-red-500 font-semibold text-xs sm:text-sm">
            {product.offer}
          </span>
        )}
      </div>
    </div>
  );
};

// Main ProductPage component
function ProductPage() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
  const { category } = useParams();
  const categoryData = productsData[category];

  // Check if categoryData is object with subcategories (like televisions, air-conditioners)
  const isSubCategoryObject =
    categoryData &&
    !Array.isArray(categoryData) &&
    Object.values(categoryData).every((val) => Array.isArray(val));

  return (
    <div className="pt-20 px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      {/* Your Navbar component */}
      <YourComponent />
        {/* 🆕 Background image section */}
      <Background category={category} />

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold capitalize mb-6">
        {category.replace(/-/g, " ")}
      </h1>

      {/* Product Grid Rendering */}
      {categoryData ? (
        isSubCategoryObject ? (
          Object.entries(categoryData).map(([subCategory, products]) => (
            <div key={subCategory} className="mb-10">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {formatSubCategoryName(subCategory)}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))
        ) : Array.isArray(categoryData) && categoryData.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryData.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base">No products found for this category.</p>
        )
      ) : (
        <p className="text-sm sm:text-base">Category not found.</p>
      )}
      <Ac Ac="Esaplling"/>
    </div>
    
  );
}

export default ProductPage;

