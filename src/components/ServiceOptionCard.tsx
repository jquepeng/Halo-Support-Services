import {Card} from "@/components/ui/card";
import {ChevronsRight} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {Separator} from "@/components/ui/separator.tsx";

type ServiceOptionCardProps = {
    name: string;
    description: string;
    imagePath: string;
    url: string;
    reversed?: boolean;
};

const ServiceOptionCard = ({name, description, imagePath, url, reversed = false}: ServiceOptionCardProps) => {
    return (
        <Card className="p-4 max-w-4xl w-full bg-white">
            <div
                className={cn(
                    "flex flex-col sm:flex-row gap-4 w-full",
                    reversed && "md:flex-row-reverse"
                )}
            >
                {/* Text content */}
                <div className="flex-1 flex flex-col">
                    <div className={"w-fit"}>
                        <h1 className="text-4xl text-primary font-bold uppercase">{name}</h1>
                        <Separator className={"mb-[2px] data-[orientation=horizontal]:w-4/5"}/>
                    </div>
                    <p className="mt-4 text-accent-foreground">{description}</p>
                </div>

                {/* Image block */}
                <div className="relative h-64 w-full sm:w-64 rounded-sm flex-shrink-0 bg-slate-700 overflow-hidden">
                    <div className="absolute inset-0 flex flex-col p-4 justify-end z-10">
                        <h3 className="text-white text-xl font-bold uppercase text-shadow-lg">
                            {name}
                        </h3>
                        <Button
                            className="rounded-full w-max font-light uppercase group"
                            onClick={() => url}
                        >
                            Read more <ChevronsRight/>
                        </Button>
                    </div>
                    <img
                        src={imagePath}
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </Card>

    );
};

export default ServiceOptionCard;
