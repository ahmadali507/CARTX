import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
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

const ForgetPassword = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        newPass: '',
        ConfirPass: '', // Fixing the typo in field name (if any backend issue occurs)
    });
    const [response, setResponse] = useState<boolean | null | undefined>(null);
    const [showDialogue, setShowDialogue] = useState('');

    const submitForm = (e:any) => {
        e.preventDefault(); // Prevent form from reloading the page

        const requestUrl = 'http://localhost:8000/auth/forget-password'; // Ensure this matches the backend route
        const requestData = formData;
        axios.post(requestUrl, requestData)
            .then((res) => {
                console.log(res.data);
                setResponse(true);
                setShowDialogue('Password has been reset successfully');
                navigate('/signIn')
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
        <div className='flex flex-row justify-center border-2 border-black min-w-screen min-h-screen items-center bg-gradient-to-br from-slate-700 to-black' >
            <form onSubmit={submitForm}>
                <Card className="border-2 border-transparent shadow-xl  hover:shadow-slate-600 w-[30vw] justify-center text-center text-foreground backdrop-blur-lg bg-slate-900">
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
                                    onChange={handleChange}
                                    className="bg-slate-100 placeholder:font-mono"
                                    value={formData.username}
                                    name="username"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Email</Label>
                                <Input
                                    placeholder="Confirm your email"
                                    onChange={handleChange}
                                    className="bg-slate-100 placeholder:font-mono"
                                    value={formData.email}
                                    name="email"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">New Password</Label> {/* Update the label */}
                                <Input
                                    placeholder="Enter your new password" /* Update the placeholder */
                                    onChange={handleChange}
                                    className="bg-slate-100 placeholder:font-mono"
                                    value={formData.newPass}
                                    name="newPass"
                                    type="password"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Label className="text-1xl font-semibold text-white">Confirm Password</Label> {/* Update the label */}
                                <Input
                                    placeholder="Confirm your new password" /* Update the placeholder */
                                    onChange={handleChange}
                                    className="bg-slate-100 placeholder:font-mono"
                                    value={formData.ConfirPass}
                                    name="ConfirPass"
                                    type="password"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-[20vw] justify-center text-white bg-green-600 hover:bg-red-700 " type="submit">Change Password</Button>
                    </CardFooter>
                    <CardFooter className="flex flex-col">
                        <Button className='w-[20vw]  bg-green-600 hover:bg-red-700'>
                            <Link to='/auth/signIn' className=' text-white'>Sign In</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default ForgetPassword;
