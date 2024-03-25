import { Link } from "react-router-dom";
import ToKillaMockingbird from "/ToKillaMockingbird.jpg";

const Home = () => {
    return (
        <div>
            <div className="bg-[#1313130D] rounded-3xl py-[80px] px-32 flex items-center justify-between mb-[100px]">
                <div>
                    <h1 className="font-bold text-[56px] mb-12 playfair">
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <Link>
                        <button className="worksans btn mr-4 font-bold bg-[#23BE0A] py-[18px] px-7 text-white h-auto text-[20px]">View The List</button>
                    </Link>
                </div>
                <div>
                    <img className="w-[318px] rounded-3xl" src={ToKillaMockingbird} />
                </div>
            </div>

            <div>
                <h1 className="text-center font-bold text-[40px] mb-9 playfair">Books</h1>
            </div>
        </div>
    );
};

export default Home;
