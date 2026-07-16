export const EASE_OUT = [0.16, 1, 0.3, 1] as const

export const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.2, ease: EASE_OUT },
  },
}
