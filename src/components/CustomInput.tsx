import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
}

const CustomInput = ({ id, type, placeholder, ...props }: InputProps) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className="input-border border-1 input h-10 w-11/12 max-w-full rounded-lg border-color3 bg-color1 px-4 py-0 font-normal text-color4 placeholder-slate-400 disabled:bg-slate-400 md:text-[14px] lg:text-[15px]"
      {...props}
    />
  );
};

export default CustomInput;
