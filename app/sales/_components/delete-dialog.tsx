import { deleteSale } from "@/app/_actions/sale/create-sale/delete-sale";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { Loader2Icon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface DeleteSaleDialogContentProps {
  saleId: string;
}

const DeleteSaleDialogContent = ({ saleId }: DeleteSaleDialogContentProps) => {
  const { execute: executeDeleteSale, status } = useAction(deleteSale, {
    onSuccess: () => {
      toast.success("Venda deletada com sucesso.");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao excluir a venda.");
    },
  });

  const handleContinueClick = () => executeDeleteSale({ id: saleId });
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Você tem certeza que deseja continuar?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a deletar uma venda. Esta ação não pode ser
          desfeita.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleContinueClick}
          disabled={status === "executing"}
        >
          {status === "executing" && (
            <Loader2Icon className="animate-spin" size={16} />
          )}
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteSaleDialogContent;
