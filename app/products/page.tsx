import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";

import CreateProductButton from "./_components/create-product-button";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-1 h-full w-full space-y-8 overflow-hidden rounded-lg bg-white p-8">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">Produtos</span>
          <h1 className="text-2xl font-bold">Gestão de produtos</h1>
        </div>

        <CreateProductButton />
      </div>

      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
