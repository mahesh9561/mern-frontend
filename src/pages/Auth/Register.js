import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerApi } from '../../store/userSlice';
import { useNavigate } from "react-router";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pass, setPass] = useState('');
    const [imageUrl, setImageUrl] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('pass', pass);
            formData.append('image', imageUrl);

            for (let pair of formData.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }
            dispatch(registerApi(formData));
            setEmail('');
            setName('');
            setMobile('');
            setPass('');
            setImageUrl(null);
            navigate('/login');
        } catch (error) {

        }
    };

    return (
        <div className='flex justify-center items-center -mt-10 '>
            <div className=' bg-slate-50 shadow-xl p-10 rounded-xl w-[90%]'>
                <form enctype="multipart/form-data" method="POST">
                    <div className=' grid grid-cols-2 gap-4 py-3'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                placeholder='Please enter Name'
                                name='name'
                                value={name}
                                className=" w-full px-4 outline-none border p-2 rounded-xl" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                placeholder='Please enter Email Id'
                                name='email'
                                value={email}
                                className=" w-full px-4 outline-none border p-2 rounded-xl" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className=' grid grid-cols-2 gap-4 py-3'>
                        <div>
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text"
                                placeholder='Please enter Mobile'
                                name='mobile'
                                value={mobile}
                                className=" w-full px-4 outline-none border p-2 rounded-xl" onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="pass">Password</label>
                            <input type="text"
                                placeholder='Please enter Password'
                                name='pass'
                                value={pass}
                                className=" w-full px-4 outline-none border p-2 rounded-xl" onChange={(e) => setPass(e.target.value)} />
                        </div>
                    </div>

                    <div className=' py-3'>
                        <input
                            type="file"
                            name="image"
                            className="w-full px-4 outline-none border p-2 rounded-xl"
                            onChange={(e) => setImageUrl(e.target.files[0])}
                        />
                    </div>

                    <div>
                        <button
                            onClick={handleRegister}
                            type="submit"
                            className=' bg-gradient-to-tr from-blue-400 to-blue-500 shadow-md py-2 px-4 rounded-lg font-semibold text-base text-white'
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
