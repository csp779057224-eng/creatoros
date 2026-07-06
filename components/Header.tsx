"use client";

import { Search, Bell, Sun, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-8">

      {/* 左边 */}
      <div>
        <h2 className="text-lg font-semibold">
          工作台
        </h2>

        <p className="text-sm text-zinc-500">
          欢迎来到 CreatorOS
        </p>
      </div>

      {/* 中间搜索 */}
      <div className="flex-1 flex justify-center px-10">

        <div className="w-full max-w-xl relative">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-zinc-500"
          />

          <input
            placeholder="搜索任务、项目、剧本、AI..."
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 pl-11 pr-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

      </div>

      {/* 右边 */}
      <div className="flex items-center gap-4">

        <button className="bg-blue-600 hover:bg-blue-500 rounded-lg px-4 py-2 flex items-center gap-2">

          <Plus size={16} />

          新建

        </button>

        <button className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">

          <Bell size={18} />

        </button>

        <button className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">

          <Sun size={18} />

        </button>

        <select className="bg-zinc-800 rounded-lg px-3 py-2 text-sm">

          <option>🇨🇳 中文</option>

          <option>🇺🇸 English</option>

          <option>🇻🇳 Tiếng Việt</option>

        </select>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">

          陈

        </div>

      </div>

    </header>
  );
}