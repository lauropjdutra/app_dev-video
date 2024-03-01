import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as C from "./style";

export const CarouselPosters = ({ data, changeVideo, selected }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 7,
    },
    notebook: {
      breakpoint: { max: 1440, min: 1284 },
      items: 6,
    },
    tabletLarge: {
      breakpoint: { max: 1284, min: 1084 },
      items: 5,
    },
    tabletMedium: {
      breakpoint: { max: 1084, min: 924 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 924, min: 720 },
      items: 3,
    },
    responsiveTablet: {
      breakpoint: { max: 720, min: 620 },
      items: 4,
    },
    responsiveMobile: {
      breakpoint: { max: 620, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const getMovies = (category) =>
    data?.movies?.filter((movie) => movie.category === category);

  return (
    <C.Container>
      <C.Title title="Favoritos" id="favorites">Favoritos</C.Title>
      <Carousel responsive={responsive}>
        {data.movies
          .filter((item) => item.favorite)
          .map((data, index) => (
            <>
              <C.PosterImage
                bgImage={data.imagePoster}
                title={data.title}
                onClick={() => changeVideo(data)}
                className={selected === data.title ? "selected" : ""}
              />
              <C.AltImage src="#" alt={data.title} />
            </>
          ))}
      </Carousel>

      {data?.categories?.map((category) => (
        <>
          <C.Title key={category.name} title={category?.name} id={category?.type}>
            {category?.name}
          </C.Title>
          <Carousel responsive={responsive}>
            {getMovies(category?.type).map((data, index) => (
              <>
                <C.PosterImage
                  bgImage={data.imagePoster}
                  title={data.title}
                  key={index}
                  onClick={() => changeVideo(data)}
                  className={selected === data.title ? "selected" : ""}
                ></C.PosterImage>
                <C.AltImage src="#" alt={data.title} />
              </>
            ))}
          </Carousel>
        </>
      ))}

      <C.Title title="Todos" id="all">Todos</C.Title>
      <Carousel responsive={responsive}>
        {data.movies.map((data, index) => (
          <>
            <C.PosterImage
              bgImage={data.imagePoster}
              title={data.title}
              key={index}
              onClick={() => changeVideo(data)}
              className={selected === data.title ? "selected" : ""}
            ></C.PosterImage>
            <C.AltImage src="#" alt={data.title} />
          </>
        ))}
      </Carousel>
    </C.Container>
  );
};