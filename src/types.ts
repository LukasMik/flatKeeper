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
    gfJobDistance: number
    bfJobDistance: number
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
    createdAt: Date
    lastEditedAt: Date
}

export interface IFlatWithScore extends IFlat {
    bestSuitedScore: number
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

export enum SortBy {
    CreatedAt = 'createdAt',
    Price = 'price',
    BestSuited = 'bestSuitedScore',
    PrettyPoints = 'prettyScore'
}

export enum SortDirection {
    ASC,
    DESC
}

export interface IFlatSort {
    id: number
    sortBy: SortBy
    name: string
    sortFn: (flats: IFlatWithScore[]) => IFlatWithScore[]
}

export enum ToggleFlatStatus {
    Delete = 'delete',
    Favourite = 'favourite'
}