"use client";

import { useGetLoanApplications } from "@/apis/resources/loans/gets/hooks/useGetLoanApplications";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LoanStatus } from "@/types/loans";
import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

export default function DemoLoansChart() {
  const {
    data: loansData,
    isLoading,
    isFetched,
  } = useGetLoanApplications({}, { rowsPerPage: 50 });

  const flatData = useMemo(() => {
    if (!loansData) return [];
    return loansData?.pages.flat(2);
  }, [loansData]);

  const loansTotalByStatusArray = useMemo(() => {
    const loansByStatus = Object.entries(
      flatData.reduce<Record<LoanStatus, number>>((acc, loan) => {
        const status = loan.status;
        acc[status] = acc[status] ? acc[status] + 1 : 1;
        return acc;
      }, {} as Record<LoanStatus, number>)
    ).map(([status, count]) => ({
      status, // Include the status name
      [`${status}_count`]: count, // Dynamic count property
    }));

    return loansByStatus;
  }, [flatData]);

  if (isLoading || !isFetched) {
    return (
      <div className="flex gap-2">
        {[...new Array(4)].map((_, idx) => (
          <div
            key={"first " + idx}
            className="h-full w-full rounded  bg-gray-200 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  const chartConfig = {
    new_count: {
      label: "New",
      color: "#FFC107",
    },
    funded_count: {
      label: "Funded",
      color: "#4CAF50",
    },
    applied_count: {
      label: "Applied",
      color: "#2196F3",
    },
    "final doc signed_count": {
      label: "Final Doc Signed",
      color: "#9C27B0",
    },
    incomplete_count: {
      label: "Incomplete",
      color: "#F44336",
    },
    assigned_count: {
      label: "Assigned",
      color: "#FF5722",
    },
  } as ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={loansTotalByStatusArray}>
        <CartesianGrid vertical={false} stroke="#E0E0E0" />
        <YAxis />
        <XAxis
          dataKey="status"
          tickLine={false}
          tickMargin={10}
          className="capitalize"
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label || value
          }
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.entries(chartConfig).map(([key, { color }]) => (
          <Bar
            key={key}
            dataKey={key}
            fill={color}
            radius={4}
            stackId="count"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}
