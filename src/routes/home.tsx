import {createFileRoute} from '@tanstack/react-router'
import {useState} from "react";
import HSSLogo from "@/assets/Halo-Support-Services-Logo-small(White).svg";
import {Section} from "@/components/Section.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/ui/card.tsx";
import TeamMemberCard from "@/components/TeamMemberCard.tsx";
import ServiceOptionCard from "@/components/ServiceOptionCard.tsx"

export const Route = createFileRoute('/home')({
    component: Home,
})

function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="w-full flex flex-col gap-4 items-center min-h-screen pt-nav">
            <div className={"w-full h-48 bg-primary flex items-center justify-center"}>
                <img src={HSSLogo} alt="Halo Support Service Logo" height="250" width="250" className="md:shrink-0"/>
                <h2 className={"text-white font-bold text-3xl text-center"}>WELCOME TO HALO SUPPORT SERVICES!</h2>
            </div>
            <Section>
                <div className={"flex flex-wrap-reverse w-full gap-4 justify-center"}>
                    <div className="flex flex-1 max-w-[560px] flex-col justify-between">
                        <h1 className="text-primary font-bold text-5xl">NDIS Support Services</h1>
                        <Button className="bg-primary text-white" onClick={() => setCount((count) => count + 1)}>
                            count is {count}
                        </Button>
                    </div>
                    <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
            </Section>
            <Section>
                <Card className="flex flex-col items-center rounded-3xl p-8">
                    <h2 className={"text-primary font-bold text-3xl"}>HALO’S PERSONAL APPROACH TO SUPPORTIVE CARE</h2>
                    <p className={"text-[#4fe5ff]"}>At Halo Support Services, our goals are clear; to provide clear and
                        personalised support within the
                        NDIS sector.

                        With over 10+ years of experience, our team are equipped to aid any situations.</p>
                </Card>
            </Section>
            <Section>
                <TeamMemberCard name={"Test"} description={"Test"} imagePath={HSSLogo}/>
                <ServiceOptionCard name={"Support Work"}
                                   description={"I BELIEVE LIAM LOVES BRANDONE SO MUCH HE SAID HE IS GOING TO WORK WITH HIM FOR FREE FROM NOW ON!"}
                                   imagePath={HSSLogo} url={"test"}
                />
            </Section>
        </div>
    )
}