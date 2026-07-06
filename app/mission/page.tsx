export default function MissionPage() {
    return (
      <main className="flex-1 bg-zinc-950 text-white p-10">
  
        <h1 className="text-4xl font-bold">
          🎯 今日唯一使命
        </h1>
  
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
  
          <p className="text-zinc-500">
            TODAY'S MISSION
          </p>
  
          <h2 className="mt-3 text-3xl font-bold">
            拍摄《越南创业第一集》
          </h2>
  
          <p className="mt-6 text-zinc-400 leading-8">
            今天最重要的事情只有一件：
            完成 CreatorOS 第一支真正的视频。
            不研究，不优化，只发布。
          </p>
  
        </div>
  
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
  
          <h3 className="text-xl font-semibold">
            今日执行清单
          </h3>
  
          <div className="mt-6 space-y-4">
  
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              写脚本
            </label>
  
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              准备设备
            </label>
  
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              拍摄
            </label>
  
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              剪辑
            </label>
  
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              发布
            </label>
  
          </div>
  
          <button className="mt-10 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
            开始执行
          </button>
  
        </div>
  
      </main>
    );
  }