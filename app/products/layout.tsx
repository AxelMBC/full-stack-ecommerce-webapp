// app/products/layout.tsx
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Products</h2>
      {children}
    </section>
  );
}
