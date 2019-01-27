import { Data, animate, Override, Animatable } from 'framer'
import { page, stories, storyItem } from './datas'
import { showStoryItem, closeStoryItem } from './animate'
import { log } from 'ruucm-util'

window.log = log

var clickLock = false

export const Stories: Override = () => {
  return {
    top: stories.top,
    bottom: stories.bottom,
  }
}

export const Page: Override = () => {
  return {
    top: page.top,
    bottom: page.bottom,
    left: page.left,
    // Page API
    contentWidth: page.contentWidth,
    defaultEffect: page.defaultEffect,
    gap: page.gap,
    // DistinctDragClick
    onPanStart() {
      clickLock = true
    },
    onMouseUp() {
      clickLock = false
    },
  }
}

export const StoryItem: Override = () => {
  return {
    scale: storyItem.scale,
    width: storyItem.width,
    onTap() {
      if (!clickLock) {
        showStoryItem()
        clickLock = true
      }
    },
  }
}

export const StoryItemActions: Override = () => {
  return {
    visible: storyItem.actionsVisible,
  }
}

export const StoryItemClose: Override = () => {
  return {
    onTap() {
      closeStoryItem()
      clickLock = true
    },
  }
}
