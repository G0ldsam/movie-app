export const pulseVariant = {
  pulse: () => ({
    scale: [1, 1.08, 1.05, 1, 1.08, 1],
    color: ["#ffffff", "#fff8bb", "#fff06a", "#ffffff"],
    transition: {
      duration: 1.2
    }
  }),
  still: {
    scale: 1
  }
}

export const listVariant = {
  hidden: {
    x: 10000,
    opacity: 0

  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 1
    }
  })
}

export const fadeInVariant = {
  hidden: {
    opacity: 0
  },
  fadeIn: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}