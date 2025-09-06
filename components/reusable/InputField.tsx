
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";


interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder: string;
  type?: string;
  className?: string;
}

const InputField = <T extends FieldValues>({
  name,
  register,
  errors,
  placeholder,
  type = "text",
  className = "",
}: InputFieldProps<T>) => {
  return (
    <div className="w-full">
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`bg-streamr/30 text-black dark:text-white dark:bg-secondary w-full ${className}`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">
          {String(errors[name]?.message)}
        </p>
      )}
    </div>
  );
};

export default InputField;
