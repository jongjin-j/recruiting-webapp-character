import { ATTRIBUTE_LIST } from "./consts";

const Attributes = ({ attributes, onAttributeChange }) => {
    const onPlusClick = (attribute, attributeValue) => {
        const newValue = attributeValue + 1;
        const newModifier = Math.floor((newValue - 10) / 2);
        onAttributeChange(attribute, { value: newValue, modifier: newModifier });
    };

    const onMinusClick = (attribute, attributeValue) => {
        const newValue = attributeValue - 1;
        const newModifier = Math.floor((newValue - 10) / 2);
        onAttributeChange(attribute, { value: newValue, modifier: newModifier });
    };

    return (
        ATTRIBUTE_LIST.map((attribute, index) => (
            <div key={index}>
                {attribute}: {attributes[attribute].value}, {attribute} Modifier: {attributes[attribute].modifier}
                <button onClick={() => onPlusClick(attribute, attributes[attribute].value)}>+</button>
                <button onClick={() => onMinusClick(attribute, attributes[attribute].value)}>-</button>
            </div>
        ))
    );
}

export default Attributes;