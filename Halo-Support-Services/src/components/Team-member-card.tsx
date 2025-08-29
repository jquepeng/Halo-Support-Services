import { Card } from "@/components/ui/card";

type TeamMemberCardProps = {
  name: string;
  description: string;
  imagePath: string;
};

const TeamMemberCard = ({ name, description, imagePath }: TeamMemberCardProps) => {
  return (
    <Card className="p-4 max-w-xl">
      <div className="flex flex-row gap-6">
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl text-primary font-bold">{name}</h1>
          <p className="mt-4 text-gray-700">{description}</p>
        </div>
        <div className="rounded-lg bg-black w-64 h-64 flex-shrink-0 overflow-hidden">
          <img src={imagePath} alt={name} className="object-cover w-full h-full" />
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
