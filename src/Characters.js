import Attributes from "./Attributes";

const Characters = ({ character, onUpdateAttributes }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <Attributes 
                attributes={character.attributes} 
                onAttributeChange={(attribute, updatedAttribute) =>
                    onUpdateAttributes(attribute, updatedAttribute)
                }
            />
        </div>
    )
}

export default Characters;