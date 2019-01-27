import { Animatable, Data, PageEffect } from 'framer'

const top = Animatable(44)
const bottom = Animatable(26)
const left = Animatable(15)

const contentWidth = 'auto'
const defaultEffect = PageEffect.None
const gap = 7

export default Data({
  top,
  bottom,
  left,
  contentWidth,
  defaultEffect,
  gap,
})
