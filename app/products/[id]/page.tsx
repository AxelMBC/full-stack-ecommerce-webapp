"use client";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h3>Product Details for {id}</h3>
      {/* Product detail components */}
    </div>
  );
}
