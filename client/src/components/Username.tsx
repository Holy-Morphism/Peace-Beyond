export default async function Username() {
  const getProducts = async () => {
    const res = await fetch("http://localhost:8080/api/home");
    return res.json();
  };

  const res = await getProducts();
  console.log(res);
  return <div className=" font-mono text-5xl">{res.message}</div>;
}
