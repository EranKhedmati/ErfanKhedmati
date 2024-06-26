// Images
import Me from "../images/me.jpeg"

function Hero() {
    return (
        <div className="flex flex-col gap-5 items-center mt-10 px-5 tracking-wide sm:flex-row-reverse sm:justify-center sm:gap-5 lg:gap-20 lg:mt-20">
            {/* Circle Image */}
            <img src={Me} className="w-52 h-52 object-cover rounded-full sm:w-52 sm:h-w-52 lg:w-80 lg:h-80" />
            {/* text */}
            <div className="text-center sm:text-left">
                <h1 className="text-xl font-bold tracking-[7px] sm:text-3xl lg:text-4xl">ERFAN KHEDMATI</h1>
                <p className="hidden text-secondary text-2xl sm:block">hard work pays of!</p>
                <p className="mt-1 text-secondary">Hi, I'm Erfan Khedmati specializing in front-end developing</p>
                <div className="flex gap-5 items-center justify-center mt-7 flex-wrap sm:justify-start">
                    <a href="./portfolio" className="bg-primary-500 py-2 px-4 rounded cursor-pointer hover:bg-primary-1000 hover:text-white">PORTFOLIO</a>
                    <a href="./contact" className="bg-primary-500 py-2 px-4 rounded cursor-pointer hover:bg-primary-1000 hover:text-white">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;