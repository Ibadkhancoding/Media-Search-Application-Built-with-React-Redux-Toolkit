import { Link } from "react-router-dom"
import FooterLinks from "./FooterLinks"

const Footer = () => {
    return (
        <>
            <div className='w-full bg-(--c1) px-5 sm:px-8 lg:px-12 xl:px-20 py-8 sm:py-10 mt-10'>

                <div className="w-full max-w-7xl mx-auto">
                    <div className="w-full pb-5 sm:pb-6 border-b border-(--c3)">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight">
                            Everything you want to find. <span className="text-(--c3)"> <br className="min-[400px]:hidden" /> One place.</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-10 lg:gap-20 pt-7 sm:pt-8 pb-8 border-b border-(--c3)">

                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">
                                MediaSearch
                            </h2>
                            <h2 className="text-sm sm:text-base text-(--c4) mt-1">
                                Discover. <span className="text-(--c3)">Save.</span> Explore.
                            </h2>
                        </div>


                        <div className="sm:min-w-40">
                            <Link to='/'>
                                <h2 className="text-sm sm:text-base lg:text-lg text-(--c4) hover:text-(--c3) transition-colors cursor-pointer mb-1">
                                    Explore
                                </h2>
                            </Link>

                            <Link to='/'>
                                <h2 className="text-sm sm:text-base lg:text-lg text-(--c4) hover:text-(--c3) transition-colors cursor-pointer">
                                    Search
                                </h2>
                            </Link>

                            <Link to='/collection'>
                                <h2 className="text-sm sm:text-base lg:text-lg text-(--c4) hover:text-(--c3) transition-colors cursor-pointer mt-1">
                                    Collection
                                </h2>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-5">
                        <h2 className="text-xs sm:text-sm text-(--c4)">
                            © 2026 MediaSearch
                        </h2>
                        <h2 className="text-xs sm:text-sm text-(--c4)">
                            Built with React + Redux Toolkit
                        </h2>
                    </div>
                </div>

            </div>
            <FooterLinks />
        </>
    )
}

export default Footer

