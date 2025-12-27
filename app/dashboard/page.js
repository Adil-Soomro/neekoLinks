import DashboardPage from "@/components/dashboard/DashboardPage";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardPage />
    </Suspense>
  );
};

export default page;
