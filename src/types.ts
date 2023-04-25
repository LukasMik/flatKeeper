import {IconType} from "react-icons";

export interface IFlat {
    id: number
    name: string
    link: string
    isVisible: boolean
    source: string
    size: number
    layout: string
    photo: string
    prettyScore: number
    isFavorite: boolean
    metroDistance: number
    distanceToInfinit: number
    distanceToSmartlook: number
    equipped: boolean
    district: string
    availableFrom: string
    price: number
    deposit: number
    commission: number
    includeEnergies: boolean
    sentMessage: boolean
    hasAnswer: boolean
    features: IFlatFeature[]
    note: string
    addAt: Date
    lastEditAt: Date
}

export interface IFlatFeature {
    id: number,
    severity: string,
    name: string,
    icon: IconType,
}

export enum Severity {
    Required = 'required',
    NiceToHave = 'nice-to-have',
    Disadvantage = 'disadvantage'
}

export enum FlatFeatureAction {
    Remove = 'remove',
    Add = 'add'
}

export enum ColorStatus {
    TextClass = 'text-class',
    Hex = 'hex',
    BgClass = 'bg-class'
}