import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-9xl font-bold playfair mb-10">Opps</h1>
                <h1 className="text-6xl worksans mb-6">
                    {error.status || 404} - {error.statusText || "Page not found"}
                </h1>
                <Link to="/">
                    <button className="btn font-semibold bg-[#23BE0A] py-[18px] px-7 text-white h-auto text-[18px]">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
