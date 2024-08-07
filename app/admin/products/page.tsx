import EmptyList from "@/components/global/EmptyList";
import { fetchAdminProducts } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminProductsPage = async () => {
  const products = await fetchAdminProducts();

  return <div>AdminProductsPage</div>;
};
export default AdminProductsPage;
