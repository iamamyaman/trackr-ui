import React, { useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import useDarkSide from "hooks/useDarkSide";

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div
      onClick={(e) => toggleDarkMode(e)}
      className={`fixed bg-white w-5 h-5 flex justify-center items-center  rounded-full bottom-3 right-3 shadow-lg z-50 cursor-pointer `}
    >
      {colorTheme === "light" ? <SunIcon size={10} /> : <MoonIcon size={10} />}
    </div>
  );
};

export default ThemeSwitcher;
