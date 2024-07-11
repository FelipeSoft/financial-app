"use client"

import { Navigation } from "@/components/navigation/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown } from "lucide-react";
import * as React from "react"

/* 
Fazer o botão de "Abrir Menu" no Mobile com esse ícone: <LayoutIcon/> 
Botão ShadCN + Ícone
P2L (Plan To Life)
*/

const Index = () => {
    return (
        <div>
            <header className="h-[80px] border-b dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-700 border-neutral-300 shadow-lg">
                <nav className="max-w-7xl mx-auto h-full flex items-center">
                    <h1 className="font-semibold text-lg w-max">P<span className="text-emerald-600">2</span>L <sub className="text-neutral-500 font-normal"></sub></h1>
                    <div className="h-[40px] w-[1px] bg-neutral-300 dark:bg-neutral-700 mx-[40px]"></div>
                    <div className="w-full flex items-center justify-between">
                        <Navigation />
                        <nav className="flex items-center gap-4">
                            <button className="relative flex items-center justify-center h-[40px] w-[40px] rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent">
                                <Bell/>
                                <span className="absolute top-0 right-0 rounded-full h-2 w-2 bg-red-500"></span>
                            </button>
                            <button className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <ChevronDown/>
                            </button>
                        </nav>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Index;