import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  console.info(1);

  return (
    <>
      <>
        <Heading>
          Olá mundo por componente
          <button>
            <TimerIcon />
          </button>
        </Heading>
      </>
      <p>Outras informações</p>
    </>
  );
}
