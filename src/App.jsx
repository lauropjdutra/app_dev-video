import { useState, useEffect } from "react";

import { apiData } from "./api/data";
import axios from "axios";

import { LoadingSpinner } from "./components/LoadingSpinner";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { VideoDescription } from "./components/VideoDescription";
import { CarouselPosters as Carousel } from "./components/Carousel";
import { Video } from "./components/Video";
import { Footer } from "./components/Footer";

// const defaultSeries = {
//   title: "O Senhor dos Anéis: Os Anéis de Poder",
//   description:
//     "Baseado em “O Senhor dos Anéis” de J.R.R. Tolkien, uma nova aliança de personagens icônicos é forjada para enfrentar o ressurgimento de Sauron, o Senhor Sombrio, na Terra-média.",
//   imageLogo:
//     "https://m.media-amazon.com/images/S/pv-target-images/2ca088555052e8d58e3ff60f8d29c6e7aa6961fd3b8f0d8fd4c0ef5114b54a0c._SX600_FMpng_.png",
//   imagePoster:
//     "https://http2.mlstatic.com/D_NQ_NP_619085-MLB51631310837_092022-O.webp",
//   imageBanner: "https://i.redd.it/cop3wxfau7s91.png",
//   linkSite:
//     "https://www.primevideo.com/-/pt/detail/0TAPPIZDTWUZORUA92KX2Q54V2/ref=atv_dp_btf_el_prime_sd_tv_resume_t1ADAAAAAA0wg0?language=pt_BR&autoplay=1&t=2533",
//   linkVideo: "rYXfmXfeM38",
//   category: "series",
//   favorite: true,
// };

function App() {
  const [loading, setLoading] = useState(true)
  const [playVideo, setPlayVideo] = useState(false);
  const [video, setVideo] = useState([]);
  const [movieData, setMovieData] = useState([]);
  
  const { imageLogo, title, description, linkSite, linkVideo, imageBanner } =
  video;
  
  const apiUse = movieData?.movies?.length > 0 ? movieData : apiData;
  
  const baseUrl = "https://api-dev-video.vercel.app";
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/all`);
        setVideo(data.movies[5]);
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  
  if (loading) {
    return <LoadingSpinner />;
  }

  const openVideo = () => setPlayVideo(true);
  const closeVideo = () => setPlayVideo(false);

  const changeVideo = (data) => {
    setVideo(data);
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 600);
  };


  return (
    <>
      <Video
        linkVideo={linkVideo}
        playVideo={playVideo}
        closeVideo={closeVideo}
      />
      <Background imageBanner={imageBanner}>
        <Header />

        <VideoDescription
          logo={imageLogo}
          title={title}
          description={description}
          site={linkSite}
          openVideo={openVideo}
        />

        <Carousel
          data={apiUse}
          changeVideo={(data) => changeVideo(data)}
          selected={title}
        />

        <Footer></Footer>
      </Background>
    </>
  );
}

export default App;
