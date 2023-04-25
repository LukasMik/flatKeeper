import {
    BsCodeSlash, BsFillMegaphoneFill, BsShop,
    BsSnow,
    FaBath, FaWalking, GiForkKnifeSpoon, GiPiggyBank, GiRockingChair, GiVillage,
    GiWashingMachine, IoIosResize,
    IoShirtOutline, MdBlinds, MdOutlineKitchen, MdRoofing, RiHandCoinLine, RiParkingBoxFill,
    SiMetrodeparis, TbBuildingSkyscraper,
    TbCarrot, TbElevatorOff,
    TbGrill, TbMouseOff, TbTarget, TbToiletPaper,
    VscSquirrel
} from "react-icons/all";
import {IFlatFeature} from "../types.ts";

export const ALLFLATFEATURES: IFlatFeature[] = [
// Required
    {
        id: 1,
        severity: 'required',
        name: 'Mouse',
        icon: VscSquirrel,
    }, {
        id: 2,
        severity: 'required',
        name: 'Dryer',
        icon: GiWashingMachine,
    }, {
        id: 3,
        severity: 'required',
        name: 'Metro',
        icon: SiMetrodeparis,
    }, {
        id: 4,
        severity: 'required',
        name: 'Pantry',
        icon: TbCarrot,
    }, {
        id: 5,
        severity: 'required',
        name: 'Storage space',
        icon: IoShirtOutline,
    }, {
        id: 6,
        severity: 'required',
        name: 'Large kitchen',
        icon: MdOutlineKitchen,
    }, {
        id: 8,
        severity: 'required',
        name: 'Hanging chair',
        icon: GiRockingChair,
    }, {
        id: 9,
        severity: 'required',
        name: 'Dishwasher',
        icon: GiForkKnifeSpoon,
    }, {
        id: 10,
        severity: 'required',
        name: 'Terrace',
        icon: TbGrill
    },
// Nice to have
    {
        id: 101,
        severity: 'nice-to-have',
        name: 'Bathtub',
        icon: FaBath,
    }, {
        id: 102,
        severity: 'nice-to-have',
        name: 'Maisonette',
        icon: MdRoofing,
    }, {
        id: 103,
        severity: 'nice-to-have',
        name: 'Air conditioning',
        icon: BsSnow,
    }, {
        id: 104,
        severity: 'nice-to-have',
        name: 'Parking',
        icon: RiParkingBoxFill,
    }, {
        id: 105,
        severity: 'nice-to-have',
        name: 'City view',
        icon: GiVillage,
    }, {
        id: 106,
        severity: 'nice-to-have',
        name: 'Work room',
        icon: BsCodeSlash,
    }, {
        id: 107,
        severity: 'nice-to-have',
        name: 'Separate toilet',
        icon: TbToiletPaper,
    }, {
        id: 108,
        severity: 'nice-to-have',
        name: '<50 m2',
        icon: IoIosResize,
    }, {
        id: 109,
        severity: 'nice-to-have',
        name: 'Near to city center',
        icon: TbTarget,
    }, {
        id: 110,
        severity: 'nice-to-have',
        name: 'Residence',
        icon: TbBuildingSkyscraper,
    }, {
        id: 111,
        severity: 'nice-to-have',
        name: 'External blinds',
        icon: MdBlinds,
    }, {
        id: 112,
        severity: 'nice-to-have',
        name: 'Mall',
        icon: BsShop,
    },
//     Disadvantages
    {
        id: 201,
        severity: 'disadvantage',
        name: 'No elevator',
        icon: TbElevatorOff,
    }, {
        id: 202,
        severity: 'disadvantage',
        name: 'Commission',
        icon: RiHandCoinLine,
    }, {
        id: 203,
        severity: 'disadvantage',
        name: 'Noise',
        icon: BsFillMegaphoneFill,
    }, {
        id: 204,
        severity: 'disadvantage',
        name: 'No metro',
        icon: FaWalking,
    }, {
        id: 205,
        severity: 'disadvantage',
        name: 'No pet',
        icon: TbMouseOff,
    }, {
        id: 206,
        severity: 'disadvantage',
        name: 'High deposit',
        icon: GiPiggyBank,
    }
]