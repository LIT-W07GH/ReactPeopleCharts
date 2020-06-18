import React from 'react';
import { PieChart } from "react-minimal-pie-chart";
import groupBy from 'lodash.groupby';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const PeopleAgeChart = ({ people }) => {
    const grouped = groupBy(people, p => {
        let { age } = p;
        if (age % 10 === 0) {
            age--;
        }
        return age - (age % 10) + 1;
    });
    const data = Object.keys(grouped).map(key => {
        const group = grouped[key];
        return {
            title: `[${key} - ${+key + 9}] (${group.length})`,
            value: group.length,
            color: getRandomColor()
        }
    })

    return (
        <PieChart data={data} />
    )
}

export default PeopleAgeChart;