import { HeaderBox } from "./style";
import Logo from "../../assets/logo.png"

export const Header = () => {
  const reloadPage = () => {
    window.location.href = "/"
  }
  return (
  <HeaderBox>
    <div onClick={reloadPage} title="Dev Video">
      <img src={Logo} alt="Logo" />
      <h1>Dev Video</h1>
    </div>
    <nav>
        <a title="Filmes" href="#movies">Filmes</a>
        <a title="Séries" href="#series">Séries</a>
        <a title="Todos" href="#all">Todos</a>
    </nav>
  </HeaderBox>
  )}