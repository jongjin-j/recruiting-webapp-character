import { useEffect, useState } from "react";
import { CLASS_LIST, ATTRIBUTE_LIST } from "./consts";

const Classes = ({ characters }) => {
    const [showClasses, setShowClasses] = useState([]);
    const [classCounter, setClassCounter] = useState({ Barbarian: 0, Wizard: 0, Bard: 0 });

    const changeShowClasses = (currentClass) => {
        setShowClasses(classes => classes.includes(currentClass) ? 
            classes.filter(c => c !== currentClass) 
                : 
            [...classes, currentClass]
        );
    };

    useEffect(() => {
        const newCounters = {
            Barbarian: 0, Wizard: 0, Bard: 0
        };

        for (var [name, attributes] of Object.entries(CLASS_LIST)) {
            for (var [key, character] of Object.entries(characters)) {
                var greaterThanClass = true;

                for (var attribute of ATTRIBUTE_LIST) {
                    if (character.attributes[attribute].value < attributes[attribute]) {
                        greaterThanClass = false;
                        break; 
                    }
                }
                
                if (greaterThanClass) {
                    newCounters[name] += 1;
                }
            }
        }

        setClassCounter(newCounters);
    }, [characters]);

    return (
        <div>
            {Object.entries(CLASS_LIST).map(([className, attributes]) => (
                <div key={className}>
                    <h3>{className}: {classCounter[className]}</h3>
                    <button onClick={() => changeShowClasses(className)}>
                        {showClasses.includes(className) ? 'Hide' : 'Show'}
                    </button>                    
                    {showClasses.includes(className) && (
                        <ul>
                        {Object.entries(attributes).map(([attributeName, value]) => (
                            <li key={attributeName}>
                                {attributeName}: {value}
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            ))}
      </div>
    )
}

export default Classes;