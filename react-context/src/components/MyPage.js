import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") setTheme("light");
    else setTheme("dark");
  };
  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme}></Header>
      <Main theme={theme}></Main>
      <Footer theme={theme}></Footer>
    </div>
  );
};

export default MyPage;
