import pokedex from "@/assets/pokedex.png";
import background from '@/assets/background.jpg';
import { Outlet, useNavigate } from "react-router-dom";

export const Default = () => {
  const navigate = useNavigate();

  const handleHome = () => navigate("/");

  return ( 
    <>
      <section className="background">
        <img src={background} alt="Background red with pokeballs" />
      </section>
      <main className="flex flex-col items-center justify-center mt-6 bg-white max-w-4xl mx-auto rounded-lg antialiased">
        <img src={pokedex} onClick={handleHome} className="w-[40%] my-4 cursor-pointer" alt="Pokédex Logo" />
        <Outlet />
      </main>
    </>
  );
}