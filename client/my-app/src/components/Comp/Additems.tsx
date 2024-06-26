import React, { useState } from 'react'
import Axios from 'axios'
import {useQueryClient, useMutation} from 'react-query'


type FormData = {
    name : string | undefined, 
    price : string | undefined, 
    description : string | undefined,
    category: string | undefined, 
    photo: File | null,
}
const AddItems = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        price: '',
        description: '',
        category: '',
        photo: null,
    })

    const handleChange = (e:any) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    
    const additem = async(data: FormData) => {
        try {
            console.log('Adding item:');
            console.log(data);
            
            const requestURL = 'http://localhost:8000/api/additem'; 
            const response = await Axios.post(requestURL, data); 
            console.log(response.data); 
            
            
        } catch (error) {
            console.log(error); 
        }
        
        
        // Add your mutation logic here
    };

    const AddMutation = () =>{
        const queryClient = useQueryClient(); 
        return useMutation({ mutationFn : additem, 
            onSuccess : () => {
                queryClient.invalidateQueries('items');
            }
        })
    }
    const handleSubmit = (e:any):void => {
        const mutation = AddMutation(); 
        mutation.mutate(formData); 
        e.preventDefault();
    };
    
    
    const array = ['Laptop', 'Clothes', 'Tech'];

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product Description"
                        required
                    />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        {array.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;
