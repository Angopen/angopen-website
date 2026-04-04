interface LogoComponentProps {
  primaryColor?: string;
  secondaryColor?: string;
  size?: number;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  primaryColor = "#D2551F",
  secondaryColor = "#FFFFFF",
  size = 24,
}) => {
  const sizeClass = `size-${size}`;

  return (
    <svg
      className={sizeClass}
      viewBox="0 0 121 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.2538 3.12761L28.161 57.025C27.4167 58.3581 28.3804 60 29.9073 60H90.0927C91.6196 60 92.5833 58.3581 91.839 57.025L61.7463 3.12761C60.9832 1.76093 59.0168 1.76093 58.2538 3.12761Z"
        fill={primaryColor}
      />
      <path
        d="M60.4574 66.1414L42.6338 103.641C42.003 104.969 42.9708 106.5 44.4402 106.5H117.033C118.573 106.5 119.535 104.832 118.764 103.499L97.0776 65.9987C96.7201 65.3807 96.0602 65 95.3462 65H62.2638C61.4918 65 60.7888 65.4443 60.4574 66.1414Z"
        fill={secondaryColor}
        stroke={secondaryColor}
      />
      <path
        d="M22.9255 66.0145L1.69058 103.515C0.935601 104.848 1.89874 106.5 3.43093 106.5H34.2572C35.0183 106.5 35.7134 106.068 36.0504 105.386L54.5745 67.8858C55.2311 66.5566 54.2639 65 52.7813 65H24.6659C23.9454 65 23.2805 65.3875 22.9255 66.0145Z"
        fill={primaryColor}
      />
    </svg>
  );
};
