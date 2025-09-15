import {createFileRoute} from '@tanstack/react-router'
import {Section} from "@/components/Section.tsx";
import ScrollableGallery from "@/components/ScrollableGallery.tsx";
import {Separator} from "@/components/ui/separator.tsx";

export const Route = createFileRoute('/team')({
    component: Team,
})

function Team() {
    return (
        <div className="w-full flex flex-col gap-4 items-center min-h-screen">
            <div className={"flex flex-col w-full min-h-screen justify-center pt-nav sm:pt-0"}>
                <Section>
                    <div className={"w-full md:w-fit flex flex-col"}>
                        <h1 className={"text-4xl md:text-5xl transition-all"}>Our dedicated team members</h1>
                        <Separator className="mt-2 transition-all" />
                    </div>
                </Section>
                <ScrollableGallery/>
            </div>
        </div>
    )
}