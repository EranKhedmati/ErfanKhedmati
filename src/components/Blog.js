// Images
import PosterOne from "../images/poster-1.png";
import PosterTwo from "../images/poster-2.png";

function Blog() {
    return (
        // Container
        <div className="tracking-wider px-5 sm:px-10 mb-20">
            <div className="boder border-b-[1px] border-secondary/20 mx-10 lg:mx-32">
                <h1 className="text-center pb-1 text-xl lg:text-2xl font-medium">Last Blogs</h1>
            </div>
            <ul className="flex flex-col justify-center gap-20 max-w-[1200px] mx-auto mt-10 sm:flex-row sm:items-start sm:gap-10">
                <li>
                    <div className="relative">
                        <img src={PosterOne} />
                        <a href="#" className="absolute bottom-0 left-0 w-full bg-secondary/50 text-center text-white/60 p-3 rounded-b-[20px] ease-linear duration-150 hover:py-7 hover:bg-secondary/80 hover:text-white">
                            Visit Blog
                        </a>
                    </div>
                    <h1 className="pt-8 pb-4 text-xl text-center sm:text-start">Teamwork</h1>
                    <p className="line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam et dolor dignissim tincidunt. Curabitur nec interdum mauris. Fusce vitae diam vel orci feugiat consectetur. Duis vel massa id urna ultricies convallis. Nullam aliquam erat eu risus vehicula ultrices. Proin dapibus ipsum a sapien tincidunt tincidunt. Donec sollicitudin metus eu elit vestibulum, in lobortis augue gravida. Ut
                    </p>
                </li>
                <li>
                    <div className="relative">
                        <img src={PosterTwo} />
                        <a href="#" className="absolute bottom-0 left-0 w-full bg-secondary/50 text-center text-white/60 p-3 rounded-b-[20px] ease-linear duration-150 hover:py-7 hover:bg-secondary/80 hover:text-white">
                            Visit Blog
                        </a>
                    </div>
                    <h1 className="pt-8 pb-4 text-xl text-center sm:text-start">Social Media</h1>
                    <p className="line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam et dolor dignissim tincidunt. Curabitur nec interdum mauris. Fusce vitae diam vel orci feugiat consectetur. Duis vel massa id urna ultricies convallis. Nullam aliquam erat eu risus vehicula ultrices. Proin dapibus ipsum a sapien tincidunt tincidunt. Donec sollicitudin metus eu elit vestibulum, in lobortis augue gravida. Ut
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Blog;