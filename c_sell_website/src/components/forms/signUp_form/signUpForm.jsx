import { Form, Input, Button, message } from 'antd';
import { useState } from 'react'; // Import useState hook
import { CONTACT_BG } from "../../constants/constants.jsx";
import { createUserDocumentFromAuth, signInWithGooglePopup, registerWithEmailPassword } from "../../../utils/firebase/firebase.utils.js"; // Adjust with your background image

const SignUpForm = () => {
    const [form] = Form.useForm();
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = async (values) => {
        const { email, password, name } = values;
        try {

            const userCredential = await registerWithEmailPassword(email, password, name);

            await createUserDocumentFromAuth(userCredential.user, { displayName: name });

            message.success('You have successfully signed up!');
            console.log(values);
            setIsFormVisible(false);
        } catch (error) {
            message.error('Error during sign-up: ' + error.message);
            console.error(error);
        }
    };


    const handleGoogleSignIn = async () => {
        try {
            const { user } = await signInWithGooglePopup();

            await createUserDocumentFromAuth(user);

            console.log("User signed in and document created:", user);
        } catch (error) {
            console.error("Error during sign-in:", error.message);
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
                        initialValues={{}}
                        layout="vertical"
                    >
                        <Form.Item
                            name="name"
                            label={<span className="text-white">Name</span>}
                            required={false}
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input
                                className="!bg-neutral-900/60 !backdrop-blur-lg !border-b !border-white !text-white !placeholder-white
                                !focus:outline-none !focus:!border-neutral-50"
                                style={{
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={<span className="text-white">Email</span>}
                            required={false}
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please input a valid email!' },
                            ]}
                        >
                            <Input
                                className="!bg-neutral-900/60 !backdrop-blur-lg !border-b !text-l !border-white !text-white !placeholder-white
                                !focus:outline-none !focus:border-neutral-400"
                                style={{
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label={<span className="text-white">Password</span>}
                            required={false}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                className="!bg-neutral-900/60 !backdrop-blur-lg !text-sm !text-white !border-b !border-white  !placeholder-white
                                !focus:outline-none !focus:border-neutral-400"
                                style={{
                                    color: "#fff",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label={<span className="text-white">Confirm Password</span>}
                            required={false}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                className="!bg-neutral-900/60 !backdrop-blur-lg !text-sm !border-b !border-white !text-white !placeholder-white
                                !focus:outline-none !focus:border-neutral-400"
                                style={{
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <div className="flex justify-between items-center gap-4">
                                {/* Standard Sign Up Button */}
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    onClick={handleSubmit}
                                    block
                                    className="!h-[50px] !w-[50%] !text-neutral-50 !bg-neutral-900 !border-2 !border-gray-500 !text-sm !cursor-pointer hover:!bg-neutral-200 hover:!text-neutral-900 hover:!border-neutral-950 transition-all"
                                >
                                    Sign Up
                                </Button>

                                {/* Google Sign Up Button */}
                                <Button
                                    type="default"
                                    block
                                    onClick={handleGoogleSignIn}
                                    className="!h-[50px] !w-[50%] !text-neutral-50 !bg-neutral-700 !border-2 !border-gray-500 !text-sm !cursor-pointer hover:!bg-neutral-200 hover:!text-neutral-900 hover:!border-neutral-950 transition-all"
                                    style={{ width: 'auto', flexGrow: 0 }}
                                >
                                    Sign Up with Google
                                </Button>
                            </div>
                        </Form.Item>

                    </Form>
                ) : (
                    <div className="flex items-center text-center w-[350px] border border-neutral-95 rounded-md p-6 ">
                        <h3>Thank you for signing up! Your account has been created successfully!</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUpForm;
