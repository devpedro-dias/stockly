import React, { ReactNode } from "react";

const SummaryCardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground">
      {children}
    </div>
  );
};

const SummaryCardTitle = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm font-medium text-muted-foreground">{children}</p>;
};

const SummaryCardValue = ({ children }: { children: ReactNode }) => {
  return <p className="text-2xl font-semibold text-foreground">{children}</p>;
};

const SummaryCard = ({ children }: { children: ReactNode }) => {
  return <div className="rounded-xl border bg-card p-6">{children}</div>;
};

const SummaryCardSkeleton = () => {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="space-y-2">
        <div className="h-9 w-9 rounded-md bg-muted" />
        <div className="h-5 w-[86.26px] rounded-md bg-muted" />
        <div className="h-8 w-48 rounded-md bg-muted" />
      </div>
    </div>
  );
};

export {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
  SummaryCardSkeleton,
};
