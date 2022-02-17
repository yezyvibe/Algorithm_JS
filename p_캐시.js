function solution(cacheSize, cities) {
  let dict = {};
  let cacheCnt = 0;
  let runTime = 0;
  let usedTime = 1;
  cities.forEach((el) => {
    el = el.toLowerCase();
    if (el in dict) {
      runTime += 1;
      dict[el] = usedTime; //갱신
      usedTime++;
    } else {
      if (cacheCnt >= cacheSize) {
        let min = 100000;
        let replaceKey = -1;
        Object.keys(dict).forEach((key) => {
          if (dict[key] < min) {
            min = dict[key];
            replaceKey = key;
          }
        });
        delete dict[replaceKey];
      }
      runTime += 5;
      if (cacheSize !== 0) {
        // 캐시 사이즈 0인 경우 예외처리
        dict[el] = usedTime;
        usedTime++;
        cacheCnt++;
      }
    }
  });
  return runTime;
}

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
