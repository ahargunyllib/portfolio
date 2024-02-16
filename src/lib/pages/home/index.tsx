import type { NextPage } from 'next';
import { Button } from "@/components/ui/button"


const Home: NextPage = () => {
  return (
    <div className="p-8 flex flex-col items-start justify-start gap-8 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100">
      <h4 className="text-white">Hi!</h4>
      <h1 className="text-white text-start">I'm Nugraha Billy Viandy</h1>
      <h3 className="text-white text-start">Fullstack Developer</h3>
      <Button>Get to know me!</Button>

    </div>
  );
};

export default Home;
