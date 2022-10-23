function solution(genres, plays) {
  answer = [];
  playCnt = {};

  for (let i = 0; i < genres.length; i++) {
    current = genres[i];
    if (current in playCnt) {
      playCnt[current][0] += plays[i];
      playCnt[current][1].push([plays[i], i]);
    } else {
      playCnt[current] = [plays[i], [[plays[i], i]]];
    }
  }

  totalPlay = [];
  for (let key of Object.keys(playCnt)) {
    totalPlay.push([playCnt[key][0], key]);
  }
  totalPlay.sort((a, b) => b[0] - a[0]);

  for (let current of totalPlay) {
    count = current[0];
    genre = current[1];

    songs = playCnt[genre][1];
    songs.sort((a, b) => b[0] - a[0]);
    let cnt = 0;
    for (let song of songs) {
      answer.push(song[1]);
      cnt++;
      if (cnt == 2) break;
    }
  }
  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
