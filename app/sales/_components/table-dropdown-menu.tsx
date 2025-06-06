import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Sale } from "@prisma/client";
import {
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import { toast } from "sonner";
import DeleteSaleDialogContent from "./delete-dialog";

interface SalesTableDropDownMenuProps {
  sale: Pick<Sale, "id">;
}

const SalesTableDropDownMenu = ({ sale }: SalesTableDropDownMenuProps) => {
  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(sale.id);
    toast.success("ID copiado para área de transferência.");
  };
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MoreHorizontalIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="gap-1.5"
            onClick={() => handleCopyToClipboardClick}
          >
            <ClipboardCopyIcon size={16} />
            Copiar ID
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-1.5">
            <EditIcon size={16} />
            Editar
          </DropdownMenuItem>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="gap-1.5">
              <TrashIcon size={16} />
              Deletar
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteSaleDialogContent saleId={sale.id} />
    </AlertDialog>
  );
};

export default SalesTableDropDownMenu;
