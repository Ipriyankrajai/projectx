import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="px-5 py-[10px]">
      <nav>
        <Link href={"/"} className="font-lex font-semibold text-[20px]">
          StealThe<span className="text-red-600">Deal</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
