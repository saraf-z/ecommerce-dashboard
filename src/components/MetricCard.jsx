import React from 'react';

const MetricCard = ({ title, value, icon: Icon, change, isIncrease }) => {
  return (
   <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{title}</span>
        {Icon && (
          <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        {change && (
          <p className={`text-xs font-semibold mt-2 flex items-center gap-1 ${
            isIncrease ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            <span>{isIncrease ? '↑' : '↓'}</span>
            <span>{change} vs mes anterior</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default MetricCard;