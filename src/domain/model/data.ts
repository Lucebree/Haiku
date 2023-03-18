/**
 * @class Describes a data structure, used to describe how data is used in a composed block
 * @property {string} id - unique id of this data
 * @property {Map<string, DataType>} data - data composing this structure
 */
export class DataStructureDefinition {
    constructor(
        readonly id: string,
        readonly data: { [key: string]: DataType }
    ) {
        this.id = id
        this.data = data
    }
}

export abstract class Data {
    constructor(readonly type: DataTypes) {
        this.type = type
    }
    abstract toDataDescription(): object
}

export class StructuredData extends Data {
    constructor(readonly id: string) {
        super(DataTypes.STRUCT)
        this.id = id
    }
    toDataDescription(): object {
        return {
            type: this.type,
            id: this.id
        }
    }
}

export abstract class ValueData extends Data {
    constructor(
        readonly type: DataTypes,
        readonly _value: string | number | boolean | Date
    ) {
        super(DataTypes.STRING)
        this._value = _value
    }
    abstract value(): string
    toDataDescription(): object {
        return {
            type: this.type
        }
    }
}

export class StringData extends ValueData {
    constructor(readonly _value: string) {
        super(DataTypes.STRING, _value)
    }
    value(): string {
        return this._value
    }
}

export class NumberData extends ValueData {
    readonly format: Intl.NumberFormat
    constructor(
        readonly _value: number,
        readonly _locale = "fr-FR",
        private readonly _formatOptions?: Intl.NumberFormatOptions
    ) {
        super(DataTypes.NUMBER, _value)
        this._value = _value
        this._locale = _locale
        this.format = new Intl.NumberFormat(this._locale, _formatOptions)
    }
    toDataDescription(): object {
        return {
            ...super.toDataDescription(),
            locale: this._locale,
            formatOptions: this._formatOptions
        }
    }
    value(): string {
        return this.format.format(this._value)
    }
}

export class BooleanData extends ValueData {
    constructor(
        readonly _value: boolean,
        private readonly _valsForTrueFalse: [string, string] = ["true", "false"]
    ) {
        super(DataTypes.BOOLEAN, _value)
        this._value = _value
        this._valsForTrueFalse = _valsForTrueFalse
    }
    toDataDescription(): object {
        return {
            ...super.toDataDescription(),
            formatOptions: this._valsForTrueFalse
        }
    }
    value(): string {
        return this._value
            ? this._valsForTrueFalse[0]
            : this._valsForTrueFalse[1]
    }
}

export class DateData extends ValueData {
    constructor(
        readonly _value: Date,
        private readonly _locale = "fr-FR",
        private readonly _formatOptions?: Intl.DateTimeFormatOptions
    ) {
        super(DataTypes.DATE, _value)
        this._value = _value
        this._formatOptions = _formatOptions
    }
    toDataDescription(): object {
        return {
            ...super.toDataDescription(),
            locale: this._locale,
            formatOptions: this._formatOptions
        }
    }
    value(): string {
        return this._value.toLocaleDateString(this._locale, this._formatOptions)
    }
}

export class TimeData extends ValueData {
    constructor(
        readonly _value: Date,
        private readonly _locale = "fr-FR",
        private readonly _formatOptions?: Intl.DateTimeFormatOptions
    ) {
        super(DataTypes.TIME, _value)
        this._value = _value
        this._formatOptions = _formatOptions
    }
    toDataDescription(): object {
        return {
            ...super.toDataDescription(),
            locale: this._locale,
            formatOptions: this._formatOptions
        }
    }
    value(): string {
        return this._value.toLocaleTimeString(this._locale, this._formatOptions)
    }
}

export class DateTimeData extends ValueData {
    constructor(
        readonly _value: Date,
        private readonly _locale = "fr-FR",
        private readonly _formatOptions?: Intl.DateTimeFormatOptions
    ) {
        super(DataTypes.DATE_TIME, _value)
        this._value = _value
        this._formatOptions = _formatOptions
    }
    toDataDescription(): object {
        return {
            ...super.toDataDescription(),
            locale: this._locale,
            formatOptions: this._formatOptions
        }
    }
    value(): string {
        return this._value.toLocaleString(this._locale, this._formatOptions)
    }
}

export class ListData extends Data {
    constructor(
        readonly list: StringData[] | NumberData[] | BooleanData[] | DateData[]
    ) {
        super(DataTypes.LIST)
        this.list = list
    }
    toDataDescription(): object {
        return {
            type: this.type,
            list: this.list
        }
    }
}

export type DataType =
    | StringData
    | NumberData
    | BooleanData
    | DateData
    | DateTimeData
    | TimeData
    | ListData
    | StructuredData

export enum DataTypes {
    STRING,
    NUMBER,
    BOOLEAN,
    DATE,
    TIME,
    DATE_TIME,
    LIST,
    STRUCT
}
