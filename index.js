'use strict'

const robot = require('robotjs')
const Jimp = require('jimp')

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

function getScreenCapture () {
  const screenSize = robot.getScreenSize()
  const width = screenSize.width
  const height = screenSize.height

  const captureImage = robot.screen.capture(0, 0, width, height).image
  // console.log(captureImage)

  // fs.writeFile('./screen.png', captureImage.image.toString('base64'), 'base64', (err) => {
  //   console.log(err);
  // });
  const jimpImage = new Jimp({ data: captureImage, width, height }, (err, image) => {
    if (err) console.log(err)
    console.log(image)

    // image.write('screen.png');
  })
  console.log(jimpImage)

  // const encodeImg = cv.imdecode(captureImage.image)
  // cv.imshow('screen', encodeImg)
  // cv.waitKey()

  // Support for higher density screens.
  // const multi = img.width / size;
  // Get color at 2, 3.
  // const color = img.colorAt(2 * multi, 3 * multi);
}
getScreenCapture()
