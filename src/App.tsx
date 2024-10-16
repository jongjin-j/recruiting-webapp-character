import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import { Character } from "./types";
import Characters from "./Characters";
import Classes from "./Classes";
import Skills from "./Skills";

function App() {
  const [characters, setCharacters] = useState<Character[]>([
    {
      name: "Character 1",
      attributes: {
        Strength: { value: 5, modifier: -2 },
        Dexterity: { value: 5, modifier: -2 },
        Constitution: { value: 5, modifier: -2 },
        Intelligence: { value: 5, modifier: -2 },
        Wisdom: { value: 5, modifier: -2 },
        Charisma: { value: 5, modifier: -2 },
      },
    },
  ]);

  const updateCharacterAttribute = (index, attribute, updatedAttribute) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character, i) =>
        i === index
          ? {
              ...character,
              attributes: {
                ...character.attributes,
                [attribute]: updatedAttribute,
              },
            }
          : character
      )
    );
  };

  return (
    <div>
      {characters.map((character, index) => (
        <div key={index}>
          <Characters
            character={character}
            onUpdateAttributes={(attribute, value) =>
              updateCharacterAttribute(index, attribute, value)
            }
          />
          <Skills character={character} />
        </div>
      ))}

      <Classes characters={characters} />
    </div>
  );
}

export default App;
