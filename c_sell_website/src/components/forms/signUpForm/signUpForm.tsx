import { Form, Input, Button, message } from 'antd';
import React, { useState, useContext } from 'react';
import { CONTACT_BG } from "../../shared/constants";
import { emailPasswordSignUp, signInWithGoogle, createUserDocument } from '../../../utils/firebase';

const SignUpForm: React.FC = () => {
    const [form] = Form.useForm();
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = async (values: { email: string; password: string; name: string }) => {
        const { email, password, name } = values;
        try {
            const user = await emailPasswordSignUp(email, password, name);

            await createUserDocument(user, { displayName: name });

            message.success('You have successfully signed up!');
            setIsFormVisible(false);
        } catch (error: any) {
            message.error(error.message || 'Signup failed');
            console.error('Signup error:', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            await createUserDocument(user);
            message.success('Google sign-in successful!');
        } catch (error: any) {
            message.error(error.message || 'Google sign-in failed');
            console.error('Google sign-in error:', error);
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