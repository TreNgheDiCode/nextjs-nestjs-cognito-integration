"use client";

import EmptyCell from "./emptyCell";

export default function CurrencyCell({
  title,
  value,
}: {
  title?: string;
  value?: number;
}) {
  if (value === undefined) return <EmptyCell />;

  return (
    <div
      className="inline-flex items-center justify-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
      aria-label={title}
    >
      <span className="sr-only">{title}</span>
      <span aria-hidden="true" className="flex items-center space-x-1">
        <span className="font-bold">$</span>
        <span className="tracking-wider">{value.toLocaleString()}</span>
      </span>
    </div>
  );
}
