import { cn } from "@/lib/utils";

interface TitleClassName {
  className: string;
}

export default function Title(props: TitleClassName) {
  return (
    <span className={cn("font-CaniculeDisplay", props.className)}>
      <span>Peace</span>
      <span className="font-serif"> & </span>
      <span>Beyond</span>
    </span>
  );
}
