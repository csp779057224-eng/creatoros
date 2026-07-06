import Card from "@/components/Card";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* 欢迎 */}

      <Card title="👋 欢迎回来">
        <div>

          <h1 className="text-3xl font-bold">
            上午好，陈羽
          </h1>

          <p className="text-zinc-400 mt-2">
            今天还有 6 个任务等待完成。
          </p>

        </div>
      </Card>

      {/* 数据 */}

      <div className="grid grid-cols-3 gap-6">

        <StatCard
          title="今日任务"
          value="6"
          color="bg-blue-600"
        />

        <StatCard
          title="AI 调用"
          value="28"
          color="bg-purple-600"
        />

        <StatCard
          title="热点数量"
          value="14"
          color="bg-orange-600"
        />

      </div>

      {/* 待办 */}

      <Card title="📋 今日待办">

        <div className="space-y-3">

          <div>✅ 发布视频</div>

          <div>✅ 剪辑素材</div>

          <div>⬜ 回复客户</div>

          <div>⬜ 更新热点</div>

        </div>

      </Card>

      {/* AI */}

      <Card title="🤖 Creator Brain">

        <textarea
          className="w-full h-40 rounded-xl bg-zinc-800 border border-zinc-700 p-4"
          placeholder="今天想让 AI 帮你做什么？"
        />

      </Card>

    </div>
  );
}