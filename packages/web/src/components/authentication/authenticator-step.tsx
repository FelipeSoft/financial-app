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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { ChevronLeft } from "lucide-react"
import { useContext } from "react"
import { SessionStartContext } from "@/contexts/SessionStartContext"
import Link from "next/link"

const FormSchema = z.object({
    secret: z.string().min(6, {
        message: "Please, provide your authenticator secret!"
    }).max(6, {
        message: "Please, provide your authenticator secret!"
    })
});

export const AuthenticatorStep = () => {
    const { toast } = useToast();
    const sessionStartContext = useContext(SessionStartContext);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
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
                    <button onClick={(e) => {
                        e.preventDefault();
                        sessionStartContext?.setCurrentStep("passwordless");
                    }} className="flex items-center gap-1 text-xl"><ChevronLeft /> Back</button>
                    <article>
                        <h1 className="font-semibold text-3xl mb-2">Check your Device</h1>
                        <p className="text-neutral-500">Verify which device has the Keeper of Secrets app installed, and check that the 6-digit secret code will be sent to your Keeper of Secrets app.</p>
                    </article>
                    <FormField
                        control={form.control}
                        name="secret"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Secret</FormLabel>
                                <FormControl>
                                    <InputOTP {...field} maxLength={6}>
                                        <InputOTPGroup>
                                            <InputOTPSlot className="w-[62px] h-[62px]" index={0} />
                                            <InputOTPSlot className="w-[62px] h-[62px]" index={1} />
                                            <InputOTPSlot className="w-[62px] h-[62px]" index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot className="w-[62px] h-[62px]" index={3} />
                                            <InputOTPSlot className="w-[62px] h-[62px]" index={4} />
                                            <InputOTPSlot className="w-[62px] h-[62px]" index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Link href="" className="text-emerald-600 hover:underline text-sm flex justify-end w-full">Resend secret in 6s</Link>
                    <Button type="submit" className="w-full text-black text-lg flex items-center gap-2" variant={"emerald"}>Confirm</Button>
                </form>
            </Form>
        </main>
    )
}