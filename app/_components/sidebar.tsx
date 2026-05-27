import {
  LayoutDashboardIcon,
  PackageIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import SidebarButton from "./sidebar-button";
import { ThemeToggle } from "./theme-toggle";

const Sidebar = () => {
  return (
    <div className="flex w-64 flex-col border-r bg-card">
      <div>
        <h1 className="px-8 py-6 text-2xl font-bold">STOCKLY</h1>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutDashboardIcon size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>

      <div className="border-t p-2">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
