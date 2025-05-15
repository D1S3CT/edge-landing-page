import React, { useState } from "react";
import Girl from "../Img/Girl.png";
import bg from "../Img/bg.png";

const ContactsComponent: React.FC = () => {
    // Состояния для полей формы
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string; privacy?: string }>({});

    // Валидация email простая
    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Очистка ошибок
        setErrors({});

        const newErrors: typeof errors = {};

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(email)) newErrors.email = "Email is invalid";
        if (!acceptedPrivacy) newErrors.privacy = "You must accept the Privacy policy";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Здесь можно отправить данные на сервер или обработать их
        alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);

        // Очистка формы
        setName("");
        setEmail("");
        setAcceptedPrivacy(false);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="flex bg-white flex-col my-0 mx-auto max-w-[85%] mt-[100px] rounded-[30px] py-[43px] pl-[7%]">
                <h1 className="text-[#38535D] text-[54px] max-w-[774px]">
                    Fill out the form to get a consultation or place an order
                </h1>
                <form className="flex flex-col gap-[26px] mt-[41px]" onSubmit={handleSubmit} noValidate>
                    <div className="flex flex-col gap-[13px] max-w-[781px]">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`border py-[14px] pl-[40px] text-2xl rounded-[4px] ${
                                errors.name ? "border-red-500" : "border-[#D6D6D6]"
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm ml-2">{errors.name}</p>}

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`border py-[14px] pl-[40px] text-2xl rounded-[4px] ${
                                errors.email ? "border-red-500" : "border-[#D6D6D6]"
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm ml-2">{errors.email}</p>}
                    </div>

                    <label className="flex gap-[10px] items-center max-w-[781px]">
                        <input
                            type="checkbox"
                            checked={acceptedPrivacy}
                            onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                            className="w-[18px] h-[18px]"
                        />
                        <p className="text-[1.19rem]">I accept Privacy policy</p>
                    </label>
                    {errors.privacy && <p className="text-red-500 text-sm ml-2 max-w-[781px]">{errors.privacy}</p>}

                    <button
                        type="submit"
                        className="z-1000 cursor-pointer max-w-[781px] py-[32px] text-2xl text-white bg-[#282829] rounded-[4px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-white hover:text-black"
                    >
                        SUBMIT FORM
                    </button>
                </form>
            </div>
            <img src={bg} width={1250} className="absolute top-[98px] right-[140px]" alt="Background" />
            <img src={Girl} width={600} className="absolute bottom-[-80px] right-[240px]" alt="Girl" />
        </div>
    );
};

export default ContactsComponent;