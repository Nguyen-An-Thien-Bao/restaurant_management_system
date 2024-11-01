import { FaConciergeBell } from 'react-icons/fa';

function Header() {
    return (
        <div className="mobile-Nav-Header-Height px-4 lg:hidden z-50 bg-secondary-cyan top-0 right-0 left-0 md:px-12 flex justify-between items-center">
            <div className="flex items-center">
                <div className="text-2xl text-white flex justify-center items-center px-2">
                    <FaConciergeBell className="mr-1" />
                    <h2 className="font-bold ">RMS</h2>
                </div>

                <div className="mr-4 min-w-6"></div>
            </div>
        </div>
    );
}
export default Header;
