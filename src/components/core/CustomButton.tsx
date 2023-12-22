import { useRecoilValue, useSetRecoilState } from "recoil";
import { FiRefreshCcw } from "react-icons/fi";
import { cn } from "@/lib/utils";

// AUTH
interface IpropsAuthButton {
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
}: IpropsAuthButton) {
  return (
    <button
      onClick={onClick}
      disabled={statusLoading || disabled}
      style={{ height: "30px" }}
      className={cn(
        "flex items-center justify-center gap-4 border border-transparent border-primary-500 duration-300 text-sm px-8 cursor-pointer border-transparent  font-semibold hover:border-primary-500 rounded-full   md:px-5 ",
        className
      )}
    >
      {statusLoading && (
        <span className="">
          <FiRefreshCcw className="animate-spin text-xs" />
        </span>
      )}
      <span className={`${statusLoading && ""}`}>
        {statusLoading ? "Chargement" : label}
      </span>
    </button>
  );
}
