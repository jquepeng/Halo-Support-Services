import {createFileRoute} from '@tanstack/react-router'
import {Section} from "@/components/Section.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import HSSLogo from "@/assets/Halo-Support-Services-Logo-small(White).svg";
import ServiceOptionCard from "@/components/Service-option-card.tsx";

export const Route = createFileRoute('/services')({
    component: Services,
})

function Services() {
    return (
        <div className="w-full flex flex-col gap-4 items-center pt-nav">
            <div className={"flex flex-col w-full pt-6"}>
                <Section>
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className={"text-6xl text-center"}>What can <span
                            className={"text-transparent bg-clip-text font-semibold bg-linear-120 from-primary to-ndis"}>we</span> do
                            for <span
                                className={"text-transparent bg-clip-text font-semibold bg-linear-120 from-primary to-ndis"}>you</span>?
                        </h1>
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
                                description={"I BELIEVE LIAM LOVES BRANDONE SO MUCH HE SAID HE IS GOING TO WORK WITH HIM FOR FREE FROM NOW ON!"}
                                imagePath={HSSLogo}
                                url={"test"}
                                reversed
                            />
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    )
}