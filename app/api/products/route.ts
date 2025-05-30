import { db } from "@/app/_lib/prisma";

// Just for reference

export async function GET() {
  const products = await db.product.findMany({});
  const randomNumber = Math.random();
  return Response.json(
    { products, randomNumber },
    {
      status: 200,
    },
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  const name = body.name;
  const price = body.price;
  const stock = body.stock;

  const product = await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });

  return Response.json(product, {
    status: 201,
  });
}
