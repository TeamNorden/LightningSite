export const Footer: React.FC = () => {
    return (
        <footer className="footer bg-black relative pt-1 border-b-2 border-red-700">
            <div className="container mx-auto px-6">

                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-center">
                        <div className="flex flex-col">
                            <span className="font-bold border-gray-300 uppercase mb-2">TeamNorden</span>
                            <span className="md:flex-row justify-left"><a href="https://norden.wtf" className="text-revolt  text-md hover:text-red-500">TeamNorden Website</a></span>
                            <span className="md:flex-row justify-center"><a href="https://dev.norden.wtf" className="text-revolt  text-md hover:text-red-500">Dev Panel</a></span>
                            <span className="md:flex-row justify-right"><a href="https://github.com/TeamNorden" className="text-revolt  text-md hover:text-red-500">GitHub</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-revolt font-bold mb-5">
                            © 2022 {" "}
                            <a href="https://codeize.me" className="text-revolt hover:text-red-500">Codeize </a>
                            |
                            {" "}
                            <a href="https://norden.wtf" className="text-revolt hover:text-red-500">TeamNorden</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};