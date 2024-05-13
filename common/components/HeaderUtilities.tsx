import React from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

const HeaderUtilities = () => {
  return (
    <section className="relative pt-3 text-gray-600 h-[36px]">
      <div className="container px-0">
        <div className="flex flex-row justify-center items-center gap-3 text-sm">
          <span>{format(new Date(), "cccc, dd/MM/yyyy", { locale: vi })}</span>
          <span>{format(new Date(), "O", { locale: vi })}</span>
        </div>
      </div>
    </section>
  );
};

export default HeaderUtilities;
