import React, { useState } from 'react'
import Header from './Header';
import { Formik } from 'formik';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }


  return (
    <div>
        <Header />
        <div className='absolute brightness-50 bg-cover'>
            <img
             src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
             alt='bg img'
            />
        </div>
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.name && !isSignInForm) {
                    errors.name = 'Please enter a Name';
                }
                if (!values.email) {
                    errors.email = 'Please enter a email address';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Please enter a password';
                } else if (values.password.length <= 4) {
                    errors.password = 'Password must be minimum 5 characters';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
        <form className='absolute w-1/3 p-12 bg-black my-20 mx-auto right-0 left-0 text-white bg-opacity-70 rounded' onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm ? 
            <>
                <input
                    placeholder='Name'
                    className='p-4 my-4 w-full bg-slate-800 rounded' 
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <p className='text-sm pb-1 text-red-500'>{errors.name && touched.name && errors.name}</p>
            </> : ''}
            <input
                placeholder='Email'
                className='p-4 my-4 w-full bg-slate-800 rounded' 
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            <p className='text-sm pb-1 text-red-500'>{errors.email && touched.email && errors.email}</p>

            <input
                placeholder='Password'
                className='p-4 my-4 w-full bg-slate-800 rounded' 
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            <p className='text-sm pb-1 text-red-500'>{errors.password && touched.password && errors.password}</p>

            <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <div className='flex justify-between text-slate-400'>
                <div><input type='checkbox' label="Remember Me"/>Remember Me</div>
                <div>Need Help?</div>
            </div>
            <div className='flex justify-between'>
                {isSignInForm ? 
                <div disabled={isSubmitting} className='pt-10 text-slate-400'>New to Netflix? <span className='hover:underline cursor-pointer text-white' onClick={toggleSignInForm}>Sign up now.</span></div>
                 : 
                 <div disabled={isSubmitting} className='pt-10 text-slate-400'>Already a user? <span className='hover:underline cursor-pointer text-white' onClick={toggleSignInForm}>Sign in here.</span></div>
                }
            </div>
        </form>
        )}
        </Formik>
    </div>
  )
}

export default Login;