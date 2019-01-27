import { animate, PageEffect } from 'framer'
import { stories, page, storyItem } from '../datas'
import { sleep } from '../utils'

const closeStoryItem = async () => {
  log('closeStoryItem!')
  page.contentWidth = 'auto'
  page.defaultEffect = PageEffect.None
  page.gap = 7

  storyItem.actionsVisible = false

  animate.ease(stories.top, 147, {
    duration: 0.2,
  })
  animate.ease(stories.bottom, 374, {
    duration: 0.2,
  })
  animate.ease(page.top, 44, {
    duration: 0.2,
  })
  animate.ease(page.bottom, 26, {
    duration: 0.2,
  })
  animate.ease(page.left, 15, {
    duration: 0.2,
  })

  animate.ease(storyItem.width, 110, {
    duration: 0.1,
  })
}

export default closeStoryItem
