export default function Loading() {
  return (
    <div className="max-w-xl mx-auto animate-pulse rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
      {/* Header */}
      <div className="h-24 rounded-t-2xl bg-gradient-to-r from-indigo-300 to-purple-300" />

      {/* Body */}
      <div className="p-6 space-y-4">
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />

        <div className="pt-4 space-y-2">
          <div className="h-3 w-full rounded bg-gray-200" />
          <div className="h-3 w-5/6 rounded bg-gray-200" />
          <div className="h-3 w-2/3 rounded bg-gray-200" />
        </div>

        <div className="pt-6">
          <div className="h-10 w-32 rounded-lg bg-indigo-400" />
        </div>
      </div>
    </div>
  );
}
