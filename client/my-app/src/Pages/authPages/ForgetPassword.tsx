import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ForgetPassSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
    email: z.string().email({ message: "Email format is not correct" }),
    newPass: z.string().min(8, { message: "Minimum 8 characters required" }),
    ConfirPass: z.string().min(8, { message: "Minimum 8 characters required" }),
}).refine(data => data.newPass === data.ConfirPass, {
    message: "Passwords do not match",
    path: ['ConfirPass']
});

type ForgetPassSchemaT = z.infer<typeof ForgetPassSchema>;

const ForgetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgetPassSchemaT>({
        resolver: zodResolver(ForgetPassSchema)
    });

    const navigate = useNavigate();
    const [response, setResponse] = useState<boolean | null>(null);
    const [showDialogue, setShowDialogue] = useState('');

    const submitForm = async (data: ForgetPassSchemaT) => {
        try {
            const requestUrl = 'http://localhost:8000/auth/forget-password';
            const res = await axios.post(requestUrl, data);
            // console.log(res.data);
            setResponse(true);
            setShowDialogue('Password has been reset successfully');
            navigate('/signIn');
        } catch (err : any) {
            setShowDialogue(err.response?.data?.error || 'An error occurred');
            setResponse(false);
        }
    };

    return (
        <div className='flex flex-row justify-center border-2 border-black min-w-screen min-h-screen items-center bg-gradient-to-br from-slate-700 to-black'>
            <form onSubmit={handleSubmit(submitForm)}>
                <Card className="border-2 border-transparent shadow-xl hover:shadow-slate-600 w-[30vw] justify-center text-center text-foreground backdrop-blur-lg bg-slate-900">
                    <CardHeader>
                        <CardDescription className="text-2xl text-center font-bold text-white">
                            Change Your Password
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col justify-center gap-4'>
                            {response !== null && (
                                <div className={response ? 'text-violet-300' : 'text-red-300'}>
                                    {showDialogue}
                                </div>
                            )}
                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Username</Label>
                                <Input
                                    placeholder="Confirm your username"
                                    className="bg-slate-100 placeholder:font-mono"
                                    {...register('username')}
                                />
                                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Email</Label>
                                <Input
                                    placeholder="Confirm your email"
                                    className="bg-slate-100 placeholder:font-mono"
                                    {...register('email')}
                                />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">New Password</Label>
                                <Input
                                    placeholder="Enter your new password"
                                    className="bg-slate-100 placeholder:font-mono"
                                    type="password"
                                    {...register('newPass')}
                                />
                                {errors.newPass && <span className="text-red-500">{errors.newPass.message}</span>}
                            </div>
                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Confirm Password</Label>
                                <Input
                                    placeholder="Confirm your new password"
                                    className="bg-slate-100 placeholder:font-mono"
                                    type="password"
                                    {...register('ConfirPass')}
                                />
                                {errors.ConfirPass && <span className="text-red-500">{errors.ConfirPass.message}</span>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-[20vw] justify-center text-white bg-green-600 hover:bg-red-700" type="submit">Change Password</Button>
                    </CardFooter>
                    <CardFooter className="flex flex-col">
                        <Button className='w-[20vw] bg-green-600 hover:bg-red-700'>
                            <Link to='/auth/signIn' className='text-white'>Sign In</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ForgetPassword;
