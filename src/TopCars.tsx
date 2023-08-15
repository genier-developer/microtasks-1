import react from "react";
import React from "react";


type TopCarsType = {
    manufacturer: string,
    model: string
}

type TopCatsPropsType = {
    topCars: Array<TopCarsType>
}

function TopCars(props: TopCatsPropsType) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {props.topCars.map((objectFromCarsArray, index: number) => {
                        return (
                            <tr>
                                <td>{objectFromCarsArray.manufacturer}</td>
                                <td>{objectFromCarsArray.model}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TopCars;



