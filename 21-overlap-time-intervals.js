/*
Daily Coding Problem #21

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

function minRoomsNeeded(intervals) {
  const startingTimes = [];
  const endingTimes = [];

  for (let i = 0; i < intervals.length; i++) {
    const [startTime, endTime] = intervals[i];

    startingTimes[i] = startTime;
    endingTimes[i] = endTime;
  }

  startingTimes.sort((a, b) => a - b);
  endingTimes.sort((a, b) => a - b);

  // When a new meeting starts, we need an additional room
  // When a meeting ends, we dont need that room anymore
  // prioritize the smaller starting or ending time
  // if the start time and end time are equal, end time comes first

  let sIdx = 0;
  let eIdx = 0;
  let maxRooms = 0;
  let currRooms = 0;
  while (sIdx < startingTimes.length || eIdx < endingTimes.length) {
    // dont need to traverse through the ending times if all the starting time rooms are used
    if (sIdx >= startingTimes.length) break;

    if (startingTimes[sIdx] < endingTimes[eIdx]) {
      currRooms++;
      sIdx++;
    } else {
      currRooms--;
      eIdx++;
    }
    maxRooms = Math.max(maxRooms, currRooms);
  }

  return maxRooms;
}

console.log(minRoomsNeeded([[30, 75], [0, 50], [60, 150]])) //expect 2
