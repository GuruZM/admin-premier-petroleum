import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Input ,Button} from "@nextui-org/react";
import fuel from '../../../assets/images/fuel2.jpg';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
 
 

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        // <GuestLayout>
        <>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div class="  min-h-screen  mx-auto">
			<div class="flex justify-center   ">
			 
				<div class="w-full   h-screen flex">
				 
					<div
						class="w-full   bg-cover  hidden lg:block lg:w-1/2  bg-black rounded-l-lg"
						Style={`background-image: url(${fuel});`}
					>
                        <div className='h-full bg-black/50'>

                        </div>

                    </div>
				 
					<div class="w-full flex flex-col justify-center first: lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						
                      <div className='text-center mx-auto'>
                      <Link href="/">
                    <ApplicationLogo className="w-20 h-20 mx-auto fill-current text-gray-500" />
                             </Link>
                      </div>
                      <h3 class="pt-4 font-semi-bold text-2xl pb-5 text-center">Welcome Back!</h3>
						<form onSubmit={submit}  class="px-8 pt-6 pb-8 md:p-20  mb-4 bg-white rounded">
							<div class="">
                           {/* username */}
                           <div>
                           <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                                
                </div>

							</div>
							<div class="mb-4">
                            <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
							</div>
                            <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>
							<div class="my-6 text-center">
                            <Button color="primary" type='submit' disabled={processing} isLoading={processing} className='w-full' variant="shadow">
       Login
      </Button> 
							</div>
							<hr class="mb-6 border-t " />
                            <p className='text-center text-sm text-zinc-400 w-full mx-auto '>
                                Crafted By Resonantt
                            </p>
                            {/* <a
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </a> */}
						</form>
					</div>
				</div>
			</div>
		</div>
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
            </>
        // </GuestLayout>
    );
}
