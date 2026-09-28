import React, { useEffect, useState } from 'react';
import { DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react';
import getDashboardData from './services/mockApi';
import MetricCard from './components/MetricCard';
import TopProductsTable from './components/TopProductsTable';
import { SalesChart } from './components/SalesChart'

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 font-medium animate-pulse">Cargando métricas del dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">E-commerce Analytics</h1>
          <p className="text-gray-500 mt-1">Resumen de ventas y rendimiento del negocio</p>
        </header>

        {/* Tarjetas de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Ventas Totales"
            value={`${data.metrics.totalSales.toLocaleString('es-ES')} €`}
            icon={DollarSign}
            change="12%"
            isIncrease={true}
          />
          <MetricCard
            title="Pedidos"
            value={data.metrics.ordersCount}
            icon={ShoppingBag}
            change="8%"
            isIncrease={true}
          />
          <MetricCard
            title="Tasa de Conversión"
            value={`${data.metrics.conversionRate}%`}
            icon={TrendingUp}
            change="0.5%"
            isIncrease={false}
          />
          <MetricCard
            title="Ticket Medio"
            value={`${data.metrics.avgOrderValue} €`}
            icon={Users}
            change="3%"
            isIncrease={true}
          />
        </div>

        {/* Gráfico principal */}
        <SalesChart data={data.salesHistory} />

        {/* Tabla de Productos Top */}
        <TopProductsTable products={data.topProducts} />
      </div>
    </div>
  );
}