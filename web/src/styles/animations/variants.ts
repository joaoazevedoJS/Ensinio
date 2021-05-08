import { Variants } from 'framer-motion/types/types';

export const variantContainer: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
      from: -0,
    },
  },
};

export const variantItem: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 20,
    opacity: 1,
  },
};
