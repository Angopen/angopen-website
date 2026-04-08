import { Button } from "@/components/ui/button";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`rounded-lg text-white hover:text-white cursor-pointer flex! justify-center transition-all hover:bg-base-design/60 border-base-design bg-base-design leading-none! gap-2 py-5 px-4 items-center! ${className}`}
      size="sm"
    >
        {children}
    </Button>
  );
};
