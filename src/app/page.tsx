"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/dashboard/header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { 
  RevenueChart, 
  ChannelPerformanceChart, 
  DeviceDistributionChart,
  MultiMetricChart 
} from "@/components/dashboard/charts";
import { DataTable } from "@/components/dashboard/data-table";
import { 
  MetricCardSkeleton, 
  ChartSkeleton, 
  TableSkeleton 
} from "@/components/dashboard/loading-skeleton";
import { mockMetrics, generateRealTimeData } from "@/lib/mock-data";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Home() {
  const [metrics, setMetrics] = useState(mockMetrics);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const realTimeData = generateRealTimeData();
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => {
          switch (metric.id) {
            case '1':
              return { ...metric, value: `$${realTimeData.revenue.toLocaleString()}` };
            case '2':
              return { ...metric, value: realTimeData.users.toLocaleString() };
            case '3':
              return { ...metric, value: realTimeData.conversions.toLocaleString() };
            case '4':
              return { ...metric, value: `${realTimeData.growth}%` };
            default:
              return metric;
          }
        })
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const realTimeData = generateRealTimeData();
    setMetrics(prevMetrics => 
      prevMetrics.map(metric => {
        switch (metric.id) {
          case '1':
            return { ...metric, value: `$${realTimeData.revenue.toLocaleString()}` };
          case '2':
            return { ...metric, value: realTimeData.users.toLocaleString() };
          case '3':
            return { ...metric, value: realTimeData.conversions.toLocaleString() };
          case '4':
            return { ...metric, value: `${realTimeData.growth}%` };
          default:
            return metric;
        }
      })
    );
    
    setIsRefreshing(false);
  };

  const handleExport = async () => {
    const element = document.getElementById('dashboard-content');
    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('admybrand-insights-dashboard.pdf');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header onRefresh={handleRefresh} isRefreshing={isRefreshing} onExport={handleExport} />
      
      <main id="dashboard-content" className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back! 👋</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your campaigns today.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            [...Array(4)].map((_, i) => (
              <MetricCardSkeleton key={i} />
            ))
          ) : (
            metrics.map((metric, index) => (
              <MetricCard 
                key={metric.id} 
                metric={metric}
                className={`animate-in slide-in-from-bottom-4 duration-700 ${
                  index === 0 ? 'delay-0' : 
                  index === 1 ? 'delay-150' : 
                  index === 2 ? 'delay-300' : 'delay-450'
                }`}
              />
            ))
          )}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {isLoading ? (
            [...Array(4)].map((_, i) => (
              <ChartSkeleton key={i} />
            ))
          ) : (
            <>
              <div className="animate-in slide-in-from-left-4 duration-700 delay-600">
                <RevenueChart />
              </div>
              <div className="animate-in slide-in-from-right-4 duration-700 delay-750">
                <ChannelPerformanceChart />
              </div>
              <div className="animate-in slide-in-from-left-4 duration-700 delay-900">
                <DeviceDistributionChart />
              </div>
              <div className="animate-in slide-in-from-right-4 duration-700 delay-1050">
                <MultiMetricChart />
              </div>
            </>
          )}
        </div>

        {/* Data Table */}
        <div className={`${isLoading ? '' : 'animate-in slide-in-from-bottom-4 duration-700 delay-1200'}`}>
          {isLoading ? (
            <TableSkeleton />
          ) : (
            <DataTable />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-muted-foreground border-t">
          <p>© 2024 ADmyBRAND Insights. Built with Next.js, shadcn/ui, and Recharts.</p>
        </footer>
      </main>
    </div>
  );
}
