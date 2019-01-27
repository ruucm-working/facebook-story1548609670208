import { Animatable, Data } from 'framer'

const scale = Animatable(1)
const width = Animatable(110)
const actionsVisible = false

export default Data({
  scale,
  width,
  actionsVisible,
})
