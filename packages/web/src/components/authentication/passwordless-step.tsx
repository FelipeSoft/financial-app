import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { useContext } from "react"
import { SessionStartContext } from "@/contexts/SessionStartContext"

const FormSchema = z.object({
    accountNumber: z.string().min(1, {
        message: "Please, provide your account number!"
    }),
    password: z.string().min(1, {
        message: "Please, provide your account password!"
    })
});

export const PasswordlessStep = () => {
    const { toast } = useToast();
    const sessionStartContext = useContext(SessionStartContext);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        sessionStartContext?.setCurrentStep("authenticator");
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }


    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[400px]">
                    <h1 className="font-semibold text-3xl mb-10">Access your account</h1>
                    <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Account Number</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full text-black text-lg flex items-center gap-2" variant={"emerald"}>Next<MoveRight /></Button>
                </form>
            </Form>
            <Link href="" className="text-emerald-600 hover:underline flex justify-center w-full mt-16">I have forgot my password</Link>
        </main>
    )
}