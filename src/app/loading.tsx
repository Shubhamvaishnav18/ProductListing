export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 h-10 w-48 animate-pulse rounded-md bg-gray-200" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-96 w-full animate-pulse rounded-2xl bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
}