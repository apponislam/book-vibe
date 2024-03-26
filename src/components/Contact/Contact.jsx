const Contact = () => {
    return (
        <div>
            <div className="bg-[#1313130D] rounded-3xl p-9 mb-8 mx-3 md:mx-0">
                <h1 className="worksans font-bold text-[28px] text-center">Contact Us</h1>
            </div>
            <div className="bg-[#1313130D] rounded-3xl p-3 md:p-9 mb-8 mx-3 md:mx-0">
                <div className="grid grid-cols-2 gap-5 mb-5">
                    <input type="text" placeholder="Name" className="input input-bordered w-full" />
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <input type="text" placeholder="Subject" className="input input-bordered w-full mb-5" />
                <textarea className="w-full h-48 p-4 rounded-2xl" placeholder="Type your message..."></textarea>
            </div>
        </div>
    );
};

export default Contact;
