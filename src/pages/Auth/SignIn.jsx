import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { setUser } from "../../store/actions/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const actions = useStoreActions({ setUser });

  const handleSignIn = async () => {
    await dispatch(setUser(userDetails));
    setUserDetails({
      email: "",
      password: "",
    });
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div>
      SignIn Page
      <div>
        <Input name="email" placeholder="email" value={userDetails.email} onChange={handleChange} />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <Button buttonText="Sign In" onClick={handleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
