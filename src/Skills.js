import { useEffect, useState } from "react";
import { SKILL_LIST } from "./consts";

const Skills = ({ character }) => {
    const [availablePoints, setAvailablePoints] = useState(10 + (4 * character.attributes.Intelligence.modifier));
    const [skillCounters, setSkillCounters] = useState(
        SKILL_LIST.reduce((acc, skill) => {
            acc[skill.name] = 0;
            return acc;
        }, {})
    );

    useEffect(() => {
        setAvailablePoints(10 + (4 * character.attributes.Intelligence.modifier))
    }, [character]);

    const onPlusClicked = (skill) => {
        setSkillCounters(prevCounters => ({
            ...prevCounters,
            [skill]: prevCounters[skill] + 1,
        }));
        setAvailablePoints(prevPoint => prevPoint - 1);
    };

    const onMinusClicked = (skill) => {
        setSkillCounters(prevCounters => ({
            ...prevCounters,
            [skill]: Math.max(0, prevCounters[skill] - 1),
        }));
        setAvailablePoints(prevPoint => prevPoint + 1);
    };

    return (
        <div>
            <h4>Skills</h4>
            <h4>Available Points: {availablePoints}</h4>
            {SKILL_LIST.map((skill, index) => (
                <div key={index}>
                    {skill.name} - points: {skillCounters[skill.name]}&nbsp;
                    <button onClick={() => onPlusClicked(skill.name)}>+</button>
                    <button onClick={() => onMinusClicked(skill.name)}>-</button>&nbsp;
                    modifier ({skill.attributeModifier.substring(0, 3)}): {character.attributes[skill.attributeModifier].modifier}&nbsp;
                    total: {skillCounters[skill.name] + character.attributes[skill.attributeModifier].modifier}
                </div>
            ))}
        </div>
        
    );
};

export default Skills;