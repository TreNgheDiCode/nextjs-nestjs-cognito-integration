"use client";

import { Badge } from "@/components/ui/badge";
import EmptyCell from "./emptyCell";

function SingleBadgeCell({ value }: { value?: string }) {
  if (!value) return <EmptyCell />;

  return <Badge className="text-sm rounded-md font-Poppins">{value}</Badge>;
}

function MultiBadgeCell({ value }: { value?: string[] }) {
  if (!value || !value.length) return <EmptyCell />;

  return (
    <div className="flex items-center gap-2.5">
      {value.map((status) => (
        <Badge key={status} className="text-sm rounded-md font-Poppins">
          {status}
        </Badge>
      ))}
    </div>
  );
}

export { SingleBadgeCell, MultiBadgeCell };
