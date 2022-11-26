import React from "react";

import config from "../config/cards.json";
import Card from "./card";

const CardGroup = () => {
    const { cardsContent } = config;
    return (
        <div className="flex flex-col space-y-4	lg:flex-row lg:space-x-4">
            {cardsContent.map((content) => (
                <Card content={content} key={content.name} />
            ))}
        </div>
    );
};

export default CardGroup;
