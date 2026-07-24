interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <div className="relative max-w-md w-full">
      <label htmlFor="search" className="sr-only">Search products</label>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className="block w-full rounded-full border border-gray-300 py-3.5 pl-12 pr-5 text-gray-950 placeholder:text-gray-400 shadow-sm transition-all duration-200 
                   focus:ring-0 focus:outline-none focus:bg-blue-50 focus:border-blue-400 focus:shadow-lg
                   sm:text-sm sm:leading-6"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}