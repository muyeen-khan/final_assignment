import { useEffect, useState } from "react";
import { GetServices } from "../apiService";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function ServicePage() {
  let [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await GetServices();
        setServices(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    }
    fetchServices();
  }, []);

  return (
    <Layout>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          Our Services
        </h1>
        {services.length === 0 && <Loader />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <img
                src={service["img"]}
                alt={service["name"]}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                {service["name"]}
              </h2>
              <p className="mt-4 text-gray-600">{service["description"]}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default ServicePage;
