import React, { useEffect, useRef, useState } from 'react';
// import './ProgressRing.css';

interface IProps {
    radius: number;
    stroke: number;
    progress: number;
    color: string | undefined;
}

export const ProgressRing = ({ radius, stroke, progress, color }: IProps) => {
    const [circumference, setCircumference] = useState(0);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const normalizedRadius = radius - stroke;
        setCircumference(normalizedRadius * 2 * Math.PI);
    }, [radius, stroke]);

    const strokeDashoffset = circumference - progress / 100 * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            ref={svgRef}
        >
            <circle
                className="progress-ring__circle"
                stroke={`${color}CC`}
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset }}
                fill="transparent"
                r={radius - stroke}
                cx={radius}
                cy={radius}
            />
        </svg>
    );
}