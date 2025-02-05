export default function ProductCard({
  product,
}: {
  product: { name: string; description: string };
}) {
  return (
    <div>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      {/* Additional product details */}
    </div>
  );
}
