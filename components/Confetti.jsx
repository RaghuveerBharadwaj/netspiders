import Confetti from 'react-dom-confetti'

const config = {
  angle: "90",
  spread: 360,
  startVelocity: "20",
  elementCount: "100",
  dragFriction: 0.08,
  duration: "8000",
  stagger: 1,
  width: "10px",
  height: "10px",
  perspective: "0px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
}

export const CustomConfetti = ({ isActive }) => <Confetti active={isActive} config={config} />