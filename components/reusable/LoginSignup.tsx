import React from 'react'


interface LoginSignupProps {
  action:boolean
  title:string
  name:string
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginSignup:React.FC<LoginSignupProps> = ({setIsLogin,title,name,action}) => {
  return (
    <p className="w-full text-center text-xs text-muted-foreground">{title}{" "}
            <button type="button" onClick={() => setIsLogin(action)} className="dark:text-white text-black font-bold cursor-pointer">
              {name}
            </button>
          </p>
  )
}

export default LoginSignup
