import { useEffect } from 'react';
import Splide from '@splidejs/splide';

export default function ImageCarousel() {
  useEffect(() => {
    const elements = document.querySelectorAll('.splide');
    const instances = Array.from(elements).map((el) => {
      const splide = new Splide(el, { type: 'loop', autoplay: true });
      splide.mount();
      return splide;
    });

    return () => {
      instances.forEach((splide) => splide.destroy());
    };
  }, []);

  return null;
}
