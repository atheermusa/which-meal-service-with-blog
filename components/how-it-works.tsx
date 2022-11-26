import React from "react";

import config from "../config/index.json";
import CardGroup from "./card-group";
import Divider from "./divider";

const HowItWorks = () => {
    const { howItWorks } = config;

    return (
        <section className={`bg-background py-8`} id="howItWorks">
            <div className={`container mx-auto m-8`}>
                <h1
                    className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
                >
                    {howItWorks.title.split(" ").map((word, index) => (
                        <span key={index} className={"text-border"}>
                            {word}{" "}
                        </span>
                    ))}
                </h1>
                <Divider />
                <div className="flex justify-center">
                    <CardGroup />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
