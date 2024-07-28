import { useState } from 'react';
import Axios from 'axios';
import { useQueryClient, useMutation } from 'react-query';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import toast, { Toaster } from 'react-hot-toast';

export type itemData = {
    name: string;
    price: number ;
    description: string;
    category: string;
    photo: File | null;
    brand : string ; 
};

const AddItems = () => {
    const [formData, setFormData] = useState<itemData>({
        name: '',
        price: 0,
        description: '',
        brand : '', 
        category: '',
        photo: null,
    });

    const [verifiedUser, setVerifiedUser] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const token = localStorage.getItem('token');
    const handleClick = () => {
        if (!token) {
            setVerifiedUser(false);
            toast.error('You need to login or signUp first')
        } else {
            setVerifiedUser(true);
        }
    };

    const additem = async () => {
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('price', formData.price.toString());
            data.append('description', formData.description);
            data.append('category', formData.category);
            data.append('brand', formData.brand.toLowerCase()); 
            if (formData.photo) {
                data.append('photo', formData.photo);
            }
            const requestURL = 'https://cartx-api.vercel.app/api/additem';
            const response = await Axios.post(requestURL, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response data:', response.data);
        } catch (error: any) {
            console.error('Error adding item:', error.message);
        }
    };
    const queryClient = useQueryClient();
    const mutation = useMutation(additem, {
        onSuccess: () => {
            queryClient.invalidateQueries('items');
        },
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate();
        setIsDialogOpen(false);
    };
    const array = ['Laptop', 'Clothes', 'Tech'];
    return (
        <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button className='text-[0.8rem] active:bg-red-700 active:text-white font-medium w-24 h-12 font-sans p-2 bg-slate-800 hover:bg-green-500 hover:text-slate-900 rounded-[20px]' onClick={handleClick}>
                        Add Items
                    </Button>
                </DialogTrigger>
                {verifiedUser && (
                    <DialogContent className='flex flex-col h-auto justify-center items-center gap-8 bg-transparent'>
                        <DialogHeader>
                            <DialogTitle className='text-center font-semibold text-white text-2xl'>Add Details</DialogTitle>
                            <DialogDescription className='text-slate-300 text-[1.2rem] text-center'>
                                Add the details of the item you want to add to your website.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <div className='flex flex-col items-center justify-center text-white'>
                                    Enter the name of the product
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Product Name"
                                        className='w-[140%] h-[40px] border-4 rounded-md bg-gray-400 border-slate-400 px-2 placeholder:text-gray-600 text-black'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col items-center justify-center text-white'>
                                    Enter Brand of the product.
                                    <input
                                        type="text"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        placeholder="Product's Brand"
                                        className='w-[140%] h-[40px] border-4 rounded-md bg-gray-400 border-slate-400 px-2 placeholder:text-gray-600 text-black'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col items-center justify-center text-white'>
                                    Enter the price of the product
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="Product Price"
                                        required
                                        className='w-[140%] h-[40px] border-4 rounded-md border-slate-400 bg-gray-400 px-2 placeholder:text-gray-600 text-black'
                                    />
                                </div>
                                <div className='flex flex-col items-center justify-center text-white'>
                                    Describe the features of the product.
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Product Description"
                                        className='w-[115%] h-[40px] border-4 rounded-md border-slate-400 px-2 bg-gray-400 placeholder:text-gray-600 text-black'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col items-center justify-center text-white'>
                                    Select the product Type.
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className=' w-[15rem] h-[3rem] border-4 border-slate-400 rounded-lg bg-gray-400 placeholder:text-gray-600 text-black'
                                    >
                                        <option value="" disabled>Select a category</option>
                                        {array.map((value, index) => (
                                            <option key={index} value={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                                Enter a single image of the product
                                <div className='flex flex-col items-center justify-center text-white'>
                                    <input
                                        type="file"
                                        name="photo"
                                        onChange={handleChange}
                                        className='w-[140%] h-[40px] border-4 rounded-md border-slate-400 px-2 bg-white text-black p-1'
                                        required
                                    />
                                </div>

                                <Button className='bg-red-500 mt-4 hover:bg-green-400 hover:text-black hover:font-mono' type="submit">Add Item</Button>
                            </div>
                        </form>
                    </DialogContent>
                )}
            </Dialog>
            <Toaster  toastOptions={{
                duration : 3000 , 
                style  : {
                    backgroundColor : 'whitesmoke', 
                    WebkitBackdropFilter : 'opacity(50%)',
                    color : 'gray', 
                    width : '40%', 
                    textAlign : 'center', 
                    fontSize : '1rem',
                    fontFamily : 'sans-serif', 
                    borderRadius : '1rem',
                    height : '5rem'
                }
            }}/>
        </div>
    );
};

export default AddItems;
