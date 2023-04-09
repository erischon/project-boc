import RegisterForm from "./components/forms/RegisterForm";

/**
 * @description Login page
 */
export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full bg-neutral-100">
      <RegisterForm />
    </main>
  );
}
