import { Navigation } from "@/components/navigation/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, Settings } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import * as React from "react"

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div>
            <header className="h-[80px] border-b dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-700 border-neutral-300 shadow-lg">
                <nav className="max-w-7xl mx-auto h-full flex items-center">
                    <h1 className="font-semibold text-lg w-max">P<span className="text-emerald-600">2</span>L <sub className="text-neutral-500 font-normal"></sub></h1>
                    <div className="h-[40px] w-[1px] bg-neutral-300 dark:bg-neutral-700 mx-[40px]"></div>
                    <div className="w-full flex items-center justify-between">
                        <Navigation />
                        <nav className="flex items-center gap-6">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button className="dark:hover:bg-neutral-800/50 hover:bg-neutral-300/50 transition-all relative flex items-center justify-center h-[40px] w-[40px] rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent">
                                            <Settings />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Settings</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button className="dark:hover:bg-neutral-800/50 hover:bg-neutral-300/50 transition-all relative flex items-center justify-center h-[40px] w-[40px] rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent">
                                            <Bell />
                                            <span className="absolute top-0 right-0 rounded-full h-2 w-2 bg-red-500"></span>
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Notifications</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button className="flex items-center gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col items-start">
                                                <h2 className="font-semibold">Felipe de Castro Lima</h2>
                                                <p className="text-neutral-500 text-sm">Administrator</p>
                                            </div>
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>View Profile</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </nav>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout;