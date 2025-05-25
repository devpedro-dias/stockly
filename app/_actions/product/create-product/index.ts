"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { CreateProductSchema, createProductsSchema } from "./schema";

export const createProducts = async (data: CreateProductSchema) => {
  await createProductsSchema.parseAsync(data);
  await db.product.create({
    data: {
      name: data.name,
      price: data.price,
      stock: data.stock,
    },
  });

  revalidatePath("/products");
};
