import * as C from "./style"
import { BsPlayFill, BsCameraReels } from "react-icons/bs"

export const VideoDescription = ({ 
  logo,
  title, 
  description, 
  site,
  openVideo }) => 
  <C.Container>
    <C.Title>
      <img src={logo} alt={title} title={title} />
    </C.Title>
    <C.Description title={description}>{description}</C.Description>
    <div>
      <a href={site} target="_blank">
        <C.Button title="Assistir">
          <BsPlayFill size={28}/>
          Assistir
        </C.Button>
      </a>
      <C.ButtonTrailer title="Ver trailer" onClick={openVideo}>
        <BsCameraReels size={24}/>
        Ver trailer
      </C.ButtonTrailer>
    </div>
  </C.Container>