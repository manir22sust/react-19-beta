import { useState } from "react";
import { createContext, use } from "react";

// Create a context objcet
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  // state to hold the  current theme
  const [theme, setTheme] = useState("light");
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    // Provide the theme and toggleTheme function to the children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedCard = () => {
  //Access the theme context using the use() hook
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div
      className={`mx-auto max-w-md rounded-lg p-6 shadow-md ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <h1
        className={`mb-3 text-2xl ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Themed Card
      </h1>
      <p className={theme === "light" ? "text-gray-800" : "text-white"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem numquam
        recusandae sequi esse et sint sit, magnam amet totam porro magni
        voluptates deleniti cumque sapiente quis ut vitae culpa iste veniam?
        Quos consequuntur alias fuga facere soluta aspernatur beatae rem, dolor
        minima, culpa error non odit ex corrupti ipsum dignissimos tempore eaque
        impedit iure reiciendis placeat reprehenderit repudiandae.
      </p>
      {/* Toggle button */}
      <button
        onClick={toggleTheme}
        className="mt-4 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <ThemedCard />
    </ThemeProvider>
  );
};

export { Theme as UseExampleContext };
