"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  }
  return "Sem estoque";
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor Unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      // @ts-expect-error - status is a string
      const label = getStatusLabel(product.status);

      return (
        <Badge
          // @ts-expect-error - status is a string
          variant={product.status === "IN_STOCK" ? "default" : "outline"}
          className="gap-2"
        >
          <CircleIcon
            size={10}
            className={
              // @ts-expect-error - status is a string
              product.status === "Em estoque"
                ? "fill-primary-foreground"
                : "fill-destructive-foreground"
            }
          />
          {label}
        </Badge>
      );
    },
  },
];
