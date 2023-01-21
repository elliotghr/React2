import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      {/* Envolvemos a nuestros componentes con nuestros Providers */}
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext></HeaderContext>
            <MainContext></MainContext>
          </AuthProvider>
          <FooterContext></FooterContext>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
