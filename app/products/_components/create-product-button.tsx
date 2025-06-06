"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import { PlusIcon } from "lucide-react";

import { useState } from "react";
import UpsertProductDialogContent from "./upsert-dialog-content";

const CreateProductButton = () => {
  const [isDialogIsOpen, setIsDialogIsOpen] = useState(false);

  return (
    <Dialog open={isDialogIsOpen} onOpenChange={setIsDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent setDialogIsOpen={setIsDialogIsOpen} />
    </Dialog>
  );
};

export default CreateProductButton;
