"use client"
import MainLayout from "@/components/layouts/main-layout";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CircleArrowOutUpRight, DollarSign, Download, FileUp, HandCoins, Info, LineChart, MoreHorizontal, MoveDownLeft, MoveUpRight, PieChartIcon } from "lucide-react";
import { AreaChartComponent } from "@/components/charts/area";
import { BarChartComponent } from "@/components/charts/bar";
import { Button } from "@/components/ui/button";

/* 
Fazer o botão de "Abrir Menu" no Mobile com esse ícone: <LayoutIcon/> 
Botão ShadCN + Ícone
P2L (Plan To Life)
*/

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Index = () => {
    return (
        <MainLayout>
            <div className="pt-12 pb-24 dark:bg-neutral-900 bg-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-lg">Overview</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg">
                                    <BreadcrumbPage className="font-semibold">Dashboard</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <span className="text-neutral-400">
                            {weekDays[new Date().getDay()]}, {new Date().getDate()} {months[new Date().getMonth()]} {new Date().getFullYear()}
                        </span>
                    </div>
                    <section className="flex items-center justify-between w-full">
                        <article className="my-4">
                            <h1 className="text-5xl font-light">Welcome back, <span className="font-semibold">Felipe</span></h1>
                            <p className="font-light max-w-[500px] text-neutral-400 mt-4">See a general panarom through your bills and financial transactions. You can filter by daily, monthly or yearly transactions and operations.</p>
                        </article>
                        <article className="flex items-center gap-4">
                            <Select>
                                <SelectTrigger className="w-[180px] h-[40px]">
                                    <SelectValue placeholder="Select a period" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yearly">This year</SelectItem>
                                    <SelectItem value="monthly">This month</SelectItem>
                                    <SelectItem value="daily">Today</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button className="flex items-center gap-3 h-[40px]" variant={"outline"}><FileUp /> Export Data</Button>
                        </article>
                    </section>
                </div>
            </div>
            <div className="bg-neutral-200 w-full min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <section className="grid grid-cols-3 gap-4">
                        <article className="flex flex-col justify-between rounded-md bg-neutral-100 p-5 shadow-xl -mt-12">
                            <div className="flex items-center w-full justify-between">
                                <div className="bg-blue-300 rounded-md h-8 w-8 flex items-center justify-center text-black"><DollarSign /></div>
                                <p className="font-semibold text-neutral-500 flex items-center">
                                    <span className="text-emerald-600 mr-4 flex items-center gap-1"><MoveUpRight /> +16.5 %</span>
                                    +$87k today
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-5xl font-semibold text-black mt-8">${(1098329.71 - 576893.09).toLocaleString("en")}</h2>
                                <p className="text-neutral-500">Current Balance</p>
                            </div>
                        </article>
                        <article className="flex flex-col justify-between rounded-md bg-neutral-100 p-5 shadow-xl -mt-12">
                            <div className="flex items-center w-full justify-between">
                                <div className="bg-blue-300 rounded-md h-8 w-8 flex items-center justify-center text-black"><HandCoins /></div>
                                <p className="font-semibold text-neutral-500 flex items-center">
                                    <span className="text-emerald-600 mr-4 flex items-center gap-1"><MoveUpRight /> +16.5 %</span>
                                    +$87k today
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-semibold text-black mt-8">$1,098,329.71</h2>
                                <p className="text-neutral-500">Incomes</p>
                            </div>
                        </article>
                        <article className="flex flex-col justify-between rounded-md bg-neutral-100 p-5 shadow-xl -mt-12">
                            <div className="flex items-center w-full justify-between">
                                <div className="bg-blue-300 rounded-md h-8 w-8 flex items-center justify-center text-black"><CircleArrowOutUpRight /></div>
                                <p className="font-semibold text-neutral-500 flex items-center">
                                    <span className="text-emerald-600 mr-4 flex items-center gap-1"><MoveDownLeft /> -2.1 %</span>
                                    +$2k today
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-semibold text-black mt-8">$576,893.09</h2>
                                <p className="text-neutral-500">Expenses</p>
                            </div>
                        </article>
                    </section>
                    <section className="mt-16 grid grid-cols-3 gap-x-4">
                        <article className="col-span-2 flex flex-col justify-between rounded-md bg-neutral-100 p-5 shadow-xl -mt-12">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-black flex items-center gap-2 font-semibold text-xl">
                                        Balance Overtime
                                        <LineChart className="text-neutral-500" />
                                    </h1>
                                    <p className="text-neutral-500 my-4">
                                        Based on a daily, monthly or yearly period, <br /> see what the relation between incomes and expenses.
                                    </p>
                                </div>
                                <div className="flex h-full items-start justify-start">
                                    <button><MoreHorizontal className="text-neutral-500" /></button>
                                </div>
                            </div>
                            <div>
                                <AreaChartComponent />
                            </div>
                        </article>
                        <article className="col-span-1 flex flex-col rounded-md bg-neutral-100 p-5 shadow-xl -mt-12">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-black flex items-center gap-2 font-semibold text-xl">
                                        Expenses by Areas
                                        <PieChartIcon className="text-neutral-500" />
                                    </h1>
                                </div>
                                <div className="flex h-full items-start justify-start">
                                    <button><MoreHorizontal className="text-neutral-500" /></button>
                                </div>
                            </div>
                            <div className="mt-8">
                                <BarChartComponent />
                            </div>
                            <span className="">
                                <p className="text-neutral-500 mt-4 flex items-center gap-2">
                                    <Info /> An another informational text here.
                                </p>
                            </span>
                        </article>
                    </section>
                </div>
            </div>
        </MainLayout>
    )
}

export default Index;