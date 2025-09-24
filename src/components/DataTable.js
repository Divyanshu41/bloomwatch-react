import React from "react";

function DataTable({ bloomingData }) {
  const { months, blooming, temperature, rainfall } = bloomingData;

  return (
    <table className="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Month</th>
          <th className="border border-gray-400 px-4 py-2">Blooming Intensity</th>
          <th className="border border-gray-400 px-4 py-2">Temperature (°C)</th>
          <th className="border border-gray-400 px-4 py-2">Rainfall (mm)</th>
        </tr>
      </thead>
      <tbody>
        {months.map((month, i) => (
          <tr key={i} className="text-center">
            <td className="border border-gray-400 px-4 py-2">{month}</td>
            <td className="border border-gray-400 px-4 py-2">{blooming[i]}</td>
            <td className="border border-gray-400 px-4 py-2">{temperature[i]}</td>
            <td className="border border-gray-400 px-4 py-2">{rainfall[i]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
