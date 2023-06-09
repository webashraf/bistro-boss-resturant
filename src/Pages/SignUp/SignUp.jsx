import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
    LoadCanvasTemplate,
    loadCaptchaEnginge,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialSignIn from "../../Shared/SocialSignIn/SocialSignIn";





const SignUp = () => {
  const { createUserEmailAndPass, updateUserProfile, user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const captchaRef = useRef(null);
  const [loginBtn, setLoginBtn] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  // Handle form //
  const onSubmit = (data) => {
    console.log(data);
    createUserEmailAndPass(data.email, data.password)
      .then((result) => {
        console.log(result);
        updateUserProfile(data.name, data.photo_url)
          .then(result => {
            console.log(result)
            logOut()
              .then(result => console.log(result))
              .then(data => console.log(data))
          })
          .catch(error => console.log(error))

        const user = { name: data.name, email: data.email }
        fetch(`https://bistro-boss-server-mocha.vercel.app/user`, {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => console.log(data))




      })
      .catch((error) => console.log(error));
  };



  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);


  useEffect(() => {
    user && navigate('/')

  }, [user])

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>BISTRO BOSS | Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-warning">Field is required!!</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("photo_url", { required: true })}
                name="photo_url"
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {errors.photo_url && (
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
              {errors.password?.type === "required" && (
                <p className="text-warning">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-warning">Password is Sort</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-warning">Password is Long</p>
              )}
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
          </form>
          <div className="form-control mt-6">
            <SocialSignIn></SocialSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
