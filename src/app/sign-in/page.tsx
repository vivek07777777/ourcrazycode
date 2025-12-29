"use client";

import { useForm } from "react-hook-form";
import { Rocket, Mail, Lock, CodeXml, CheckCircle } from "lucide-react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface SignInFormData {
  email: string;
  password: string;
}
function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="bg-[#1F1B32]/95 backdrop-blur-md rounded-full py-3 px-6 flex items-center justify-between border border-white/10 shadow-2xl"
      >
        <Link href={"/"}>
          <div className="flex items-center gap-2 text-white font-medium">
            <div className="bg-[#6366f1] p-1.5 rounded-lg">
              <CodeXml className="w-5 h-5" />
            </div>
            <span className="font-heading text-lg">Our Crazy Code</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">
          {["Features", "Courses", "About", "Impact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6366f1] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href={"/sign-in"}>
            <button className="text-white/70 text-sm font-medium hover:text-white transition-colors">
              Sign In
            </button>
          </Link>
          <Link href={"#startuplaunchpad"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6366f1] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4f46e5] transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await axios.post("/api/auth/sign-in", data);
      if (res.data.success) {
        setIsSignedIn(true);
        setTimeout(() => {
          router.replace("/");
        }, 5000);
      }
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      setError(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#F9F9FB] flex items-center justify-center px-6">
      {isSignedIn && (
        <AnimatePresence>
          <>
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-[#6366f1]/20 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#6366f1]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#6366f1]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#1F1B32] mb-2">
                  Signed In Sucessfully
                </h3>

                <p className="text-[#313149]/70 mb-6">
                  You're all set! Let’s continue building your future with Our
                  Crazy Code.
                </p>

                <p className="w-full bg-[#6366f1] text-white py-3 rounded-xl font-bold hover:bg-[#4f46e5] transition">
                  You have become the early user.
                </p>
              </div>
            </motion.div>
          </>
        </AnimatePresence>
      )}
      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-2xl border border-gray-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <Navbar />
        {/* LEFT → Sign In Form */}
        <div className="p-12 lg:p-16 text-[#1F1B32] flex flex-col justify-center">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Welcome Back 👋
          </h2>
          <p className="text-[#313149]/70 mb-10 font-medium">
            Sign in to continue your journey with <b>Our Crazy Code</b>.
          </p>
          {error && (
            <div className="w-full bg-red-50 border border-red-200 text-red-600 text-sm font-medium px-4 py-2 rounded-lg mb-2">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/80">
                Email Address
              </label>
              <div className="flex items-center gap-3 bg-[#F9F9FB] rounded-xl p-3 border border-[#1F1B32]/5 focus-within:border-[#6366f1] transition-colors">
                <Mail className="w-5 h-5 text-[#6366f1]" />
                <input
                  type="email"
                  placeholder="you@gmail.com"
                  className="w-full bg-transparent outline-none font-medium text-[#1F1B32]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/80">
                Password
              </label>
              <div className="flex items-center gap-3 bg-[#F9F9FB] rounded-xl p-3 border border-[#1F1B32]/5 focus-within:border-[#6366f1] transition-colors">
                <Lock className="w-5 h-5 text-[#6366f1]" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none font-medium text-[#1F1B32]"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6366f1] text-white py-3 rounded-xl font-bold text-lg
              shadow-xl shadow-indigo-500/30 hover:bg-[#4f46e5] transition-all
              flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Rocket className="w-5 h-5" />
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="text-sm text-gray-400 font-bold">OR</span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>

            {/* Create account */}
            <p className="text-center text-sm text-[#313149]/80 font-medium">
              Don’t have an account?{" "}
              <a
                href="/sign-up"
                className="text-[#6366f1] font-bold hover:underline"
              >
                Create one
              </a>
            </p>
          </form>
        </div>

        {/* RIGHT → Dummy Image / Illustration */}
        <div className="hidden lg:flex items-center justify-center bg-[#1F1B32] relative">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/40 to-transparent" />

          {/* Dummy Illustration */}
          <div className="relative z-10 text-center px-10">
            <div className="text-7xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-4 font-heading">
              Build. Learn. Launch.
            </h3>
            <p className="text-white/70 text-lg max-w-sm">
              Join thousands of young innovators learning coding, AI, and
              entrepreneurship with Our Crazy Code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
