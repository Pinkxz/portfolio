import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <section id="home">
     <div>
        <p>Olá, meu nome é</p>
        <h1>Victor Jesus</h1>
        <hs>
          <ReactTyped
            strings={[
              "Back-End Developer;",
              "I love Java;",
            ]}
            typeSpeed={110}
            backSpeed={55}
            loop
          />
        </hs>
        <p>
          Sou um programador apaixonado por programação back-end, em busca de
          aprender cada dia mais sobre programação de alto desempenho. |
          Atualmente estudando C++
        </p>
      </div>
    </section>
  );
};

export default Home;
