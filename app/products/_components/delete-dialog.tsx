import { deleteProduct } from "@/app/_actions/product/delete-product";
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteProductDialogContentProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: DeleteProductDialogContentProps) => {
  const handleContinueClick = async () => {
    try {
      await deleteProduct({ id: productId });
      toast.success("Produto deletado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar o produto.");
    }
  };
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
        <AlertDialogAction onClick={handleContinueClick}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductDialogContent;
