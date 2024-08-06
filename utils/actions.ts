"use server";

import db from "@/utils/db";
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return response;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  const response = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
};

export const fetchSingleProduct = async (productId: string) => {
  const response = await db.product.findFirst({
    where: {
      id: productId,
    },
  });
  if (!response) redirect(`/products`);
  return response;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ title?: string; message: string }> => {
  return { title: "Created", message: "OK" };
};
