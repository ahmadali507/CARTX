import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Email format is not correct" }),
  password: z.string().min(8, { message: "Minimum eight characters required" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const [response, setResponse] = useState<boolean | null>(null);
  const [showDialogue, setShowDialogue] = useState<string>("");
  const navigate = useNavigate();

  const submitForm = (data: LoginSchemaType) => {
    const requestUrl = "http://localhost:8000/auth/signIn";

    axios
      .post(requestUrl, data)
      .then((res) => {
        const { token, status } = res.data;
        if (token) {
          localStorage.setItem("token", token); // Store token in localStorage
          setResponse(true);
          setShowDialogue(status || "Logged In Successfully");
          navigate("/"); // Redirect to homepage or dashboard after login
        } else {
          setResponse(false);
          setShowDialogue("Token not received");
        }
      })
      .catch((err) => {
        console.error(err);
        setResponse(false);
        setShowDialogue(err.response?.data?.error || "An error occurred");
      });
  };

  return (
    <div className="min-h-[100dvh] bg-black flex items-center justify-center">
      <div className="mx-auto max-w-md space-y-6">
        <div className="card bg-gray-950 p-6 space-y-6 shadow-lg rounded-lg h-96">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-white">Sign In</h1>
              <p className="text-gray-400">
                Enter your email and password to access your account.
              </p>
            </div>
            <div className="space-y-4">
              {response !== null && (
                <div className={response ? "text-green-500" : "text-red-500"}>
                  {showDialogue}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-gray-700 text-white"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Link
                    to="/auth/forget-password"
                    className="text-sm font-medium underline underline-offset-4 hover:text-blue-500 text-gray-400"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-gray-700 text-white mb-10"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage