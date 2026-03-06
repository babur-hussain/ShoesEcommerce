import { db } from "@/db";
import { products } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold tracking-tight">
            👟 Shoes Ecommerce
          </h1>
          <p className="text-gray-300 mt-1">Premium Nike Collection</p>
        </div>
      </header>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {allProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found. Run the seed script to add sample Nike items.
            </p>
            <code className="mt-2 inline-block bg-gray-200 px-4 py-2 rounded text-sm">
              npx tsx src/db/seed.ts
            </code>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {product.image && (
                  <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain h-full w-full p-4"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {product.brand}
                    </span>
                    {product.category && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      {product.stock} in stock
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
