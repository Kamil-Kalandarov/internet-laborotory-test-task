import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Slidercard from './components/SliderCard/Slidercard';


const Slider = () => {
  const { slides } = useSelector(store => store.slider)

  const navPrevButton = useRef(null);
  const navNextButton = useRef(null);
  const paginationContainer = useRef(null);

  // настройка слайдера перед его инициализацией
  const onBeforeInit = (Swiper) => {
    if (typeof Swiper.params.navigation && Swiper.params.pagination !== 'boolean') {
      const navigation = Swiper.params.navigation;
      const pagination = Swiper.params.pagination;
      navigation.prevEl = navPrevButton.current;
      navigation.nextEl = navNextButton.current;
      pagination.el = paginationContainer.current;
    }
  };

  return (
    <div className={styles.slider__container}>
      <button className={styles.slider__btnPrev} ref={navPrevButton}></button>
      <Swiper
        onBeforeInit={onBeforeInit}
        className={styles.slider}
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={3}
        pagination={{ clickable: true }}
        // разрешение идет от обратного, в документации неправильно написано
        breakpoints={{
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1,
          }
        }}
      >
      {slides.map(slide => {
        return (
          <SwiperSlide key={slide.id}>
            <Slidercard 
              avatar={slide.avatar}
              name={slide.name}
              city={slide.city}
              text={slide.text}
            />
          </SwiperSlide>
        )
        })}
      </Swiper>
      <button className={styles.slider__btnNext} ref={navNextButton}></button>
      <div ref={paginationContainer} className={styles.slider__pagination}></div>
    </div>
  );
};

export default Slider;

{/* <div className={styles.slider__container}>
      <button className={styles.slider__btnPrev} ref={navPrevButton}></button>
      <Swiper
        onBeforeInit={onBeforeInit}
        modules={[Pagination, Navigation]}
        wrapperClass={styles.slider}
        centeredSlides={true}
        loop={false}
        pagination={{clickable: true, el: paginationContainer.current}}
        slidesPerView={3}
        breakpoints={{
          1280: {
            slidesPerView: 2,
          }
        }}
      >
        {slides.map(slide => {
        return (
          <SwiperSlide key={slide.id} wrapperClass={styles.slider__slide}>
            <Slidercard 
              avatar={slide.avatar}
              name={slide.name}
              city={slide.city}
              text={slide.text}
            />
          </SwiperSlide>
        )
        })}
      </Swiper>
      <button className={styles.slider__btnNext} ref={navNextButton}></button>
      <div ref={paginationContainer} className={styles.slider__pagination}></div>
    </div> */}