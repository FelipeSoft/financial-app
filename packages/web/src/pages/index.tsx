import { Layers } from "lucide-react";
import Link from "next/link";

const Index = () => {
    return (
        <div>
            <aside className="min-h-screen w-max bg-red-500">
                <nav>
                    <h1>P2L (Plan For Life)</h1>
                    <ul>
                        <li>
                            <Link href="" className="flex items-center gap-2 font-semibold"><Layers/>Overview</Link>
                        </li>
                        <li>
                            <Link href="" className="flex items-center gap-2 font-semibold">Transactions</Link>
                        </li>
                        <li>
                            <Link href="" className="flex items-center gap-2 font-semibold">Account</Link>
                        </li>
                        <li>
                            <Link href="" className="flex items-center gap-2 font-semibold">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Index;