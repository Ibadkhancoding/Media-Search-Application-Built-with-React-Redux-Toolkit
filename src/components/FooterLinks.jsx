const FooterLinks = () => {
    return (
        <div className="bg-(--c5) sm:py-4 py-3">
            <div className="flex gap-5 sm:gap-10 justify-center items-center sm:mb-3 mb-2">
                <a target="_blank" href="https://github.com/Ibadkhancoding">
                    <img className="sm:h-12 h-7 active:scale-95 hover:-translate-y-1 object-cover" src="github-icon.svg" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/muhammad-ibad-khan-223082265/?isSelfProfile=true">
                    <img className="sm:h-12 h-7 active:scale-95 hover:-translate-y-1 object-cover" src="linkedin-icon.svg" />
                </a>

                <a target="_blank" href="https://www.instagram.com/mibadkkhan/">
                    <img className="sm:h-12 h-7 active:scale-95 hover:-translate-y-1 object-cover" src="instagram-logo.svg" />
                </a>
            </div>
            <div className="sm:py-2">
                <h2 className="text-[10px] sm:text-sm text-(--c1) text-center">
                    Designed and Built by <span className="text-(--c3) font-bold">Muhammad Ibad Khan</span> 
                </h2>
            </div>
        </div>
    )
}

export default FooterLinks