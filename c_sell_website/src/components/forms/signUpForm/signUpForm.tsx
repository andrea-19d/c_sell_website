import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import { User } from 'firebase/auth'; // Import Firebase's User type
import { CONTACT_BG } from "../../shared/constants";
import { createUserDocumentFromAuth, signInWithGooglePopup, registerWithEmailPassword } from "../../../utils/firebase/firebase.utils";

const SignUpForm: React.FC = () => {
    const [form] = Form.useForm();
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = async (values: { email: string; password: string; name: string }) => {
        const { email, password, name } = values;
        try {
            const userCredential = await registerWithEmailPassword(email, password, name);
            await createUserDocumentFromAuth(userCredential.user, { displayName: name });
            message.success('You have successfully signed up!');
            setIsFormVisible(false);
        } catch (error: any) {
            message.error('Error during sign-up: ' + error.message);
            console.error(error);
        }
    };


    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGooglePopup();
            const user = result.user as User; // Explicitly cast to User type
            await createUserDocumentFromAuth(user);
            console.log("User signed in and document created:", user);
        } catch (error: any) {
            console.error("Error during sign in:", error.message);
        }
    };

    return (
        <div className="min-w-[60%] flex justify-center" style={{ backgroundImage: CONTACT_BG }}>
            <div className="w-[400px] justify-center content-center">
                {isFormVisible ? (
                    <Form
                        form={form}
                        name="sign_up_form"
                        onFinish={handleSubmit}
                        layout="vertical"
                    >
                        <Form.Item
                            name="name"
                            label={<span className="text-white">Name</span>}
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input
                                className="!bg-neutral-900/60 !backdrop-blur-lg !border-b !border-white !text-white !placeholder-white !focus:outline-none !focus:!border-neutral-50"
                                style={{ border: 'none' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={<span className="text-white">Email</span>}
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please input a valid email!' },
                            ]}
                        >
                            <Input
                                className="!bg-neutral-900/60 !backdrop-blur-lg !border-b !text-white !placeholder-white !focus:outline-none !focus:border-neutral-400"
                                style={{ border: 'none' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label={<span className="text-white">Password</span>}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                className="!bg-neutral-900/60 !backdrop-blur-lg !text-white !border-b !placeholder-white !focus:outline-none !focus:border-neutral-400"
                                style={{ border: 'none' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            label={<span className="text-white">Confirm Password</span>}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                className="!bg-neutral-900/60 !backdrop-blur-lg !text-white !border-b !placeholder-white !focus:outline-none !focus:border-neutral-400"
                                style={{ border: 'none' }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-between items-center gap-4">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    className="!h-[50px] !text-white !bg-neutral-900 !border-gray-500 hover:!bg-neutral-200 hover:!text-black transition-all"
                                >
                                    Sign Up
                                </Button>
                                <Button
                                    type="default"
                                    block
                                    onClick={handleGoogleSignIn}
                                    className="!h-[50px] !text-white !bg-neutral-700 !border-gray-500 hover:!bg-neutral-200 hover:!text-black transition-all"
                                >
                                    Sign Up with Google
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                ) : (
                    <div className="flex items-center text-center w-[350px] border border-neutral-95 rounded-md p-6">
                        <h3>Thank you for signing up! Your account has been created successfully!</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUpForm;
