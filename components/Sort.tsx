"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sortTypes } from "@/constants";
import { useEffect, useState } from "react";

const Sort = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Default to first sort type's value
  const defaultSort = sortTypes[0].value;
  const currentSortFromUrl = searchParams.get("sort") || defaultSort;

  // Local state for managing the selected sort value
  const [currentSort, setCurrentSort] = useState(currentSortFromUrl);

  // Sync local state with URL on page load
  useEffect(() => {
    if (currentSort !== currentSortFromUrl) {
      setCurrentSort(currentSortFromUrl); // Update the local state if URL changes
    }
  }, [currentSort, currentSortFromUrl]);

  const handleSort = (value: string) => {
    // Set the sort value in the URL query parameters
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", value);

    // Update the URL
    router.push(`${path}?${newParams.toString()}`, { scroll: false });

    // Update the local state to reflect the selected sort option
    setCurrentSort(value);
  };

  return (
    <Select onValueChange={handleSort} value={currentSort}>
      <SelectTrigger className="sort-select w-[200px]">
        <SelectValue placeholder="Sort files" />
      </SelectTrigger>
      <SelectContent className="sort-select-content">
        {sortTypes.map((sort) => (
          <SelectItem key={sort.label} className="cursor-pointer" value={sort.value}>
            {sort.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
