export function EmptyState({ searchTerm }: { searchTerm: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-24 text-center px-4">
      <div className="rounded-full bg-gray-100 p-4">
        <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">No products found</h3>
      <p className="mt-2 text-sm text-gray-600 max-w-sm">
        We couldn&apos;t find anything matching <span className="font-semibold text-gray-900">&quot;{searchTerm}&quot;</span>. Try adjusting your search term.
      </p>
    </div>
  );
}