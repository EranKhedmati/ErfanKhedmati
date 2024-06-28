import Banner from "../images/banner.png"

function Showcase() {
    return (
        // Ccontainer
        <div className="w-full flex justify-center mt-20 px-0 sm:px-10 lg:p-20">
            {/* Grid box */}
            <div className="relative grid grid-cols-2 items-center gap-x-10 px-5 py-10 lg:px-10 lg:py-0 lg:p-0 max-w-[700px] lg:max-w-[1200px]">
                <img src={Banner} className="absolute  -z-10 object-cover sm:rounded-lg lg:static lg:z-0 lg:rounded-none w-full h-full" />
                <div className="bg-white flex flex-col col-span-2 gap-5 py-7 px-5 lg:px-0 lg:col-span-1">
                    <h1 className="text-center self-center text-2xl font-bold">Projects</h1>
                    <div>
                        <p>E-commerce</p>
                        <p>An all-inclusive e-commerce platform offering diverse products, streamlined navigation, and top-notch customer service.</p>
                    </div>
                    <div>
                        <p>Gaming Web-App</p>
                        <p>Immerse yourself in our gaming app's thrilling adventures, interactive challenges, and vibrant community.</p>
                    </div>
                    <div>
                        <p>Job App</p>
                        <p>Streamline your job search with our comprehensive app, connecting you to tailored opportunities and seamless application processes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;