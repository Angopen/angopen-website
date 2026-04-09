import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectGroup {
  label?: string;
  options: SelectOption[];
}

interface SelectProps {
  placeholder?: string;
  groups: SelectGroup[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function GenericSelect({
  placeholder = "Selecione uma opção",
  groups,
  value,
  onValueChange,
  className = "",
  disabled,
}: SelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger
        className={`bg-zinc-900 border border-zinc-700 focus:border-zinc-500 text-white rounded-lg py-2.5 px-4 w-full outline-none ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-zinc-900 border border-zinc-700 text-white rounded-lg">
        {groups.map((group, index) => (
          <SelectGroup key={index}>
            {group.label && (
              <SelectLabel className="text-zinc-400 text-xs px-4 py-1">
                {group.label}
              </SelectLabel>
            )}
            {group.options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-white! focus:bg-zinc-100 focus:text-white! hover:text-white! cursor-pointer px-4 py-2"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
