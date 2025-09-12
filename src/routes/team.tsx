import {createFileRoute} from '@tanstack/react-router'
import {Section} from "@/components/Section.tsx";
import ScrollableGallery from "@/components/scrollable-gallery.tsx";

export const Route = createFileRoute('/team')({
    component: Team,
})

function Team() {
    return (
        <div className="w-full flex flex-col gap-4 items-center min-h-screen">
            <div className={"flex flex-col w-full min-h-screen justify-center"}>
                <Section>
                    <h1 className={"text-5xl"}>Our dedicated team members</h1>
                </Section>
                <ScrollableGallery/>
            </div>
        </div>
    )
}