import Splide from '@splidejs/splide_hw';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splide = new Splide( '.splide_hw', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  autoplay: "play",
  gap: '20px',
  perPage: 3,
  autoScroll: {
    speed: 3,
  },
} );

splide.mount();
