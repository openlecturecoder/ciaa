
const currentDate : Date = new Date();

const Footer = () : JSX.Element => {

    return (
        <footer className="bg-white text-slate-500 p-4 border-t border-slate-300">
            <div className="flex justify-center items-center">
                <p className="text-sm p-1">
                    Copyright© {currentDate.getFullYear().toString()} Park Sungmin. All rights reserved.
                </p>
            </div>
        </footer>
    );
}


export default Footer;