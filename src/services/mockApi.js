const getDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        metrics: {
          totalSales: 45280.50,
          ordersCount: 342,
          conversionRate: 3.2,
          avgOrderValue: 132.40,
        },
        salesHistory: [
          { month: 'Ene', ventas: 4000, pedidos: 240 },
          { month: 'Feb', ventas: 3000, pedidos: 198 },
          { month: 'Mar', ventas: 5000, pedidos: 305 },
          { month: 'Abr', ventas: 8780, pedidos: 420 },
          { month: 'May', ventas: 9890, pedidos: 480 },
          { month: 'Jun', ventas: 13900, pedidos: 590 },
        ],
        topProducts: [
          { id: 1, name: 'Camiseta Lino Beige', category: 'Moda', sales: 142, revenue: 4260 },
          { id: 2, name: 'Blazer Oversized', category: 'Moda', sales: 98, revenue: 8820 },
          { id: 3, name: 'Perfume Rosa Minimal', category: 'Belleza', sales: 85, revenue: 5950 },
          { id: 4, name: 'Bolso Piel Cognac', category: 'Accesorios', sales: 64, revenue: 7680 },
        ]
      });
    }, 500);
  });
};

export default getDashboardData;