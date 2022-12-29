import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
// import { GoogleAuthProvider } from 'firebase/auth';


// import useToken from '../../hooks/useToken';
// import toast from 'react-hot-toast';
import UseTitle from '../hooks/UseTitle';

const Login = () => {
    UseTitle('Login')
    // const navigate = useNavigate()
    // const location = useLocation()

    // const from = location.state?.form?.pathname || "/"

    // const googleProvider = new GoogleAuthProvider();

    const { register, handleSubmit, formState: { errors } } = useForm();


    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    // console.log(loginUserEmail);

    // if (token) {
    //     navigate(from, { replace: true });
    // }




    const onSubmit = data => {
        // setLoading(true)
        // console.log(data)
        // setLoginUserEmail(data.email)
        // console.log(loginUserEmail)




    }

    // const handleForgetPassword = () => {
    //     // setLoading(true)
    //     if (!userEmail) {
    //         alert('Please enter your email')
    //         return
    //     }
    //     sendPasswordResetEmail(auth, userEmail)
    //         .then(() => {
    //             alert('password reset email sent')
    //             // setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             toast.error('Failed! please try again')
    //             // setLoading(false)
    //         })
    // }


    return (
        <div>
            <h2 className='text-center text-2xl font-bold  text-primary my-10'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-center text-primary mx-auto  w-1/3'>
                <input
                    placeholder='Email'
                    type='email'

                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("email", { required: true })}
                />

                {errors.email && <span>email is required</span>}

                <input
                    placeholder='Password'
                    type='password'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("password", { required: true })}
                />
                {errors.password && <span>Password is required</span>}



                <input
                    className='mt-10 font-medium border-2 border-primary  w-1/2 rounded mx-auto   p-2  bg-teal-500 hover:text-white'
                    type="submit"

                />


                <Link   >
                    <p className='text-center mt-4'>
                        <small className='text-primary font-bold hover:bg-teal-500 hover:text-white hover:p-1'>Forgot your password?</small>
                    </p>
                </Link>
                <p className='text-center'><small>Not registered yet?
                    <Link className=' text-primary font-bold  hover:bg-teal-500 hover:text-white hover:p-1' to='/signup'>Create an account
                    </Link></small>
                </p>

            </form>

            <h5 className='mx-auto text-center text-primary mt-6 font-medium'>---------------------------------or----------------------------------------</h5>

            <button
                className='border mt-10  bg-teal-500 hover:text-white border-primary flex px-7 py-2 text-xl rounded-lg font-medium mx-auto items-center'>
                <FaGoogle className='mr-5' />Login with Google
            </button>

        </div>
    );
};

export default Login;