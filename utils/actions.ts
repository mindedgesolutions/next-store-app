"use server";

import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Helper functions start ------
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};
// Helper functions end ------

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

export const fetchAdminProducts = async () => {
  const clerkId = process.env.NEXT_PUBLIC_ADMIN;
  const response = await db.product.findMany({
    where: {
      clerkId: clerkId,
    },
  });
  return response;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ title?: string; message: string }> => {
  return { title: "Created", message: "OK" };
};
