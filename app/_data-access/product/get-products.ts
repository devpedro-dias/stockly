import "server-only";

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";
// import { unstable_cache } from "next/cache";

export const getProducts = async (): Promise<Product[]> => {
  return await db.product.findMany({});
};

// Caching with unstable_cache
// export const cachedGetProducts = unstable_cache(getProducts, ["get-products"], {
//   revalidate: 5,
// });
