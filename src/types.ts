export type Attributes = {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export type Attribute = {
    value: number;
    modifier: number;
};

export type AttributesAndModifier = {
    Strength: Attribute;
    Dexterity: Attribute;
    Constitution: Attribute;
    Intelligence: Attribute;
    Wisdom: Attribute;
    Charisma: Attribute;
}

export type Character = {
    name: string;
    attributes: AttributesAndModifier
};