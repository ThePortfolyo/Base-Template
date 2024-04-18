import './alllCss.css';

// import bg from '../assets/banner.webp';
export default function HomeBody(user) {
    let userData = user?.user?.about;
    return (
        <div>
            <div className="py-16 bgImage md:pl-24 pl-2">
                <div className="md:pl-0 pl-5">
                    <div className="flex items-center space-x-8">
                        <img
                            src={userData?.avatar.url}
                            className="rounded-full md:h-32 h-20 md:w-32 w-20 ring-2 ring-white transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-125  duration-300"
                        />
                        <h1 className="md:text-3xl text-2xl font-medium ">Hi I am {userData.name}</h1>
                    </div>
                    <h1 className="md:text-9xl text-4xl font-medium font-sans  ">{userData.title}</h1>
                </div>
            </div>
        </div>
    );
}
