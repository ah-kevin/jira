import { useState } from "react";
import { RegisterContainer } from "./register";
import { LoginContainer } from "./login";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      {isRegister ? <RegisterContainer /> : <LoginContainer />}
      <button onClick={() => setIsRegister(!isRegister)}>
        {" "}
        切换到{isRegister ? "登陆" : "注册"}
      </button>
    </div>
  );
};
