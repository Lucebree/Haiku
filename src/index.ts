export interface Bloc {
    id: string,
    monter: (data: StructureDonnee[]) => HTML
}

export class StructureDonnee {
    id: string
    structures: StructureDonnee[]
    donnees: DonneeAffichable[]
}

export interface DonneeAffichable extends DonneeTypee {
    value: () => string
}

export class DonneeTypee {
    private _value: string | number | boolean | Date
    private readonly _type : TypeDonneeAffichable
    type() : TypeDonneeAffichable {
        return this._type;
    }
    value() : string | number | boolean | Date {
        return this._value;
    }
    constructor(value: string, type: TypeDonneeAffichable) {
        switch(type) {
            case TypeDonneeAffichable.STRING: 
                this._value = value;
                break;
            case TypeDonneeAffichable.NUMBER: 
                this._value = Number(value).valueOf();
                break;
            case TypeDonneeAffichable.BOOLEAN: 
                this._value = Boolean(value).valueOf();
                break;
            case TypeDonneeAffichable.DATE:
                this._value = new Date(value);
                break;
        }
    }
}

export class HTML {
    readonly html: string
    readonly style?: object

	constructor(html: string, style: object = {}) {
        this.html = html;
        this.style = style;
	}
}

export enum TypeDonneeAffichable {
    STRING,
    NUMBER,
    BOOLEAN,
    DATE
}