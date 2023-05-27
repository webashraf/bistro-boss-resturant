import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../authProvider/AuthProvider";
const Login = () => {
  const { createUserEmailAndPass, createUserWithGoogle } =
    useContext(AuthContext);
  const captchaRef = useRef(null);
  const [loginBtn, setLoginBtn] = useState(true);
  const handelForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUserEmailAndPass(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
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
  const signUpWithGoogle = () => {
    createUserWithGoogle()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
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
          <form onSubmit={handelForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
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
                disabled={loginBtn}
                type="submit"
                className="btn btn-primary"
                value="Login"
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={signUpWithGoogle} className="btn">
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
