import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormFieldsOutput } from "@/app/login/page";
import InputField from "../reusable/InputField";
import AuthButtons from "../reusable/AuthButtons";

interface SignUpLeftProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<FormFieldsOutput>;
  errors: FieldErrors<FormFieldsOutput>;
}

const SignUpLeft: React.FC<SignUpLeftProps> = ({ isLogin, setIsLogin, register, errors }) => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-1 w-full">
      {!isLogin && (
      <InputField<FormFieldsOutput> name="name" register={register} errors={errors} placeholder="Name"/>)}
      <InputField<FormFieldsOutput> name="email" register={register} errors={errors} placeholder="Email"
        type="email"/>
      <InputField<FormFieldsOutput>name="password" register={register} errors={errors} placeholder="Password"
        type="password"/>
      <AuthButtons isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default SignUpLeft;


