import { db } from "@/app/_lib/prisma";
import { NextRequest } from "next/server";

// Dynamic handlers reference
// GET (Query params method)

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");
  console.log(query);

  const { id: productId } = await params;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return Response.json(
      { message: "Produto não encontrado" },
      {
        status: 404,
      },
    );
  }

  return Response.json(product, {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: productId } = await params;
  const product = await db.product.delete({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return Response.json(
      { message: "Produto não encontrado" },
      {
        status: 404,
      },
    );
  }

  return Response.json(product, {
    status: 200,
  });
}
