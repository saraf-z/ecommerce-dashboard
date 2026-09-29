import React from 'react';

export default function TopProductsTable({ products }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-4">Productos más vendidos</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">Producto</th>
              <th className="py-3 px-4">Categoría</th>
              <th className="py-3 px-4">Ventas</th>
              <th className="py-3 px-4">Ingresos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4">{item.sales} uds</td>
                <td className="py-3 px-4 font-semibold text-slate-900">{item.revenue} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}