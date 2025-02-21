import { Form, Input, Button, message } from 'antd';
import { useState } from 'react'; // Import useState hook
import { CONTACT_BG } from "../../shared/constants.js";

const ContactForm = () => {
    const [form] = Form.useForm();
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = (values) => {
        message.success('Your message has been sent!');
        console.log(values);

        setIsFormVisible(false);
    };

    return (
        <div className=" min-w-[40%] min-h-[471px] flex items-center justify-center" style={{ backgroundImage: CONTACT_BG }}>
            <div className="w-[500px] justify-center content-center">
                {isFormVisible ? (
                    <Form
                        form={form}
                        name="contact_form"
                        onFinish={handleSubmit}
                        initialValues={{}}
                        layout="vertical"
                    >
                        <Form.Item
                            name="name"
                            label={<span className="text-white text-sm">Name</span>}
                            required={false}
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input
                                placeholder="Your name"
                                className="!bg-neutral-900/60 !backdrop-blur-lg !text-sm !border-b !border-white !text-white !placeholder-white
                                !focus:outline-none !focus:!border-neutral-50"
                                style={{
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                }}/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={<span className="text-white text-sm">Email</span>}
                            required={false}
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please input a valid email!' },
                            ]}
                        >
                            <Input placeholder="Your email"
                                   className="!bg-neutral-900/60 !backdrop-blur-lg !text-sm !border-b !border-white !text-white !placeholder-white
                                !focus:outline-none !focus:border-neutral-400"
                                   style={{
                                       borderLeft: "none",
                                       borderRight: "none",
                                       borderTop: "none",
                                   }}/>
                        </Form.Item>

                        <Form.Item
                            name="message"
                            label={<span className="text-white text-sm">Message</span>}
                            rules={[{ required: false, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea
                                placeholder="Your message"
                                rows={4}
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
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                className="!h-[50px] !text-neutral-50 !bg-neutral-900 !border-2 !border-gray-500 !text-sm !cursor-pointer hover:!bg-neutral-200 hover:!text-neutral-900 hover:!border-neutral-950 transition-all"
                            >
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <div className="flex items-center text-center w-[350px]
                        border border-neutral-95 rounded-md p-6 ">
                        <h3>Thank you for submission! Your message has been sent successfully!</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
