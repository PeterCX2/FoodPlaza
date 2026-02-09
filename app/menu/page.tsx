import { getProducts } from "./_actions/get-menus"


export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}