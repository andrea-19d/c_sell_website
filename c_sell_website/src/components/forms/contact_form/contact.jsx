import { Form, Input, Button, message } from 'antd';
import { useState } from 'react'; // Import useState hook
import { CONTACT_BG } from "../../constants/constants.jsx";

const ContactForm = () => {
    const [form] = Form.useForm();
    const [isFormVisible, setIsFormVisible] = useState(true); // State to control form visibility

    const handleSubmit = (values) => {
        // Handle form submission
        message.success('Your message has been sent!');
        console.log(values);

        // Hide the form after successful submission
        setIsFormVisible(false);
    };

    return (
        <div className=" min-w-[60%] min-h-[471px] flex items-center justify-center" style={{ backgroundImage: CONTACT_BG }}>
            <div className="w-[400px] justify-center content-center">
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
                            label={<span className="text-white">Name</span>}
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input placeholder="Your name" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={<span className="text-white">Email</span>}
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please input a valid email!' },
                            ]}
                        >
                            <Input placeholder="Your email" />
                        </Form.Item>

                        <Form.Item
                            name="message"
                            label={<span className="text-white">Message</span>}
                            rules={[{ required: false, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea placeholder="Your message" rows={4} />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                className="!h-[50px] !text-neutral-50 !bg-neutral-900 !border-2 !border-gray-500 !text-xl !cursor-pointer hover:!bg-neutral-200 hover:!text-neutral-900 hover:!border-neutral-950 transition-all"
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
