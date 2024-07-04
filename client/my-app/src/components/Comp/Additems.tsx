import { useState } from 'react'
import Axios from 'axios'
import { useQueryClient, useMutation } from 'react-query'

type FormData = {
    name: string | undefined, 
    price: string | undefined, 
    description: string | undefined,
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
    });

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const additem = async () => {
        try {
            const requestURL = 'http://localhost:8000/api/additem';
            const data = new FormData();
            data.append('name', formData.name || '');
            data.append('price', formData.price || '');
            data.append('description', formData.description || '');
            data.append('category', formData.category || '');
            if (formData.photo) {
                data.append('photo', formData.photo);
            }

            const response = await Axios.post(requestURL, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: additem,
        onSuccess: () => {
            queryClient.invalidateQueries('items');
        }
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        mutate();
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
