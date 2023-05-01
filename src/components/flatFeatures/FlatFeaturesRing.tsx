import React from 'react';
import {ProgressRing} from '../../flatFeatures/ProgressRing.tsx';
import {ColorStatus, Severity} from "../../types.ts";
import {flatFeaturesColor} from "../../helpers/flatFeaturesColor.ts";
import {useFlatContext} from "../../contexts/flatContext.tsx";
import {ALLFLATFEATURES} from "../../constants/flatFeatures.ts";

interface IProps {
    severity: Severity
}

export const FlatFeaturesRing = ({severity}: IProps) => {
    const flat = useFlatContext()

    const radius = 50; // px
    const stroke = 10; // px

    const value = flat.features.filter(f => f.severity === severity).length
    const maxValue = ALLFLATFEATURES.filter(f => f.severity === severity).length

    const progress = value / maxValue * 100

    return (
        <div className="relative"
             title={flat.features.filter(f => f.severity === severity).map(f => f.name).join(', ')}>
            <div
                className={`absolute h-full w-full flex items-center justify-center bg-black rounded-full ${value > 0 ? 'bg-opacity-50' : 'bg-opacity-10'} filter blur-sm transform scale-75`}>
            </div>
            <p className={`text-center text-xl text-white font-bold absolute h-full w-full flex items-center justify-center rounded-full ${value > 0 ? 'text-opacity-90' : 'text-opacity-50'}`}>{`${value} / ${maxValue}`}</p>
            <div className="relative">
                <ProgressRing progress={progress} radius={radius} stroke={stroke}
                              color={flatFeaturesColor(severity, ColorStatus.Hex)}/>
            </div>
        </div>
    );
};