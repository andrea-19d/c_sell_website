import { Form, Input, Button, message } from "antd";
import { signInWithEmailPassword, signInWithGooglePopup } from "../../../utils/firebase/firebase.utils.js";
import { useState } from "react";
import {CONTACT_BG} from "../../constants/constants.jsx";

const SignInForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        const { email, password } = values;
        setLoading(true);
        try {
            const user = await signInWithEmailPassword(email, password);
            message.success(`Welcome back, ${user.email}!`);
        } catch (error) {
            message.error("Error during sign-in: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            message.success(`Welcome back, ${user.displayName || "User"}!`);
        } catch (error) {
            message.error("Error during Google sign-in: " + error.message);
        }
    };

    return (
        <div className="min-w-[40%] flex justify-center" style={{ backgroundImage: CONTACT_BG }}>
            <div className="w-[400px] justify-center content-center">
                <Form
                    form={form}
                    name="sign_in_form"
                    onFinish={handleSubmit}
                    initialValues={{}}
                    layout="vertical"
                >
                    <Form.Item
                        name="email"
                        label={<span className="text-white">Email</span>}
                        required={false}
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Please enter a valid email!" },
                        ]}
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
                        name="password"
                        label={<span className="text-white">Password</span>}
                        required={false}
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password
                            className="!bg-neutral-900/60 !backdrop-blur-lg !text-sm !text-white !border-b !border-white !placeholder-white
                                !focus:outline-none !focus:border-neutral-400"
                            style={{
                                color: "#fff",
                                borderLeft: "none",
                                borderRight: "none",
                                borderTop: "none",
                            }}
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            className="!h-[40px] !w-full !text-neutral-50 !bg-neutral-900 !border-2 !border-gray-500 !text-sm !cursor-pointer hover:!bg-neutral-200 hover:!text-neutral-900 hover:!border-neutral-950 transition-all"
                            loading={loading}
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="mx-2 text-gray-400">OR</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>

                <Button
                    type="default"
                    block
                    className="!h-[40px] !text-neutral-50 !bg-neutral-700 !border-2 !border-gray-500 !text-sm !cursor-pointer hover:!bg-neutral-200 hover:!text-neutral-900 hover:!border-neutral-950 transition-all"
                    onClick={handleGoogleSignIn}
                >
                    Sign In with Google
                </Button>
            </div>
        </div>
    );
};

export default SignInForm;
