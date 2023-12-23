import { useRecoilValue, useSetRecoilState } from "recoil";
import { FiRefreshCcw } from "react-icons/fi";
import { cn } from "@/lib/utils";

// AUTH
interface IPropsAuthButton {
  statusLoading?: boolean;
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
}
export function CustomButton({
  statusLoading,
  onClick,
  label,
  disabled,
  className,
}: IPropsAuthButton) {
  return (
    <button
      onClick={onClick}
      disabled={statusLoading || disabled}
      style={{ height: "30px" }}
      className={cn(
        "flex items-center justify-center gap-4 border border-transparent border-primary-100 duration-300 text-sm px-8 cursor-pointer border-transparent  font-semibold hover:border-secondary-500 rounded-full   md:px-5 ",
        className
      )}
    >
      {statusLoading && (
        <span className="">
          <FiRefreshCcw className="animate-spin text-xs" />
        </span>
      )}
      <span className={`${statusLoading && ""}`}>
        {statusLoading ? "Chargement..." : label}
      </span>
    </button>
  );
}
