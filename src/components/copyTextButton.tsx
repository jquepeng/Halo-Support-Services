import { ClipboardCheck, Copy} from "lucide-react";
import {useState} from "react";

export default function CopyTextButton({copyText, children}: { copyText: string, children: React.ReactNode }) {
    const [clicked, setClicked] = useState(false);

    return (
        <button
            className={"flex flex-1 items-center underline justify-between group"}
            onClick={() => {
                navigator.clipboard.writeText(copyText);
                setClicked(true);
                setTimeout(() => {
                    setClicked(false)
                }, 3000)
            }}
        >
            {children}
            {clicked
                ? <ClipboardCheck size={"1em"} className={"mt-0.5 text-muted-foreground justify-self-end"}/>
                : <Copy size={"1em"} className={"mt-0.25 text-muted-foreground justify-self-end hidden group-hover:block"}/>
            }
        </button>
    )
}