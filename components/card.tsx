import Image from "next/image";

export default function Card(contents: any) {
    const { content } = contents;

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={content.imageSrc}
                    alt={content.imageAlt}
                    height={300}
                    width={320}
                />
            </figure>
            <div className="card-body">
                <div className="ml-2 uppercase text-xs font-semibold tracking-wider">
                    {content.offers}
                </div>
                <h2 className="card-title">{content.name}</h2>
                <p>{content.description}</p>
                <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">from</span>
                    &nbsp;
                    <span className="font-bold text-xl">£{content.price}</span>
                    &nbsp;
                    <span className="text-sm font-semibold">per serving</span>
                </div>
                <div className="p-1 border-t border-b text-xs">
                    <span className="font-bold text-xl">
                        {content.availableMeals}
                    </span>
                    &nbsp;
                    <span className="text-sm font-semibold">
                        Meals available weekly
                    </span>
                    <br></br>
                    <span className="font-bold text-xl">{content.score}</span>
                    &nbsp;
                    <span className="text-sm font-semibold">
                        Social and enviromental score
                    </span>
                </div>
                <div className="card-actions justify-end mb-6"> </div>
                <div className="card-actions justify-end">
                    {content.tags.map((item: string) => (
                        <div
                            className="badge badge-outline text-primary"
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
