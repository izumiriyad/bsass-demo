"use client";

import * as React from "react";
import { Search, X, Loader as Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  href?: string;
}

interface SearchAutocompleteProps {
  placeholder?: string;
  onSearch: (query: string) => Promise<SearchResult[]>;
  onSelect?: (result: SearchResult) => void;
  className?: string;
  autoFocus?: boolean;
}

export function SearchAutocomplete({
  placeholder = "Search...",
  onSearch,
  onSelect,
  className,
  autoFocus,
}: SearchAutocompleteProps) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const debouncedSearch = React.useMemo(() => {
    let timeout: NodeJS.Timeout;
    return (q: string) => {
      clearTimeout(timeout);
      if (q.trim().length < 2) {
        setResults([]);
        return;
      }
      timeout = setTimeout(async () => {
        setLoading(true);
        try {
          const data = await onSearch(q);
          setResults(data);
          setShow(true);
          setSelectedIndex(0);
        } finally {
          setLoading(false);
        }
      }, 200);
    };
  }, [onSearch]);

  React.useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!show || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((p) => Math.min(p + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((p) => Math.max(p - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      setShow(false);
    }
  };

  const handleSelect = (result: SearchResult) => {
    setShow(false);
    setQuery("");
    onSelect?.(result);
  };

  const clear = () => {
    setQuery("");
    setResults([]);
    setShow(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setShow(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="pl-9 pr-9"
          aria-label="Search"
          aria-expanded={show}
          aria-autocomplete="list"
          role="combobox"
        />
        {loading ? (
          <Loader2 className="absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        ) : query ? (
          <button
            onClick={clear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      {show && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-80 overflow-auto rounded-xl border border-border bg-popover shadow-lg animate-scale-in">
          <ul className="p-1" role="listbox">
            {results.map((result, i) => (
              <li key={result.id}>
                <button
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    i === selectedIndex
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  )}
                  onClick={() => handleSelect(result)}
                  role="option"
                  aria-selected={i === selectedIndex}
                >
                  {result.icon && (
                    <span className="shrink-0 text-xl">{result.icon}</span>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">{result.title}</div>
                    {result.subtitle && (
                      <div className="truncate text-xs opacity-70">
                        {result.subtitle}
                      </div>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
