'use strict'

const robot = require('robotjs')

const status = {
  statusList: [
    'start',
    'choseMode',
    'go',
    'end1',
    'end2',
    'end3'
  ],
  latest: 'start',
  get current () {
    return this.latest
  },
  next () {
    let currentIndex = this.statusList.findIndex(item => item === this.latest)
    if (currentIndex === this.statusList.length - 1) currentIndex = 0
    this.latest = this.statusList[currentIndex + 1]
    return true
  }
}

console.log(status.current)
for (let index = 0; index < 10; index++) {
  status.next()
  console.log(status.current)
}

robot.setMouseDelay(2)

// 1. 點擊任務
// if (status.current = status.statusList[0]) {

// }

// 2. 點擊單人狩獵
// 3. 點擊準備完成
// 4. 點擊出發
// 5. 偵測是否結束
// 6. 點擊確定
// 7. 點擊確定
// 8. 點擊OK
