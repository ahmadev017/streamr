"use client";
import SignUpLeft from "@/components/LoginPage/SignUpLeft";
import { useLogin } from "@/context/LoginProvider";
import { LoginSchema, SignupSchema, LoginFields, SignupFields } from "@/lib/zodSchema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Page = () => {
  const { isLogin, setIsLogin } = useLogin();

  const form = useForm<LoginFields | SignupFields>({
    resolver: zodResolver(isLogin ? LoginSchema : SignupSchema),
    defaultValues: isLogin
      ? { identifier: "", password: "" }
      : { name: "", username: "", email: "", password: "" },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit = (data: LoginFields | SignupFields) => {
    if (isLogin) {
      console.log("Logging in with:", data as LoginFields);
    } else {
      console.log("Signing up with:", data as SignupFields);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 gap-6">
      <div className="w-90 text-center my-6">
        <h1 className="text-3xl sm:text-4xl font-bold">
          To continue, log in to Streamr.
        </h1>
      </div>
      <form className="flex sm:flex-row flex-col items-center justify-center gap-10 lg:gap-40 w-full px-1 md:px-10 lg:px-30" onSubmit={handleSubmit(onSubmit)}>
        <SignUpLeft isLogin={isLogin} setIsLogin={setIsLogin} register={register} errors={errors}/>
        <div className="relative w-full aspect-square sm:flex-1">
          <Image src="/guitar.png" alt="guitar" fill className="object-contain" />
        </div>
      </form>
    </div>
  );
};

export default Page;

