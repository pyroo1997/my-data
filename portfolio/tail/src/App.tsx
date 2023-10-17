import { Navbar } from "./components/navBar";
import { Infotab } from "./components/infoTab";
import { Skills } from "./components/skills";
import { Signup } from "./components/signup";
import { AuthProvider } from "../src/contexts/AuthContext";

function App() {
  return (
    <div className="bg-slate-300">
      <div className="w-full h-screen pr-5 bg-slate-200 border-s-black">
        <Navbar />
        <AuthProvider>
          <Signup />
        </AuthProvider>
        <Infotab />
        <Skills />
      </div>
    </div>
  );
}

export default App;
