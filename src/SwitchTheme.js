import { useSite } from "./context/SiteContext";
import SunIcon from "./assets/sun.svg";
import MoonIcon from "./assets/moon.svg";

export default function SwitchTheme() {
  const { theme, setTheme } = useSite();

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        type="button"
        className="mx-auto inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span>
          {theme === "dark" ? (
            <img className="h-12 w-12" src={SunIcon} alt="" />
          ) : (
            <img className="h-12 w-12" src={MoonIcon} alt="" />
          )}
        </span>
      </button>
    </>
  );
}
