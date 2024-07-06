
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
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

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const [response, setResponse] = useState<boolean | null>(null);
  const [showDialogue, setShowDialogue] = useState("");

  const navigate = useNavigate();

  const submitForm = (data: LoginSchemaType) => {
    const requestUrl = "http://localhost:8000/auth/signIn";

    axios
      .post(requestUrl, data)
      .then((res) => {
        console.log(res);
        setResponse(true);
        setShowDialogue("Logged In Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setResponse(false);
        setShowDialogue(err.response?.data?.error || "An error occurred");
      });
  };

  return (
    <div className="flex flex-row justify-center border-2 border-black min-w-screen min-h-screen items-center bg-gradient-to-br from-slate-700 to-black">
      <form onSubmit={handleSubmit(submitForm)}>
        <Card className="border-2 border-transparent shadow-xl hover:shadow-slate-600 w-[30vw] justify-center text-center text-foreground backdrop-blur-lg bg-slate-900">
          <CardHeader>
            <CardDescription className="text-center text-2xl font-bold text-white">
              SIGN IN
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center gap-4">
              {response !== null && (
                <div className={response ? "text-violet-500" : "text-red-300"}>
                  {showDialogue}
                </div>
              )}
              <div className="flex flex-col">
                <Label className="text-1xl font-semibold text-white">
                  Email
                </Label>
                <Input
                  placeholder="Enter your email"
                  className="bg-slate-100 placeholder:font-mono"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
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
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col pb-16">
            <Button
              className="w-[20vw] justify-center mt-4 bg-green-600 hover:bg-red-700"
              type="submit"
            >
              SIGN IN
            </Button>
            <Button className="mt-4 bg-green-600 hover:bg-red-700">
              <Link
                to="/auth/forget-password"
                className="text-slate-300 w-[17.6vw] justify-center text-1xl font-semibold"
              >
                Forget Password
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SignIn;
