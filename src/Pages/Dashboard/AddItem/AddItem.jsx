import { useForm } from 'react-hook-form';
import useAxiosSecure from './../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2';
import HeadingTitle from '../../../Shared/HeadingTitle/HeadingTitle';


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [axiosSecure] = useAxiosSecure()
    const [axiosSecure] = useAxiosSecure();
    const VITE_IMG_UPLOAD_API = import.meta.env.VITE_IMG_UPLOAD_API;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_IMG_UPLOAD_API}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {

                if (imgResponse.status) {
                    const image = imgResponse.data.display_url;
                    const menuItem = data;
                    const { name, recipe, price, category } = data;
                    const newItem = { name, recipe, price: parseFloat(price), category, image: image }
                    menuItem.image = image;
                    console.log(newItem);
                    axiosSecure.post('/items', newItem)
                        .then(data => {

                            console.log("Item Post data = ", data.data.insertedId);
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset();
                            }
                        })
                }

                console.log('Image Response', imgResponse);
            })


        // console.log(data)
    };


    return (
        <div className='w-full'>
            <HeadingTitle title={"Add an item"} subTitle={'Whats New?'}></HeadingTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[600px] mx-auto space-y-3'>
                <div className="form-control w-full max-w-xl">
                    <label className="label text-lg font-bold">
                        <span className="label-text">Recipe name?</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder="Type here" className="input input-bordered w-full max-w-xl" />
                </div>
                <div className='flex gap-4 w-full max-w-xl'>
                    <div className='w-1/2'>
                        <label className="label text-lg font-bold">
                            <span className="label-text">Category?</span>
                        </label>
                        <select {...register("category", { required: true })} className="select select-bordered w-full">
                            <option disabled selected>Category</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>dessert</option>
                            <option>drink</option>
                        </select>
                    </div>
                    <div className='w-1/2'>
                        <label className="label text-lg font-bold">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true, maxLength: 12 })} placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='form-control w-full max-w-xl'>
                    <label className="label text-lg font-bold">
                        <span className="label-text">Recipe?</span>
                    </label>
                    <textarea className="textarea textarea-bordered" {...register("recipe", { required: true })} placeholder="Recipe"></textarea>
                </div>
                <div className='form-control w-full max-w-xl'>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                {/* <input className='btn btn-primary btn-block' type="submit" value="Submit" /> */}
                <button className='btn btn-primary btn-block' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddItem;