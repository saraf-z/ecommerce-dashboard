import React from 'react';

const TopProductsTable = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Productos más vendidos</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase">
              <th className="py-3 px-4">Producto</th>
              <th className="py-3 px-4">Categoría</th>
              <th className="py-3 px-4 text-right">Ventas</th>
              <th className="py-3 px-4 text-right">Ingresos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
                <td className="py-3 px-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                    {product.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-gray-600">{product.sales} uds</td>
                <td className="py-3 px-4 text-right font-semibold text-gray-900">
                  {product.revenue.toLocaleString('es-ES')} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsTable;