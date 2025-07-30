export interface MetricData {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  revenue?: number;
  users?: number;
  conversions?: number;
}

export interface TableRow {
  id: string;
  campaign: string;
  revenue: number;
  users: number;
  conversions: number;
  ctr: number;
  status: 'active' | 'paused' | 'completed';
  date: string;
}

export const mockMetrics: MetricData[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$847,329',
    change: 12.5,
    trend: 'up',
    icon: 'revenue'
  },
  {
    id: '2',
    title: 'Active Users',
    value: '24,847',
    change: 8.2,
    trend: 'up',
    icon: 'users'
  },
  {
    id: '3',
    title: 'Conversions',
    value: '3,247',
    change: -2.1,
    trend: 'down',
    icon: 'conversions'
  },
  {
    id: '4',
    title: 'Growth Rate',
    value: '18.4%',
    change: 5.3,
    trend: 'up',
    icon: 'growth'
  }
];

export const lineChartData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 45000, users: 2400, conversions: 240 },
  { name: 'Feb', revenue: 52000, users: 2800, conversions: 290 },
  { name: 'Mar', revenue: 48000, users: 2600, conversions: 260 },
  { name: 'Apr', revenue: 61000, users: 3200, conversions: 340 },
  { name: 'May', revenue: 55000, users: 2900, conversions: 310 },
  { name: 'Jun', revenue: 67000, users: 3500, conversions: 380 },
  { name: 'Jul', revenue: 72000, users: 3800, conversions: 420 },
  { name: 'Aug', revenue: 69000, users: 3600, conversions: 390 },
  { name: 'Sep', revenue: 78000, users: 4100, conversions: 450 },
  { name: 'Oct', revenue: 84000, users: 4400, conversions: 480 },
  { name: 'Nov', revenue: 79000, users: 4200, conversions: 460 },
  { name: 'Dec', revenue: 91000, users: 4800, conversions: 520 }
];

export const barChartData: ChartDataPoint[] = [
  { name: 'Social Media', value: 2400 },
  { name: 'Email Marketing', value: 1800 },
  { name: 'Google Ads', value: 3200 },
  { name: 'Content Marketing', value: 1200 },
  { name: 'SEO', value: 2800 },
  { name: 'Influencer', value: 1600 }
];

export const donutData: ChartDataPoint[] = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 20 }
];

export const tableData: TableRow[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    revenue: 45720,
    users: 2840,
    conversions: 342,
    ctr: 3.2,
    status: 'active',
    date: '2024-07-15'
  },
  {
    id: '2',
    campaign: 'Back to School',
    revenue: 32450,
    users: 1890,
    conversions: 234,
    ctr: 2.8,
    status: 'active',
    date: '2024-07-10'
  },
  {
    id: '3',
    campaign: 'Holiday Special',
    revenue: 67890,
    users: 4210,
    conversions: 567,
    ctr: 4.1,
    status: 'paused',
    date: '2024-07-05'
  },
  {
    id: '4',
    campaign: 'New Product Launch',
    revenue: 23450,
    users: 1560,
    conversions: 189,
    ctr: 2.4,
    status: 'completed',
    date: '2024-06-28'
  },
  {
    id: '5',
    campaign: 'Brand Awareness',
    revenue: 18670,
    users: 2340,
    conversions: 145,
    ctr: 1.9,
    status: 'active',
    date: '2024-06-20'
  }
];

// Real-time data generation
export function generateRealTimeData() {
  const baseRevenue = 847329;
  const baseUsers = 24847;
  const baseConversions = 3247;
  const baseGrowth = 18.4;

  return {
    revenue: Math.floor(baseRevenue + (Math.random() - 0.5) * 50000),
    users: Math.floor(baseUsers + (Math.random() - 0.5) * 2000),
    conversions: Math.floor(baseConversions + (Math.random() - 0.5) * 200),
    growth: parseFloat((baseGrowth + (Math.random() - 0.5) * 5).toFixed(1))
  };
}
