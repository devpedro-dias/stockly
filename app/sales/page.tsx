import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import CreateSaleButton from "./_components/create-sale-button";
import { saleTableColumns } from "./_components/table-columns";

const SalesPage = async () => {
  // If there are many products, it is not feasible to make this request on the server, as it will overload it, so the correct thing to do would be to add pagination to the product display, this would be more or less feasible, but it is acceptable.
  const sales = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));
  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Vendas</HeaderSubtitle>

          <HeaderTitle>Vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateSaleButton
            productOptions={productOptions}
            products={products}
          />
        </HeaderRight>
      </Header>

      <DataTable columns={saleTableColumns} data={tableData} />
    </div>
  );
};

export default SalesPage;
