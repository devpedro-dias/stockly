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

// Caching with revalidateTag
// export const cachedGetProducts = unstable_cache(getProducts, ["getProducts"], {
//   tags: ["get-products"], is used to revalidate cache when revalidateTag is called passing the tag
//   revalidate: 5,
// });
