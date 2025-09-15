import {createFileRoute} from '@tanstack/react-router'
import {Section} from "@/components/Section.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import HSSLogo from "@/assets/Halo-Support-Services-Logo-small(White).svg";
import ServiceOptionCard from "@/components/ServiceOptionCard.tsx";

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
                            className={"font-semibold text-transparent bg-clip-text gradient group-hover:animate-gradient"}>we</span> do
                            for <span
                                className={"text-transparent bg-clip-text font-semibold gradient group-hover:animate-gradient"}>
                                you
                                </span>?
                        </h1>
                    </div>
                </Section>
                <Section className="flex items-center">
                    <div className={"flex flex-col max-w-4xl gap-4 items-center"}>
                        <Separator/>
                        <ServiceOptionCard
                            name={"Support Work"}
                            description={"I BELIEVE LIAM LOVES BRANDONE SO MUCH HE SAID HE IS GOING TO WORK WITH HIM FOR FREE FROM NOW ON!"}
                            imagePath={HSSLogo}
                            url={"test"}
                        />
                        <ServiceOptionCard
                            name={"Support Work"}
                            description={"Some sample text that describes what Halo can do for a client yahoo!"}
                            imagePath={HSSLogo}
                            url={"test"}
                            reversed
                        />
                    </div>
                </Section>
            </div>
        </div>
    )
}