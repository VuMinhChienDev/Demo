import{ThemeProvider} from "./themContext75_1";
import Content from './content'; 
import "../css/App75.css";

// Tạo Context
export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("dark");

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className={theme === "dark" ? "dark-theme" : "light-theme"} style={{ textAlign: "center" }}>
                <button onClick={handleTheme}>Change Theme</button>
                <Content />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
