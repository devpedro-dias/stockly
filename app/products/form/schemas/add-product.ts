import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O Nome do produto é obrigatório",
  }),
  price: z.number().min(0.01, {
    message: "O Preço do produto é obrigatório",
  }),
  stock: z.coerce
    .number()
    .positive({
      message: "A quantidade em estoque deve ser positiva",
    })
    .int()
    .min(1, {
      message: "A quantidade em estoque é obrigatório",
    }),
});
