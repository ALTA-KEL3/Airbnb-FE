import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  loading?: boolean;
  onClickTrip?: () => void;
}

const CustomButton: FC<ButtonProps> = ({
  id,
  label,
  loading,
  onClickTrip,
  ...props
}) => {
  return (
    <button
      id={id}
      disabled={loading}
      onClick={onClickTrip}
      className={`rounded-xl bg-color4 py-2 text-[16px] font-medium capitalize tracking-wider text-color1 hover:bg-color3 hover:text-white disabled:cursor-not-allowed disabled:bg-zinc-400 ${loading && "cursor-not-allowed bg-zinc-400 text-zinc-800"
        }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default CustomButton;
