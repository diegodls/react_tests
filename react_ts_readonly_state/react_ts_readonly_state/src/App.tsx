import { useState } from "react";

import "./App.css";
import { DeepReadonly } from "./types/DeepReadonly";

type PersonType = {
  id: number;
  name: string;
  phone: string;
};

function App() {
  const [person, setPerson] = useState<DeepReadonly<PersonType>>({
    id: 0,
    name: "John",
    phone: "6Hj56GdFpgs",
  });
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <div className='buttonContainer'>
        <button
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            if (counter >= 0) {
              setCounter(counter + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <input
        placeholder='Digite algo'
        value={person.name}
        onChange={(e) => {
          setPerson({ ...person, name: e.target.value });
          console.log(e.target.value);
        }}
      />
      <h3>{JSON.stringify(person)}</h3>
      <p>
        const {"["}person, setPerson{"]"} = useState{"({"} id: 0, name: ""{" "}
        {"})"};
      </p>
      <p>
        onChange = (e) ={">"} {"{"} person.name = e.target.value; {"}"}
      </p>
      <p>alterando o estado dessa forma não faz o re render</p>
      <p>Deve-se adicionar o Readonly ao tipo:</p>
      <p>
        const {"["}person, setPerson{"]"} = useState{"<"}Readonly{"<"}PersonType
        {">>"}
        {"({"} id: 0, name: "" {"})"};
      </p>
      <p>
        onChange= (e) ={">"} {"{"} setPerson{"()"}...person, name: {"'"}John
        {"')"} {"}"}
      </p>
      <p>
        Fazendo com que não seja possível alterar apenas uma propriedade do
        estado e sim atualizando-o como um todo. Porém, o Readonly é apenas
        top-level, onde é possível inserir um elemento:
      </p>
      <p>{"onChange= (e) => { person.name.push('Newman')}"}</p>
      <p>
        {
          "Bastando usar o DeepReadonly, um type criado para evitar o problema acima (na pasta src/types)."
        }
      </p>
      <hr />
      <p>
        {
          "Quando for usar um type/interface mas não for usar/atualizar todo o conteúdo e o typescript acusar erro de que falta propriedades, utilize o <Partial<TYPE>, assim todas as outras props serão opcionais."
        }
      </p>
      <p>
        {
          "O contrário seria usar o <Require>, fazendo todas as props serem obrigatórias: Require<TYPE>"
        }
      </p>

      <p>
        {
          "Para controlar o que pode ser alterado, utilize o Pick<TYPE, props>: const user: Pick<UserProps, 'name' | 'phone'>, neste caso, não será possível alterar o id"
        }
      </p>

      <p>
        {
          "Para ignorar algo, utilize o Omit<TYPE, props>: const user: Omit<UserProps, 'id' | 'name'>, neste caso, poderá alterar o phone sem poder passar o id e name"
        }
      </p>
    </div>
  );
}

export default App;
