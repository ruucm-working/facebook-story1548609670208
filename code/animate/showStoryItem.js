import { animate, PageEffect } from 'framer'
import { stories, page, storyItem } from '../datas'
import { sleep } from '../utils'

const showStoryItem = async () => {
  log('showStoryItem!')
  animate.ease(stories.top, 0, {
    duration: 0.2,
  })
  animate.ease(stories.bottom, 43, {
    duration: 0.2,
  })
  animate.ease(page.top, 0, {
    duration: 0.2,
  })
  animate.ease(page.bottom, 0, {
    duration: 0.2,
  })
  animate.ease(page.left, 0, {
    duration: 0.2,
  })

  animate.ease(storyItem.width, 375, {
    duration: 0.1,
  })

  page.contentWidth = 'stretch'
  page.defaultEffect = PageEffect.Cube
  page.gap = 0

  storyItem.actionsVisible = true
}

export default showStoryItem
