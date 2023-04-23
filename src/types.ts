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
}

export interface IFlatFeature {
    id: number,
    severity: string,
    name: string,
    icon: IconType,
}

export enum Severity {
    Required = 'required',
    Optional = 'optional',
    Bonus = 'bonus'
}

export enum FlatFeatureAction {
    Remove = 'remove',
    Add = 'add'
}