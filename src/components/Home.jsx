import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-[#272525] flex items-center justify-center"
    >
      <div className="max-w-[1000px] px-8 flex flex-col items-start justify-center h-full">
        <p className="font-mono text-white">Olá, meu nome é</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Victor</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray">
          <ReactTyped
            strings={[
              "Back-End Developer.",
              "A.",
              "texto genérico.",
            ]}
            typeSpeed={110}
            backSpeed={55}
            loop
          />
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px] font-mono">
          Sou um programador apaixonado por programação back-end, em busca de
          aprender cada dia mais sobre programação de alto desempenho. |
          Atualmente estudando C++
        </p>
      </div>
    </section>
  );
};

export default Home;
