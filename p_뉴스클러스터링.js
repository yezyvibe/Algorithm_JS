function solution(str1, str2) {
  const pattern = /[a-zA-Z]/;
  let str1_list = [];
  let str2_list = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length - 1; i++) {
    if (
      pattern.test(str1.substring(i, i + 1)) &&
      pattern.test(str1.substring(i + 1, i + 2))
    ) {
      str1_list.push(str1.substring(i, i + 2));
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (
      pattern.test(str2.substring(i, i + 1)) &&
      pattern.test(str2.substring(i + 1, i + 2))
    ) {
      str2_list.push(str2.substring(i, i + 2));
    }
  }
  if (str1_list.length === 0 && str2_list.length === 0) {
    return 65536;
  }

  let intersection = 0;
  let union = 0;

  if (str1_list.length < str2_list.length) {
    for (let i = 0; i < str1_list.length; i++) {
      if (str2_list.includes(str1_list[i])) {
        str2_list[str2_list.indexOf(str1_list[i])] = "i";
        str1_list[i] = "i";
        intersection++;
        union++;
      } else {
        str1_list[i] = "u";
        union++;
      }
    }
  } else {
    for (let i = 0; i < str2_list.length; i++) {
      if (str1_list.includes(str2_list[i])) {
        str1_list[str1_list.indexOf(str2_list[i])] = "i";
        str2_list[i] = "i";
        intersection++;
        union++;
      } else {
        str2_list[i] = "u";
        union++;
      }
    }
  }

  for (let i = 0; i < str1_list.length; i++) {
    if (str1_list[i] !== "i" && str1_list[i] !== "u") {
      union++;
    }
  }

  for (let i = 0; i < str2_list.length; i++) {
    if (str2_list[i] !== "i" && str2_list[i] !== "u") {
      union++;
    }
  }

  const answer = parseInt((intersection / union) * 65536);
  return answer;
}

const str1 = "handshake";
const str2 = "shake hands";
console.log(solution(str1, str2));

// 좋은 풀이

function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
