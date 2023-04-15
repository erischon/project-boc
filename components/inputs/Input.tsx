"use client";

import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

/**
 * @description Input component
 */
const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className=" relative w-full my-3 border-b-2 focus-within:border-cyan-700">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`block w-full appearance-none focus:outline-none bg-transparent`}
      />

      <label className={`absolute top-0 -z-1 origin-0 text-neutral-400`}>
        {label}
      </label>
    </div>
  );
};

export default Input;
