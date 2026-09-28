import React from 'react';

const MetricCard = ({ title, value, icon: Icon, change, isIncrease }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
        {change && (
          <p className={`text-xs font-semibold mt-2 ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
            {isIncrease ? '↑' : '↓'} {change} vs mes anterior
          </p>
        )}
      </div>
      {Icon && (
        <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default MetricCard;