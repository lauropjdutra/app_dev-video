import { Player, Youtube } from "@vime/react"
import * as C from "./style"
import { AiOutlineArrowLeft } from "react-icons/ai"

export const Video = ({ linkVideo, playVideo, closeVideo }) => {

  return playVideo ? (
    <C.Container>
      <C.Button title="Voltar" onClick={closeVideo}>
        <AiOutlineArrowLeft />
        Voltar
      </C.Button>
      <Player controls autoplay>
        <Youtube videoId={linkVideo} />
      </Player>
    </C.Container>
  ) : null
}