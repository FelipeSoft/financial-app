import { ArrowDownSquare, ArrowDownUp, ArrowUpSquare, Bomb, CreditCard, Feather, Landmark, LineChart, MoveRight, Scale, TrendingUp, Vault } from "lucide-react";

export const tabs = {
    overview: [
        { href: "/", icon: <LineChart className="text-emerald-600" />, title: "Dashboard", description: "A general visual overview of your financials movements." },
        { href: "/", icon: <ArrowDownUp className="text-emerald-600" />, title: "Transactions", description: "The detailment of your financials movements." }
    ],
    bills: [
        { href: "/", icon: <ArrowUpSquare className="text-indigo-600" />, title: "Incomes", description: "Details of your incomes." },
        { href: "/", icon: <ArrowDownSquare className="text-indigo-600" />, title: "Expenses", description: "Details of your expenses." },
        { href: "/", icon: <Bomb className="text-indigo-600" />, title: "Debts", description: "Watch out! This could complicate things for you." },
        { href: "/", icon: <Feather className="text-indigo-600" />, title: "Savings", description: "There's no bad weather for that." }
    ],
    wallets: [
        { href: "/", icon: <Scale className="text-orange-500" />, title: "Balance", description: "The total balance of their cards and accounts." },
        { href: "/", icon: <Landmark className="text-orange-500" />, title: "Accounts", description: "Manage your accounts." },
        { href: "/", icon: <CreditCard className="text-orange-500" />, title: "Cards", description: "Manage your cards." }
    ],
    vault: [
        { href: "/", icon: <Vault className="text-blue-600" />, title: "General", description: "Everything you save. It's a problem if you don't save anything." },
        { href: "/", icon: <MoveRight className="text-blue-600" />, title: "Linear Targets", description: "Save money by a unique amount daily, monthly or yearly." },
        { href: "/", icon: <TrendingUp className="text-blue-600" />, title: "Progressive", description: "Save money by a progressive amount daily, monthly or yearly." }
    ]
}
