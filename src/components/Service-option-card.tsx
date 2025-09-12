import { Card } from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";

type ServiceOptionCardProps = {
  name: string;
  description: string;
  imagePath: string;
  url: string;
  reversed?: boolean;
};

const ServiceOptionCard = ({ name, description, imagePath, url, reversed=false }: ServiceOptionCardProps) => {
  return (
    <Card className="p-4 max-w-4xl bg-white">
      <div className={`flex ${reversed && 'md:flex-row-reverse'} flex-col sm:flex-row w-max-92 sm:w-fit gap-4`}>
        <div className={`flex-1 flex min-w-64 flex-col`}>
          <h1 className="text-4xl text-primary font-bold uppercase">{name}</h1>
          <p className="mt-4 text-primary uppercase">{description}</p>
        </div>
        <div className="bg-black w-max-92 sm:w-64 h-64 flex-shrink-0 overflow-hidden relative">
          <div className={"absolute flex flex-col w-full h-full p-4 justify-end z-10"} >
            <h3 className={"text-white text-xl text-shadow-2xs font-bold uppercase"}>{name}</h3>
            <Button className={"rounded-full w-max font-light uppercase"} onClick={()=>url}>Read more</Button>
          </div>
          <img src={imagePath} alt={name} className="object-cover w-full h-full absolute" />
        </div>
      </div>
    </Card>
  );
};

export default ServiceOptionCard;
