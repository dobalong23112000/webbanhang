export default async function getData() {
  const CitiesJson = await fetch("https://provinces.open-api.vn/api/?depth=3");
  const Cities = await CitiesJson.json();
  return Cities;
}
