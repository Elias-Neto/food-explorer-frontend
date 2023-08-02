import { keyframes } from 'styled-components'

const topToBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const rightToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(60px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export { topToBottom, rightToLeft }