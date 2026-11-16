import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import useauth from "../hooks/useauth";

function Register() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const { registerhandler, error, loading } = useauth();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const data = await registerhandler({
        name,
        email,
        password,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Your Account
          </h1>
          <p className="text-sm text-gray-500">
            Sign up and start exploring features tailored just for you.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="mt-8 space-y-5"
        >
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                required={true}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-900"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                required={true}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-900"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                required={true}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-900"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            {loading ? "Registering..." : "Get Started"}
          </button>

          <p className="text-center text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="text-indigo-700 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-700 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 font-medium text-indigo-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
