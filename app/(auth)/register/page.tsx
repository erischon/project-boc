import RegisterForm from "@/components/forms/RegisterForm";

const page = () => {
  return (
    <main className="flex justify-center items-center md:h-screen md:w-screen">
      <section className=" w-full md:w-2/4 lg:w-2/5 xl:w-1/3 mx-auto">
        <RegisterForm />
      </section>
    </main>
  );
};

export default page;
