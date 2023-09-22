import { Loader2 } from "lucide-react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Loader2 size="100px" className="animate-spin" />
    </div>
  );
}
