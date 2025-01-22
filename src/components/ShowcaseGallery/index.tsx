import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.css';

export default function ShowcaseGallery(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const images = (siteConfig.customFields?.showcaseImages as string[])?.map(
    (path) => useBaseUrl(path)
  ) || [];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <Heading as="h2" className={styles.showcaseTitle}>
          <Translate id="showcase.title">示例图片</Translate>
        </Heading>
        <div className={styles.carouselWrapper}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className={styles.swiper}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <img src={image} alt={`Showcase ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 