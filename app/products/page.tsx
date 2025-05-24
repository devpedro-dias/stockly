import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { columns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-1 h-full w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">Produtos</span>
          <h1 className="text-2xl font-bold">Gestão de produtos</h1>
        </div>

        <Button>
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
