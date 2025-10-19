import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

import { Card, CardContent } from './card';

interface StatCardProps {
  title: string;
  value: string | number | undefined;
  icon: React.ReactNode;
  change?: number;
  iconColor: string;
}

const StatCard = ({ title, value, icon, change, iconColor }: StatCardProps) => {
  const changeColor =
    change && change > 1
      ? 'text-green-500 bg-green-100'
      : 'text-primary-4  bg-text-primary-4/10';
  const changeIcon =
    change && change > 1 ? (
      <TrendingUp className="h-2 w-2 2xl:h-4 2xl:w-4" />
    ) : (
      <TrendingDown className="h-2 w-2 2xl:h-4 2xl:w-4" />
    );

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex items-center gap-4 p-4 2xl:p-6">
        <div
          className={`rounded-xl p-3 ${iconColor} text-primary-4 fill-primary-4 bg-red-100 text-2xl`}
        >
          {icon}
        </div>

        <div>
          <p className="text-muted-foreground text-xs font-normal 2xl:text-sm">
            {title}
          </p>
          <div className={'mt-2 flex items-center gap-4'}>
            <h3 className="font-bold 2xl:text-2xl">{value}</h3>
            {change && (
              <p
                className={`flex h-fit items-center rounded-lg px-2 py-1 text-xs font-medium ${changeColor}`}
              >
                {changeIcon}
                {Math.abs(change)}%
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { StatCard };
