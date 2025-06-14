"use client";

import { Button } from "@/app/_components/ui/button";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { ProductDto } from "@/app/_data-access/product/get-products";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import UpsertSheetContent from "./upsert-sheet-content";

interface CreateSaleButtonProps {
  products: ProductDto[];
  productOptions: ComboboxOption[];
}

const CreateSaleButton = ({
  products,
  productOptions,
}: CreateSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button>
          <PlusIcon />
          Nova Venda
        </Button>
      </SheetTrigger>
      <UpsertSheetContent
        isOpen={sheetIsOpen}
        products={products}
        productOptions={productOptions}
        setSheetIsOpen={setSheetIsOpen}
      />
    </Sheet>
  );
};

export default CreateSaleButton;
