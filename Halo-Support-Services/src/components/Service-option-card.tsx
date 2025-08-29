import { Card } from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";

type TeamMemberCardProps = {
  name: string;
  description: string;
  imagePath: string;
  url: string;
};

const TeamMemberCard = ({ name, description, imagePath, url }: TeamMemberCardProps) => {
  return (
    <Card className="p-4 max-w-4xl bg-white">
      <div className="flex flex-row gap-6">
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl text-primary font-bold uppercase">{name}</h1>
          <p className="mt-4 text-primary uppercase">{description}</p>
        </div>
        <div className="bg-black w-64 h-64 flex-shrink-0 overflow-hidden relative">
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

export default TeamMemberCard;
