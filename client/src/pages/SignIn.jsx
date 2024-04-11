import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInSucess,
  signInStart,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({}); //Use state for handle the data

  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch(); // For use the global stament
  const navigate = useNavigate(); // To navigate to another page
  const handleChange = (e) => {
    //Funcion for handle the data
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() }); //Getting the data by ID
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }

    //Local host is 3000, and our server 5173 we create a proxxy to work with that
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), //Sending the data
      });

      const data = await res.json();
      if (data.sucess === false) {
        //Handling erros
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSucess(data));
        navigate("/"); //if the sign up is correct, send it to the sign in page
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 
            via-purple-500 to-pink-500 rounded-lg text-white"
            >
              Sahand's
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password
            or with Google
          </p>
        </div>
        {/* Right Side */}

        <div className="flex-1">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" /> <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
