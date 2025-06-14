import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";

import CreateProductButton from "./_components/create-product-button";
import { productTableColumns } from "./_components/table-columns";

// Essa página será montada uma vez e reutilizada (SSG), podendo ser incrementada de forma regenerativa (ISR)
export const dynamic = "force-static";
export const revalidate = 10;

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>

          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>

      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
