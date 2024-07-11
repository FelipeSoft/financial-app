import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { ArrowDownUp, LineChart } from "lucide-react";
import { tabs } from "./tabs";

export const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-2 w-[300px] md:w-[400px] lg:w-[500px] p-2">
                            {tabs.overview.map((tab) => {
                                return (
                                    <li>
                                        <Link href={tab.href} className="dark:hover:bg-neutral-800 rounded-md p-2 transition-all flex items-center gap-3 w-full">
                                            {tab.icon}
                                            <p className="flex flex-col text-sm font-light">
                                                <span className="font-semibold">{tab.title}</span>
                                                {tab.description}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Bills</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-2 w-[300px] md:w-[400px] lg:w-[500px] p-2">
                            {tabs.bills.map((tab) => {
                                return (
                                    <li>
                                        <Link href={tab.href} className="dark:hover:bg-neutral-800 rounded-md p-2 transition-all flex items-center gap-3 w-full">
                                            {tab.icon}
                                            <p className="flex flex-col text-sm font-light">
                                                <span className="font-semibold">{tab.title}</span>
                                                {tab.description}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Wallets</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-2 w-[300px] md:w-[400px] lg:w-[500px] p-2">
                            {tabs.wallets.map((tab) => {
                                return (
                                    <li>
                                        <Link href={tab.href} className="dark:hover:bg-neutral-800 rounded-md p-2 transition-all flex items-center gap-3 w-full">
                                            {tab.icon}
                                            <p className="flex flex-col text-sm font-light">
                                                <span className="font-semibold">{tab.title}</span>
                                                {tab.description}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Vault</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-2 w-[300px] md:w-[400px] lg:w-[500px] p-2">
                            {tabs.vault.map((tab) => {
                                return (
                                    <li>
                                        <Link href={tab.href} className="dark:hover:bg-neutral-800 rounded-md p-2 transition-all flex items-center gap-3 w-full">
                                            {tab.icon}
                                            <p className="flex flex-col text-sm font-light">
                                                <span className="font-semibold">{tab.title}</span>
                                                {tab.description}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}