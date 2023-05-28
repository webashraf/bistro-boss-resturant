import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const SignUp = () => {
  const captchaRef = useRef(null);
  const [loginBtn, setLoginBtn] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  const handleCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setLoginBtn(false);
      // console.log(loginBtn);
      console.log("Matched");
    } else {
      setLoginBtn(true);
      console.log("not matched");
    }
    console.log(loginBtn);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-warning">Field is required!!</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password?.type === 'required' && <p className="text-warning">Password is required</p>}
               {errors.password?.type === 'minLength' && <p className="text-warning">Password is Sort</p>}
               {errors.password?.type === 'maxLength' && <p className="text-warning">Password is Long</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the text above"
                className="input input-bordered"
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-xs btn-primary"
              >
                Valid Captcha
              </button>
            </div>

            <div className="form-control mt-6">
              <input
                //   disabled={loginBtn}
                type="submit"
                className="btn btn-primary"
                value="Submit"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn">Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
