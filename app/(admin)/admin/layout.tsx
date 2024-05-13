import SideNavigation from "@/common/components/SideNavigation";
import React from "react";

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="py-10 grow overflow-auto">
      <div className="flex flex-row gap-2 h-full">
        <SideNavigation />
        <div className="container overflow-auto">
          <div className="grow relative">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default UserLayout;
