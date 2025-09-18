import {createFileRoute} from '@tanstack/react-router'
import {Section} from "@/components/Section.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import HSSLogo from "@/assets/Halo-Support-Services-Logo-small(White).svg";
import ServiceOptionCard from "@/components/ServiceOptionCard.tsx";

const services = [
    {
        name: "Support Work",
        description:
            "I BELIEVE LIAM LOVES BRANDONE SO MUCH HE SAID HE IS GOING TO WORK WITH HIM FOR FREE FROM NOW ON!",
        imagePath: HSSLogo,
        url: "test",
    },
    {
        name: "Support Work",
        description:
            "Some sample text that describes what Halo can do for a client yahoo!",
        imagePath: HSSLogo,
        url: "test",
    },
    // add more here...
];

export const Route = createFileRoute('/services')({
    component: Services,
})

function Services() {
    return (
        <div className="w-full flex flex-col gap-4 items-center pt-nav min-h-screen bg-secondary">
            <div className={"flex flex-col w-full pt-6 gap-4"}>
                <Section>
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className={"text-6xl text-center group"}>What can <span
                            className={"font-semibold text-transparent bg-clip-text gradient delay-200 group-hover:delay-200 animate-fade-down"}>we</span> do
                            for <span
                                className={"text-transparent bg-clip-text font-semibold gradient delay-400 group-hover:delay-200 animate-fade-down "}>
                                you
                                </span>?
                        </h1>
                    </div>
                </Section>
                <Section className="flex items-center">
                    <div className={"flex flex-col max-w-4xl gap-4 items-center"}>
                        <Separator/>
                        {services.map((service, index) => (
                            <ServiceOptionCard
                                key={service.name + index}
                                name={service.name}
                                description={service.description}
                                imagePath={service.imagePath}
                                url={service.url}
                                reversed={index % 2 === 1}
                                className={index % 2 === 1 ? "animate-fade-left" : "animate-fade-right"}
                                style={{animationDelay: `${index * 200}ms`}}
                            />
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    )
}