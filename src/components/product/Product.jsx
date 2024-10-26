import Image from "next/image";
import Link from "next/link";
import ServiceCar from "../Services/ServiceCar";


const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function ProductList() {
  const { products } = await getTopics();

  return (
    <>
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

    
      {products.map((t) => (
       <ServiceCar service={t} key={t._id}></ServiceCar>
      ))}
      </div>
    </>
  );
}