import { FieldErrors, UseFormRegister } from "react-hook-form";
import InputField from "../reusable/InputField";
import AuthButtons from "../reusable/AuthButtons";
import { SignupFields, LoginFields } from "@/lib/zodSchema/schema";

interface SignUpLeftProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<LoginFields | SignupFields>;
  errors: FieldErrors<LoginFields | SignupFields>;
}

const SignUpLeft: React.FC<SignUpLeftProps> = ({isLogin,setIsLogin,register,errors,}) => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-1 w-full">
      {isLogin ? (
        <InputField<LoginFields | SignupFields>name="identifier"register={register}errors={errors}
         placeholder="Username or Email"/>) : (
        <>
          <InputField<LoginFields | SignupFields>name="name"register={register}errors={errors}placeholder="Name"/>
          <InputField<LoginFields | SignupFields>name="username"register={register}errors={errors}placeholder="Username"/>
          <InputField<LoginFields | SignupFields>name="email"register={register}errors={errors}
          placeholder="Email"type="email"/>
        </>
      )}
      <InputField<LoginFields | SignupFields>name="password"register={register}errors={errors}      placeholder="Password"type="password"/>
      <AuthButtons isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default SignUpLeft;



