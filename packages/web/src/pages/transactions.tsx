import MainLayout from "@/components/layouts/main-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const Transactions = () => {
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
                                    <BreadcrumbPage className="font-semibold">Transactions</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <section className="flex items-center justify-between w-full">
                        <article className="my-4 w-full flex items-center justify-between">
                            <h1 className="text-5xl font-light">Transactions</h1>
                        </article>
                    </section>
                </div>
            </div>
        </MainLayout>
    )
}

export default Transactions;