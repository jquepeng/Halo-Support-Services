'use client'

import * as React from 'react'
import {Button} from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {cn} from '@/lib/utils'
import {useLocation, useNavigate} from '@tanstack/react-router'

// ---------------- Icons ----------------
const Logo = (props: React.SVGAttributes<SVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 324 323"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x="88.1023"
            y="144.792"
            width="151.802"
            height="36.5788"
            rx="18.2894"
            transform="rotate(-38.5799 88.1023 144.792)"
            fill="currentColor"
        />
        <rect
            x="85.3459"
            y="244.537"
            width="151.802"
            height="36.5788"
            rx="18.2894"
            transform="rotate(-38.5799 85.3459 244.537)"
            fill="currentColor"
        />
    </svg>
)

const HamburgerIcon = ({className, ...props}: React.SVGAttributes<SVGElement>) => (
    <svg
        className={cn('pointer-events-none', className)}
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
        />
    </svg>
)

// ---------------- Types ----------------
export interface Navbar01NavLink {
    href: string
    label: string
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode
    navigationLinks?: Navbar01NavLink[]
    ctaText?: string
    ctaHref?: string
}

// ---------------- Component ----------------
const defaultNavigationLinks: Navbar01NavLink[] = [
    {href: '/home', label: 'Home'},
    {href: '/team', label: 'The Team'},
    {href: '/services', label: 'Services'},
]

export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
    (
        {
            className,
            logo = <Logo/>,
            navigationLinks = defaultNavigationLinks,
            ctaText = 'Contact Us',
            ctaHref = '/contact',
            ...props
        },
        ref
    ) => {
        const containerRef = React.useRef<HTMLElement>(null)
        const [open, setOpen] = React.useState(false)
        const navigate = useNavigate()
        const pathname = useLocation().pathname

        // Merge refs
        const combinedRef = React.useCallback(
            (node: HTMLElement | null) => {
                containerRef.current = node
                if (typeof ref === 'function') {
                    ref(node)
                } else if (ref) {
                    ;(ref as React.MutableRefObject<HTMLElement | null>).current = node
                }
            },
            [ref]
        )

        // Centralized navigation handler
        const handleNavigate = (href: string) => {
            navigate({to: href})
            setOpen(false) // ✅ closes mobile popover
        }

        return (
            <header
                ref={combinedRef}
                className={cn(
                    'fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
                    className
                )}
                {...props}
            >
                <div className="container mx-auto flex h-16 max-w-7xl px-4 items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex w-full items-center justify-between sm:justify-start">
                        {/* Logo + desktop nav */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => handleNavigate('/')}
                                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
                            >
                                <div className="text-2xl">{logo}</div>
                                <span className="hidden font-bold text-xl sm:inline-block">Halo Support</span>
                            </button>
                            <NavigationMenu className="flex hidden md:block">
                                <NavigationMenuList className="gap-1">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index}>
                                            <Button
                                                variant="ghost"
                                                className={pathname === link.href ? 'bg-accent dark:bg-accent/50' : ''}
                                                onClick={() => handleNavigate(link.href)}
                                            >
                                                {link.label}
                                            </Button>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>

                    {/* Right side (desktop CTA) */}
                    <div className="flex items-center hidden sm:block">
                        <Button
                            size="sm"
                            className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
                            onClick={() => handleNavigate(ctaHref)}
                        >
                            {ctaText}
                        </Button>
                    </div>
                    {/* Mobile menu trigger */}
                    <div className="md:hidden">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                                    variant="ghost"
                                    size="icon"
                                >
                                    <HamburgerIcon/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-48 p-2">
                                <NavigationMenu className="max-w-none">
                                    <NavigationMenuList className="flex-col items-start gap-1">
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem key={index} className="w-full">
                                                <Button
                                                    variant="ghost"
                                                    className={pathname === link.href ? 'bg-accent dark:bg-accent/50' : ''}
                                                    onClick={() => handleNavigate(link.href)}
                                                >
                                                    {link.label}
                                                </Button>
                                            </NavigationMenuItem>
                                        ))}
                                        <Button
                                            size="sm"
                                            className="text-sm font-medium px-4 h-9 rounded-md shadow-sm sm:hidden"
                                            onClick={() => handleNavigate(ctaHref)}
                                        >
                                            {ctaText}
                                        </Button>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </header>
        )
    }
)

Navbar01.displayName = 'Navbar01'

export {Logo, HamburgerIcon}
