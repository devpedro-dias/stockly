import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.saleProduct.deleteMany();
  await prisma.sale.deleteMany();
  await prisma.product.deleteMany();

  const products = await Promise.all([
    prisma.product.create({
      data: { name: "Notebook Dell Inspiron 15", price: 3499.99, stock: 12 },
    }),
    prisma.product.create({
      data: { name: "Mouse Logitech MX Master 3", price: 499.90, stock: 35 },
    }),
    prisma.product.create({
      data: { name: "Teclado Mecânico Redragon Kumara", price: 249.90, stock: 28 },
    }),
    prisma.product.create({
      data: { name: "Monitor LG UltraWide 29\"", price: 1899.00, stock: 8 },
    }),
    prisma.product.create({
      data: { name: "Headset HyperX Cloud II", price: 399.90, stock: 20 },
    }),
    prisma.product.create({
      data: { name: "Webcam Logitech C920", price: 349.90, stock: 15 },
    }),
    prisma.product.create({
      data: { name: "SSD Kingston 480GB", price: 259.90, stock: 42 },
    }),
    prisma.product.create({
      data: { name: "Cadeira Gamer ThunderX3", price: 1299.00, stock: 5 },
    }),
    prisma.product.create({
      data: { name: "Hub USB-C Baseus 7 em 1", price: 189.90, stock: 50 },
    }),
    prisma.product.create({
      data: { name: "Mousepad Gamer Extra Grande", price: 79.90, stock: 60 },
    }),
  ]);

  const today = new Date();
  const sales = [];

  for (let i = 0; i < 20; i++) {
    const daysAgo = Math.floor(Math.random() * 14);
    const saleDate = new Date(today);
    saleDate.setDate(saleDate.getDate() - daysAgo);
    saleDate.setHours(
      Math.floor(Math.random() * 12) + 8,
      Math.floor(Math.random() * 60),
      0,
      0,
    );

    const numProducts = Math.floor(Math.random() * 3) + 1;
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, numProducts);

    const sale = await prisma.sale.create({
      data: {
        date: saleDate,
        saleProducts: {
          create: selectedProducts.map((p) => ({
            productId: p.id,
            unitPrice: p.price,
            quantity: Math.floor(Math.random() * 5) + 1,
          })),
        },
      },
    });

    sales.push(sale);
  }

  console.log(`Seed concluido: ${products.length} produtos e ${sales.length} vendas criados.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
