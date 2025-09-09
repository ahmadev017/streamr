import { FieldErrors, UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder: string;
  type?: string;
}

const InputField = <T extends FieldValues>({
  name,
  register,
  errors,
  placeholder,
  type = "text",
}: InputFieldProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="border rounded-md p-2"
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {String(errors[name]?.message)}
        </span>
      )}
    </div>
  );
};

export default InputField;

