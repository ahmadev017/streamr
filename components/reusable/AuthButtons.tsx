import LoginButton from "./LoginButton";
import LoginSignup from "./LoginSignup";

interface AuthButtonsProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ isLogin, setIsLogin }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
     {isLogin ?
      <LoginButton name="Login" variant="customRed" size="default"/>
      : 
      <LoginButton name="Sign up" variant="customRed" size="default"/>
     }
    <p className="w-full text-center">or</p>
    <LoginButton name="Continue with google" variant="customOrange" size="sm"/>
    <div className="flex flex-col gap-0.5 my-2">
      {isLogin ?
      <LoginSignup setIsLogin={setIsLogin} title='Don&apos;t have an account?' name='Signup'action={false}/>
      :
      <LoginSignup setIsLogin={setIsLogin} title='Already have an account?' name='Login'action={true}/>
      }
      </div>
    </div>
  );
};

export default AuthButtons;
