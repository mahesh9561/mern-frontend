import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../store/userSlice';
import { STATUS } from '../../utils/status';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userStatus, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (userStatus === STATUS.SUCCESS) {
            navigate('/home');
        }
    }, [userStatus, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = { email, pass };
        try {
            await dispatch(loginApi(user));
            setEmail('');
            setPass('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center -mt-10">
            <div className="bg-slate-50 shadow-xl p-10 rounded-xl w-[90%]">
                <form onSubmit={handleLogin}>
                    <div className="py-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Please enter Email Id"
                            name="email"
                            value={email}
                            className={`w-full px-4 outline-none border p-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="py-3">
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            placeholder="Please enter Password"
                            name="pass"
                            value={pass}
                            className={`w-full px-4 outline-none border p-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        />
                    </div>

                    {error && <h1 className="text-red-500 py-3">{error}</h1>} {/* Show error message in red */}

                    <div>
                        <button
                            type="submit"
                            className="bg-gradient-to-tr from-blue-400 to-blue-500 shadow-md py-2 px-4 rounded-lg font-semibold text-base text-white"
                            disabled={userStatus === STATUS.LOADING}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
