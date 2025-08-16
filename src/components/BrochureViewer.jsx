import React from "react";
import { Document, Page } from "react-pdf";
import brochure1 from "../assets/EsapllingBroucher.pdf";
// import brochure2 from "../assets/brochure2.pdf";
// import brochure3 from "../assets/brochure3.pdf";
// import brochure4 from "../assets/brochure4.pdf";
// import brochure5 from "../assets/brochure5.pdf";

const brochures = [
  { id: 1, file: brochure1, title: "Brochure 1" },
//   { id: 2, file: brochure2, title: "Brochure 2" },
//   { id: 3, file: brochure3, title: "Brochure 3" },
//   { id: 4, file: brochure4, title: "Brochure 4" },
//   { id: 5, file: brochure5, title: "Brochure 5" },
];

const BrochureViewer = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {brochures.map((brochure) => (
        <div key={brochure.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-lg font-bold text-center py-2">{brochure.title}</h2>
          <div className="w-full h-96 overflow-auto">
            <Document file={brochure.file}>
              <Page pageNumber={1} width={400} />
            </Document>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrochureViewer;
