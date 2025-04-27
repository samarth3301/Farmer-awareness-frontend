import React from 'react';

interface ComparisonItem {
  name: string;
  harmful: string[];
  useful: string[];
}

interface ComparisonTableProps {
  items: ComparisonItem[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="px-4 py-3 text-left border border-green-800">Pesticide Type</th>
            <th className="px-4 py-3 text-left border border-green-800">Harmful Effects</th>
            <th className="px-4 py-3 text-left border border-green-800">Beneficial Uses</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr 
              key={index} 
              className={index % 2 === 0 ? 'bg-white' : 'bg-green-50'}
            >
              <td className="px-4 py-3 border border-gray-200 font-medium">{item.name}</td>
              <td className="px-4 py-3 border border-gray-200">
                <ul className="list-disc pl-5 space-y-1">
                  {item.harmful.map((effect, i) => (
                    <li key={i} className="text-red-700">{effect}</li>
                  ))}
                </ul>
              </td>
              <td className="px-4 py-3 border border-gray-200">
                <ul className="list-disc pl-5 space-y-1">
                  {item.useful.map((benefit, i) => (
                    <li key={i} className="text-green-700">{benefit}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;