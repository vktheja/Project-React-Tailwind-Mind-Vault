import Brain from "../../shared/icons/Brain";
import Sparkles from "../../shared/icons/Sparkles";

const NavBar = () => {
  return (
    <>
      <header className="bg-blue-900">
        <div className=" container flex justify-center mds:justify-between px-10 py-5">
          <div className="flex items-center space-x-2">
            <Brain className="text-white w-8 h-8" />
            <h1 className="text-white text-2xl font-bold select-none">
              MindVault
            </h1>
          </div>
          <div className="hidden items-center space-x-2 mds:flex">
            <h2 className="text-white text-lg select-none">Stay Inspired</h2>
            <Sparkles className="text-white w-5 h-5" />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
