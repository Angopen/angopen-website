import { Button } from "@/components/ui/button";

interface DarkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const DarkButton: React.FC<DarkButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      variant="outline"
      className={`rounded-full flex! cursor-pointer! hover:bg-zinc-800/80 border-zinc-800 bg-zinc-900 leading-none! gap-2 py-5 px-4 items-center! [&_svg]:size-auto] ${className}`}
      
    >
      {children}
    </Button>
  );
};
