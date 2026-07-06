export default function StatCard({
    title,
    value,
    color,
  }: {
    title: string;
    value: string;
    color: string;
  }) {
    return (
      <div
        className={`rounded-2xl p-6 text-white ${color}`}
      >
        <p className="text-sm opacity-80">
          {title}
        </p>
  
        <h2 className="text-3xl font-bold mt-3">
          {value}
        </h2>
      </div>
    );
  }