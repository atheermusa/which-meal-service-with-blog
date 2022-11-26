import React from "react";

import config from "../config/cards.json";
import Card from "./card";

const CardGroup = () => {
    const { cardsContent } = config;
    return (
        <div className="flex flex-col	md:flex-row md:space-x-4">
            {cardsContent.map((content) => (
                <Card content={content} key={content.name} />
            ))}
        </div>
    );
};

export default CardGroup;
