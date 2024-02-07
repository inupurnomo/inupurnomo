import React from "react";

const RepoSkeleton = () => (
  <div className="animate-pulse rounded-lg border-2 border-l-cardlight bg-bgdark p-4">
    <div className="flex w-full justify-between">
      <div className="mb-2 h-5 w-3/5 rounded-sm bg-cardlight"></div>
      <div className="mb-2 h-5 w-1/5">
        <div className="flex justify-between gap-2">
          <div className="mb-2 h-5 w-1/2 rounded-sm bg-cardlight"></div>
          <div className="mb-2 h-5 w-1/2 rounded-sm bg-cardlight"></div>
        </div>
      </div>
    </div>
    <div className="mb-3 h-5 rounded-sm bg-cardlight"></div>
    <div className="h-5 w-11/12 rounded-sm bg-cardlight"></div>
    <div className="mt-3 flex gap-2">
      <div className="h-5 w-1/4 rounded-3xl bg-cardlight px-2"></div>
      <div className="h-5 w-1/4 rounded-3xl bg-cardlight px-2"></div>
      <div className="h-5 w-1/4 rounded-3xl bg-cardlight px-2"></div>
    </div>
  </div>
);

export default RepoSkeleton;
