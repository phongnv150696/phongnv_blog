import React from "react";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";

interface Slots extends React.PropsWithChildren {
  articles: React.ReactNode;
}

const UserLayout: React.FC<Slots> = ({ children, articles }) => {
  return (
    <>
      <Header />
      <main className="py-10 grow overflow-auto">
        <div className="container">
          <div className="flex flex-row gap-2">
            <div className="grow relative">
              {articles}
              {children}
            </div>
            <aside className="min-w-[360px] relative">Sidebar</aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
