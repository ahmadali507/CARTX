import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//defining a zod schema for the username and email and password...
const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Minimum 8 letters required" }),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUp = () => {
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
    const requestUrl = "http://localhost:8000/auth/register";
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
    <div className="flex flex-row justify-center border-2 border-black min-w-screen min-h-screen items-center bg-gradient-to-br from-slate-700 to-black">
      <form onSubmit={handleSubmit(submitForm)}>
        <Card className="border-2 border-transparent shadow-xl  hover:shadow-slate-600 w-[30vw] justify-center text-center text-foreground backdrop-blur-lg bg-slate-900">
          <CardHeader>
            <CardTitle className="text-2xl mb-4 text-green-800">
              Welcome to WEBSITE
            </CardTitle>
            <CardDescription className="text-center text-1xl font-bold">
              SIGN UP
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center gap-4">
              {response !== null && (
                <div className={response ? "text-violet-300" : "text-red-300"}>
                  {showDialogue}
                </div>
              )}
              <div className="flex flex-col">
                <Label className="text-1xl font-semibold text-white">
                  Username
                </Label>
                <Input
                  placeholder="Enter your username"
                  className="bg-slate-100 placeholder:font-mono"
                  {...register("username")}
                />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
              </div>

              <div className="flex flex-col">
                <Label className="text-1xl font-semibold text-white">
                  Email
                </Label>
                <Input
                  placeholder="Enter your email"
                  className="bg-slate-100 placeholder:font-mono"
                  {...register("email")}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col">
                <Label className="text-1xl font-semibold text-white">
                  Password
                </Label>
                <Input
                  placeholder="Enter your password"
                  className="bg-slate-100 placeholder:font-mono"
                  type="password"
                  {...register("password")}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              className="w-[20vw] justify-center bg-red-700"
              type="submit"
            >
              SIGN UP
            </Button>
          </CardFooter>
          <CardFooter className="flex flex-col">
            <div className="text-white">
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

export default SignUp;
