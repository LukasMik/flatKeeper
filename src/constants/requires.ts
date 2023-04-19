import {
    BsCodeSlash,
    BsSnow,
    FaBath, GiForkKnifeSpoon, GiRockingChair, GiVillage,
    GiWashingMachine, ImEnlarge2,
    IoShirtOutline, MdOutlineKitchen, MdRoofing, RiParkingBoxFill,
    SiMetrodeparis,
    TbCarrot,
    TbGrill, TbToiletPaper,
    VscSquirrel
} from "react-icons/all";
import {IRequire} from "../types.ts";

export const ALLREQUIRES: IRequire[] = [
// Required
    {
        id: 1,
        severity: 'required',
        name: 'Mouse',
        icon: VscSquirrel,
    },{
        id: 2,
        severity: 'required',
        name: 'Dryer',
        icon: GiWashingMachine,
    },{
        id: 3,
        severity: 'required',
        name: 'Metro',
        icon: SiMetrodeparis,
    },{
        id: 4,
        severity: 'required',
        name: 'Pantry',
        icon: TbCarrot,
    },{
        id: 5,
        severity: 'required',
        name: 'Storage space',
        icon: IoShirtOutline,
    },{
        id: 6,
        severity: 'required',
        name: 'Large kitchen',
        icon: MdOutlineKitchen,
    },{
        id: 8,
        severity: 'required',
        name: 'Hanging chair',
        icon: GiRockingChair,
    },{
        id: 9,
        severity: 'required',
        name: 'Dishwasher',
        icon: GiForkKnifeSpoon,
    },
// Optional
    {
        id: 101,
        severity: 'optional',
        name: 'terrace',
        icon: TbGrill
    }, {
        id: 102,
        severity: 'optional',
        name: 'Separate toilet',
        icon: TbToiletPaper,
    },{
        id: 103,
        severity: 'optional',
        name: '<50 m2',
        icon: ImEnlarge2,
    },
// Bonus
    {
        id: 201,
        severity: 'bonus',
        name: 'bathtub',
        icon: FaBath,
    },{
        id: 202,
        severity: 'bonus',
        name: 'Maisonette',
        icon: MdRoofing,
    },{
        id: 203,
        severity: 'bonus',
        name: 'Air conditioning',
        icon: BsSnow,
    },{
        id: 204,
        severity: 'bonus',
        name: 'Parking',
        icon: RiParkingBoxFill,
    },{
        id: 205,
        severity: 'bonus',
        name: 'City view',
        icon: GiVillage,
    },{
        id: 206,
        severity: 'bonus',
        name: 'Work room',
        icon: BsCodeSlash,
    },
]