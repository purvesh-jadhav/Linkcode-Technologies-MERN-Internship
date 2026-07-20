const Contact = () => {
  return (

    <div className="min-h-[calc(100vh-80px)] bg-[#F1E1ED] px-16 py-16">


      <h1 className="text-4xl font-bold">
        CONTACT
      </h1>


      <form className="
      mt-10
      bg-white
      border
      p-10
      w-[500px]
      ">


        <input
        className="border w-full p-3 mb-5"
        placeholder="Your Name"
        />


        <input
        className="border w-full p-3 mb-5"
        placeholder="Email"
        />


        <textarea
        className="border w-full p-3 h-32"
        placeholder="Message"
        />


        <button className="
        mt-5
        bg-black
        text-white
        px-8
        py-3
        ">
          Send
        </button>


      </form>


    </div>

  );
};

export default Contact;
