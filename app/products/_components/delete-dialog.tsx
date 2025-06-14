import { deleteProduct } from "@/app/_actions/product/delete-product";
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

interface DeleteProductDialogContentProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: DeleteProductDialogContentProps) => {
  const { execute: executeDeleteProduct, status } = useAction(deleteProduct, {
    onSuccess: () => {
      toast.success("Produto deletado com sucesso.");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao excluir o produto.");
    },
  });

  const handleContinueClick = () => executeDeleteProduct({ id: productId });
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Você tem certeza que deseja continuar?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a deletar um produto. Esta ação não pode ser
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

export default DeleteProductDialogContent;
