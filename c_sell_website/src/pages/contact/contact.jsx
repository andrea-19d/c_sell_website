import Banner from "../../components/common/banner.jsx";
import ContactForm from "../../components/forms/contact_form/contact.jsx";

const Contact = () => {
    return (
        <div className="contact-page-container flex flex-col bg-black" >
            <Banner page_title={"Contact Us"} />
            <div className="flex flex-row justify-center items-center gap-4 px-4 flex-wrap">
                <img
                    src="/src/assets/4.jpg"
                    alt="image"
                    className="w-[35%] h-auto rounded-lg shadow-md"
                />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
