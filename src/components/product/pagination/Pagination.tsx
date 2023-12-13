import { Button } from "@/components/ui/button";
import React from "react";

type IPaginationProps = {
  next: () => void;
  previous: () => void;
  page: number;
  total: number;
  loading: boolean;
};

const Pagination: React.FC<IPaginationProps> = ({
  next,
  previous,
  page,
  total,
  loading
}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-6 pb-11">
      <Button
        onClick={previous}
        disabled={page === 1}
        className="dark:bg-white dark:text-black bg-black text-white"
        variant={"outline"}
      >
        Previous
      </Button>
      <Button disabled={page === total} onClick={next} variant={"outline"}>
        {loading ? "Loading..." : "Next"}
      </Button>
    </div>
  );
};

export default Pagination;
