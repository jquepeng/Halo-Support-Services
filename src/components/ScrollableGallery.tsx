import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import LoadImage from "@/components/LoadImage.tsx";

export interface Profile {
    name: string
    portrait: string
    role?: string
    description?: string
}

const works: Profile[] = [
    {
        name: "Rachael",
        portrait: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        role: "Service Provider",
        description: "A description about what this person does and why they are good at it"
    },
    {
        name: "Liam",
        portrait: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        role: "CEO",
        description: "A description about what this person does and why they are good at it"
    },
    {
        name: "Rebecca",
        portrait: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        role: "Position or role",
        description: "A description about what this person does and why they are good at it"
    },
    {
        name: "Tahana",
        portrait: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=300&q=80",
        role: "Position or role",
        description: "A description about what this person does and why they are good at it"
    },

]
export default function ScrollableGallery() {
    return (
        <div
            className="flex justify-center self-start pt-6 w-full overflow-hidden"
        >
            <ScrollArea className="w-full rounded-md whitespace-nowrap">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex space-x-8 pb-8">
                    {works.map((profile, index) => (
                        <figure
                            key={profile.name}
                            className="flex flex-col shrink-0 w-72 animate-fade-left"
                            style={{animationDelay: `${index * 200}ms`}}
                        >
                            <AspectRatio ratio={1} className="w-full rounded-lg overflow-hidden">
                                <LoadImage
                                    src={profile.portrait}
                                    alt={`Photo of ${profile.name}`}
                                    className="h-full w-full object-cover"
                                />
                            </AspectRatio>

                            <figcaption className="flex flex-col flex-1 py-2 px-1">
                                <h4 className="text-lg font-semibold">{profile.name}</h4>
                                <p className="text-sm">{profile?.role}</p>
                                <p className="mt-2 text-sm font-extralight text-accent-foreground text-wrap">
                                    {profile.description}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>
        </div>
    )
}