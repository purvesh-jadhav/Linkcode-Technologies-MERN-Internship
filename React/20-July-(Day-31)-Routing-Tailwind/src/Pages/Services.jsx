const Services = () => {
  return (

    <div className="min-h-[calc(100vh-80px)] bg-[#F1E1ED] px-16 py-16">


      <h1 className="text-4xl font-bold">
        SERVICES
      </h1>


      <div className="grid grid-cols-3 gap-8 mt-10">


        <div className="bg-white border p-8">
          <h2 className="text-2xl font-bold">
            Laptop Repair
          </h2>

          <p className="mt-4 text-gray-600">
            Fast and reliable service.
          </p>
        </div>


        <div className="bg-white border p-8">
          <h2 className="text-2xl font-bold">
            Software
          </h2>

          <p className="mt-4 text-gray-600">
            Professional software support.
          </p>
        </div>


        <div className="bg-white border p-8">
          <h2 className="text-2xl font-bold">
            Support
          </h2>

          <p className="mt-4 text-gray-600">
            Customer assistance anytime.
          </p>
        </div>


      </div>


    </div>

  );
};

export default Services;
