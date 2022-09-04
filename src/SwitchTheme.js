import { useSite } from "./context/SiteContext";

export default function SwitchTheme() {
  const { theme, setTheme } = useSite();

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        type="button"
        class="mx-auto inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span className="text-lg">{theme === "dark" ? "light" : "dark"}</span>
      </button>
    </>
  );
}
