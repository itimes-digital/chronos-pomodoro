import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";

export function App() {
  console.info(1);

  return (
    <>
      <>
        <Heading>Olá mundo por componente</Heading>
        <Heading>Olá mundo por componente 2</Heading>
      </>
      <p>Outras informações</p>
    </>
  );
}
