import {createFileRoute} from '@tanstack/react-router'
import {Section} from '@/components/Section';
import {Separator} from "@/components/ui/separator.tsx";
import {ContactForm} from "@/components/ContactForm.tsx";
import MapEmbed from "@/components/MapsEmbed.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Facebook, Instagram, Mail, Map, Phone, Twitter} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import CopyTextButton from "@/components/copyTextButton.tsx";

export const Route = createFileRoute('/contact')({
    component: Contact,
})

function Contact() {

    return (
        <div className={"min-h-screen pt-nav w-full"}>
            <Section className={"pt-6 lg:pt-12 transition-all"}>
                <div className={"flex flex-col gap-6 items-stretch"}>
                    <div className={"h-fit flex flex-col md:flex-row gap-6"}>
                        <Card className={"flex flex-col gap-0 md:max-w-lg w-full @container bg-secondary"}>
                            <MapEmbed className={"w-full h-80 border-b rounded-t-xl overflow-hidden"} zoom={15}/>
                            <div className={"px-6 pb-6 pt-4 flex grow flex-col justify-between gap-2"}>
                                <div className={"flex gap-4 underline"}>
                                    <Map size={"1em"} className={"mt-1.25 shrink-0"}/> 5 Sloane St, Maribyrnong VIC 3032,
                                    Australia
                                </div>
                                <div className={"flex flex-col pb-4 @sm:flex-row w-full gap-2"}>
                                    <CopyTextButton copyText={"lalala"}>
                                         <span className={"flex items-center gap-4"}><Phone size={"1em"} className={"mt-0.5 shrink-0"}/> +61 123 123 123</span>
                                    </CopyTextButton>
                                    <Separator orientation={"vertical"} className={"hidden @sm:block data-[orientation=vertical]:h-[24px]"}/>
                                    <CopyTextButton copyText={"lalala"}>
                                        <span className={"flex items-center gap-4"}><Mail size={"1em"} className={"mt-1 shrink-0"}/> email@email.com</span>
                                    </CopyTextButton>
                                </div>
                                <div className={"flex flex-col gap-4 items-center"}>
                                    <Separator/>
                                    {/*<h2 className={"font-semibold text-xl"}>Find us on:</h2>*/}
                                    <div className={"flex flex-row gap-4"}>
                                        <Button size={"icon"} className={"rounded-full bg-facebook hover:bg-facebook relative outline-0 transition-all hover:outline-2 outline-solid"}>
                                            <Facebook/>
                                        </Button>
                                        <Button size={"icon"}
                                                className={"rounded-full bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500 relative outline-0 transition-all hover:outline-2 outline-solid"}><Instagram/></Button>
                                        <Button size={"icon"}
                                                className={"rounded-full bg-twitter hover:bg-twitter relative outline-0 transition-all hover:outline-2 outline-solid"}>
                                            <Twitter/>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className={"hidden md:block"}>
                            <Separator orientation="vertical"/>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </Section>
        </div>
    )
}