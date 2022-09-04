import SwitchTheme from "../SwitchTheme";
import { useSite } from "../context/SiteContext";

export default function Header() {
  const { theme } = useSite();

  return (
    <div
      className={
        "w-screen h-screen flex jus items-center transition " +
        (theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800")
      }>
      <SwitchTheme />
    </div>
  );
}
