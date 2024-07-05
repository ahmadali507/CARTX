import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const SignIn = () => {

    
    const [response, setresponse] = useState(false); 
    const [showDialogue, setShowDialogue] = useState(''); 

    const [formdata, setformData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate(); 

     
    const submitform = (e:any)=>{

        e.preventDefault(); 
        const requestUrl = 'http://localhost:8000/auth/signIn';
        const reqData = formdata; 
        axios.post(requestUrl, reqData).then((res) =>{
            console.log(res)
            setresponse(true); 
            setShowDialogue("Logged In Successful"); 
            navigate('/')
            
        }).catch(err =>{
            console.log(err)
            setresponse(false);
            setShowDialogue(err.response?.data?.error)
        })
    }

    const handleChange = (e:any) =>{
        setformData({
         ...formdata, 
         [e.target.name] : e.target.value, 
        });
    }

    return (
        <div className='flex flex-row justify-center border-2 border-black min-w-screen min-h-screen items-center bg-gradient-to-br from-slate-700 to-black'>
            <form onSubmit={submitform}>

                <Card className="border-2 border-transparent shadow-xl  hover:shadow-slate-600 w-[30vw] justify-center text-center text-foreground backdrop-blur-lg bg-slate-900">
                    <CardHeader>
                        <CardDescription className="text-center text-2xl font-bold text-white">
                            SIGN IN
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col justify-center gap-4'>
                            {
                                (response!==null) && <div className={(response) ? 'text-violet-500 ' : 'text-red-300'}>

                                    {showDialogue}

                                </div>
                            }
                            <div className='flex flex-col'>
                                <Label className=" text-1xl font-semibold text-white">Email</Label>
                                <Input placeholder="enter your email" onChange = {handleChange} className="bg-slate-100 placeholder:font-mono" name = 'email' value = {formdata.email}></Input>
                            </div>

                            <div className='flex flex-col  '>
                                <Label className=" text-1xl font-semibold text-white">Password</Label>
                                <Input placeholder="enter your password" onChange = {handleChange} className="bg-slate-100 placeholder:font-mono" name = 'password' value = {formdata.password}></Input>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col pb-16">
                        <Button className="w-[20vw] justify-center mt-4 bg-green-600 hover:bg-red-700" type = "submit"> SIGN In </Button>
                        <Button className = " mt-4 bg-green-600 hover:bg-red-700">
                         <Link to='/auth/forget-password' className='text-slate-300 w-[17.6vw] justify-center text-1xl font-semibold'>Forget Password</Link>
                        </Button>
                    </CardFooter>
                   

                </Card>

            </form>
        </div>
    )
}

export default SignIn
