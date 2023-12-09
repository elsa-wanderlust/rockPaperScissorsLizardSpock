import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type OptionCardProps = {
  src: string;
  fallback: string;
};

export default function OptionCard({ src, fallback }: OptionCardProps) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
