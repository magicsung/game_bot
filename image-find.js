const cv = require('opencv4nodejs');

const findTarget = async () => {
  const missionsImg = cv.imread('./img/missions.jpg');
  const missionTargetImg = cv.imread('./img/mission_target.jpg');
  // console.log(missionsImg);
  // console.log(missionTargetImg);
  
  const matched = missionsImg.matchTemplate(missionTargetImg, 5);
  console.log(matched);

  // Use minMaxLoc to locate the highest value (or lower, depending of the type of matching method)
  const minMax = matched.minMaxLoc();
  const { maxLoc: { x, y } } = minMax;

  // Draw bounding rectangle
  missionsImg.drawRectangle(
    new cv.Rect(x, y, missionTargetImg.cols, missionTargetImg.rows),
    new cv.Vec(0, 255, 0),
    2,
    cv.LINE_8
  );

  // Open result in new window
  cv.imshow('We\'ve found target!', missionsImg);
  cv.waitKey();
}

findTarget()