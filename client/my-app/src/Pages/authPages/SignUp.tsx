import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Define a zod schema for the username, email, and password
const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Minimum 8 letters required" }),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const [response, setResponse] = useState<boolean | undefined | null>(null);
  const [showDialogue, setShowDialogue] = useState("");

  const submitForm = (data: SignUpSchemaType) => {
    const requestUrl = "https://cartx-api.vercel.app/auth/register";
    axios
      .post(requestUrl, data)
      .then((res) => {
        console.log(res.data);
        setResponse(true);
        setShowDialogue("USER SIGNED UP SUCCESSFULLY");
      })
      .catch((err) => {
        setShowDialogue(err.response?.data?.error || "An error occurred");
        setResponse(false);
      });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#1e293b] p-4">
      <form onSubmit={handleSubmit(submitForm)}>
        <Card className="w-96 border-2 border-transparent shadow-xl hover:shadow-slate-600 backdrop-blur-lg bg-slate-900">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-white">Sign Up TO CARTX</CardTitle>
            <CardDescription className="text-muted-foreground">Create your account to get started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {response !== null && (
              <div className={response ? "text-violet-300" : "text-red-300"}>
                {showDialogue}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Enter your username"
                className="bg-black text-white"
                {...register("username")}
              />
              {errors.username && <span className="text-red-500">{errors.username.message}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white"
                {...register("email")}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-black text-white"
                {...register("password")}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full bg-red-700" type="submit">
              Sign Up
            </Button>
            <div className="text-white mt-4">
              Already Signed Up?{" "}
              <Link to="/auth/signIn" className="text-blue-400 text-[1.4rem]">
                Sign In
              </Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SignUpPage;
