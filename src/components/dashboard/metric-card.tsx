import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Target, 
  BarChart3 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricData } from "@/lib/mock-data";

interface MetricCardProps {
  metric: MetricData;
  className?: string;
}

const iconMap = {
  revenue: DollarSign,
  users: Users,
  conversions: Target,
  growth: BarChart3,
};

export function MetricCard({ metric, className }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || BarChart3;
  const isPositive = metric.trend === 'up';

  return (
    <Card className={cn("relative overflow-hidden transition-all hover:shadow-lg", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {metric.title}
        </CardTitle>
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center",
          metric.icon === 'revenue' && "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
          metric.icon === 'users' && "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
          metric.icon === 'conversions' && "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
          metric.icon === 'growth' && "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400"
        )}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="text-2xl font-bold">{metric.value}</div>
        <div className="flex items-center space-x-1 text-xs">
          <Badge 
            variant={isPositive ? "default" : "destructive"}
            className={cn(
              "h-5 px-1 text-xs",
              isPositive ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300" : ""
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            {Math.abs(metric.change)}%
          </Badge>
          <span className="text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
