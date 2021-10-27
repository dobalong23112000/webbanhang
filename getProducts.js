export default async function getProducts() {
  let products = [];
  const data = await db.collection("products").get();
  data.docs.forEach((element) => {
    products.push({ id: element.id, ...element.data() });
  });
  return products;
}

