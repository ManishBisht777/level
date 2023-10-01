import { BarChart } from "lucide-react";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="container ">
      <Link href="/" className="flex gap-2 py-5 items-center">
        <BarChart />
        <p className="font-bold md:text-xl">Levels.fyi</p>
      </Link>
    </header>
  );
}

export default Header;
