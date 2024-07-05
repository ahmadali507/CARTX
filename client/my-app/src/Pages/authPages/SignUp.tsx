import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [response, setResponse] = useState<boolean | undefined | null>(null); 
    const [showDialogue, setShowDialogue] = useState(''); 

    const submitForm = (e:any) => {
        e.preventDefault(); // Prevent form from reloading the page

        const requestUrl = 'http://localhost:8000/auth/register';
        const requestData = formData; 
        axios.post(requestUrl, requestData)
            .then((res) => {
                console.log(res.data);
                setResponse(true); 
                setShowDialogue('USER SIGNED UP SUCCESSFULLY');
            })
            .catch((err) => {
                setShowDialogue(err.response?.data?.error || 'An error occurred');
                setResponse(false);
            }); 
    };

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='flex flex-row justify-center border-2 border-black min-w-screen min-h-screen items-center bg-gradient-to-br from-slate-700 to-black'>
            <form onSubmit={submitForm}>
                <Card className="border-2 border-transparent shadow-xl  hover:shadow-slate-600 w-[30vw] justify-center text-center text-foreground backdrop-blur-lg bg-slate-900">
                    <CardHeader>
                        <CardTitle className="text-2xl mb-4 text-green-800">Welcome to WEBSITE</CardTitle>
                        <CardDescription className="text-center text-1xl font-bold">
                            SIGN UP
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
                                    placeholder="Enter your username"
                                    onChange={handleChange}
                                    className="bg-slate-100"
                                    value={formData.username}
                                    name="username"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Email</Label>
                                <Input
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    className="bg-slate-100"
                                    value={formData.email}
                                    name="email"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Password</Label>
                                <Input
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    className="bg-slate-100"
                                    value={formData.password}
                                    name="password"
                                    type="password"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-[20vw] justify-center bg-red-700" type="submit">SIGN UP</Button>
                    </CardFooter>
                    <CardFooter className="flex flex-col">
                        <div>
                            Already Signed Up? <Link to='/auth/signIn' className='text-blue-400'>Sign In</Link>
                        </div>
                    </CardFooter>
                </Card>            </form>
        </div>
    );
};

export default SignUp;
