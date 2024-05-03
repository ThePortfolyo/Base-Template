import './alllCss.css';
import myimg from '../assets/Abhishek1.jpg';

export default function HomeBody() {
    return (
        <div>
            <div className="py-16 bgImage md:pl-24 pl-2">
                <div className="md:pl-0 pl-5">
                    <div className="flex items-center space-x-8">
                        <img
                            src={myimg}
                            className="rounded-full md:h-40 h-20 md:w-40 w-20 ring-2 ring-white transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-500"
                        />
                        <h1 className="md:text-3xl text-2xl font-medium ">Hi I am Abhishek Kumar</h1>
                    </div>
                    <h1 className="md:text-9xl text-4xl font-medium font-sans  ">Web Developer</h1>
                </div>
            </div>
        </div>
    );
}
