"use client";

import { useForm } from "react-hook-form";
import { User, Mail, Lock, Rocket } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();

  const password = watch("password");
  const router = useRouter();
  const [error, setError] = useState()
  const onSubmit = async (data: SignUpFormData) => {
  try {
    const res = await axios.post("/api/auth/sign-up", data);

    if(res.data.success){
        router.replace("/sign-in")
    }
  } catch (error: any) {
    console.log(error.response?.data || error.message);
    setError(error.message)
  }
};

  return (
    <section className="min-h-screen bg-[#F9F9FB] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-2xl border border-gray-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        
        {/* LEFT → Sign Up Form */}
        <div className="p-12 lg:p-16 text-[#1F1B32] flex flex-col justify-center">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Create Your Account 🚀
          </h2>
          <p className="text-[#313149]/70 mb-10 font-medium">
            Join <b>Our Crazy Code</b> and start your learning journey today.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {error && (
            <div className="w-full bg-red-50 border border-red-200 text-red-600 text-sm font-medium px-4 py-2 rounded-lg">
              {error}
            </div>
          )}
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/80">
                Full Name
              </label>
              <div className="flex items-center gap-3 bg-[#F9F9FB] rounded-xl p-3 border border-[#1F1B32]/5 focus-within:border-[#6366f1] transition-colors">
                <User className="w-5 h-5 text-[#6366f1]" />
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-transparent outline-none font-medium text-[#1F1B32]"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/80">
                Confirm Password
              </label>
              <div className="flex items-center gap-3 bg-[#F9F9FB] rounded-xl p-3 border border-[#1F1B32]/5 focus-within:border-[#6366f1] transition-colors">
                <Lock className="w-5 h-5 text-[#6366f1]" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none font-medium text-[#1F1B32]"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6366f1] text-white py-3 rounded-xl font-bold text-lg
              shadow-xl shadow-indigo-500/30 hover:bg-[#4f46e5] transition-all
              flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Rocket className="w-5 h-5" />
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </button>

            {/* Redirect to Sign In */}
            <p className="text-center text-sm text-[#313149]/80 font-medium">
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="text-[#6366f1] font-bold hover:underline"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>

        {/* RIGHT → Dummy Illustration */}
        <div className="hidden lg:flex items-center justify-center bg-[#1F1B32] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/40 to-transparent" />

          <div className="relative z-10 text-center px-10">
            <div className="text-7xl mb-6">✨</div>
            <h3 className="text-3xl font-bold text-white mb-4 font-heading">
              Start Your Journey
            </h3>
            <p className="text-white/70 text-lg max-w-sm">
              Learn coding, AI, and entrepreneurship with a global community of
              young innovators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
