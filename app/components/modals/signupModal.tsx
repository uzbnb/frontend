'use client'

import Modal from "./modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../forms/customButton";
import useSignupModal from "@/app/hooks/useSignupModal";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter()

    const signupModal = useSignupModal()

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2,
        }

        const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)
            
            signupModal.close()

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors)
        }
    }

    const content = (
        <>
            <form action={submitSignup} className="space-y-4" >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-uzbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )
                })}

                <CustomButton 
                    label="Sign up"
                    onClick={submitSignup}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;