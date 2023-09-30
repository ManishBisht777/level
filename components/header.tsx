import { BarChart } from "lucide-react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="container flex gap-2 py-5 items-center">
      <BarChart />
      <p className="font-bold md:text-xl">Levels.fyi</p>
    </header>
  );
}

export default Header;
