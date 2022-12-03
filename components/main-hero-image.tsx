import React from "react";
import Image from "next/image";

import config from "../config/index.json";

const MainHeroImage = () => {
    const { mainHero } = config;
    return (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
                className="h-64 w-full object-cover sm:h-96 md:h-120 lg:w-full lg:h-full"
                src={mainHero.img}
                alt="happy team image"
                width={1000}
                height={667}
            />
        </div>
    );
};

export default MainHeroImage;
