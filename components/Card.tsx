export default function Card({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-lg">
  
        <h3 className="text-lg font-semibold mb-5">
          {title}
        </h3>
  
        {children}
  
      </div>
    );
  }