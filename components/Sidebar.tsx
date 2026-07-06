"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    LayoutDashboard,
    Target,
    Brain,
    PenSquare,
    Flame,
    BarChart3,
    Settings,
} from "lucide-react";

const menus = [
    {
        name: "工作台",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "今日任务",
        href: "/mission",
        icon: Target,
    },
    {
        name: "创业大脑",
        href: "/brain",
        icon: Brain,
    },
    {
        name: "创作中心",
        href: "/studio",
        icon: PenSquare,
    },
    {
        name: "热点分析",
        href: "/trends",
        icon: Flame,
    },
    {
        name: "数据中心",
        href: "/analytics",
        icon: BarChart3,
    },
    {
        name: "系统设置",
        href: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {

    const pathname = usePathname();

    return (

        <aside className="w-72 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6">

            <h1 className="text-3xl font-bold">

                CreatorOS

            </h1>

            <p className="text-zinc-500 mt-2">

                AI 创业操作系统

            </p>

            <div className="mt-10 space-y-2">

                {menus.map((item) => {

                    const Icon = item.icon;

                    const active = pathname === item.href;

                    return (

                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition

                            ${
                                active
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-zinc-800 text-zinc-300"
                            }`}
                        >

                            <Icon size={18} />

                            {item.name}

                        </Link>

                    );

                })}

            </div>

        </aside>

    );
}