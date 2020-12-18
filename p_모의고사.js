function solution(answers) {
  	var list = [
		[1,2,3,4,5],
		[2,1,2,3,2,4,2,5],
		[3,3,1,1,2,2,4,4,5,5]
	  ];
	var point = [0,0,0];

	for(let i=0; i<answers.length; i++){
		var num = answers[i];
		if(num === list[0][i%5]) point[0]++;
		if(num === list[1][i%8]) point[1]++;
		if(num === list[2][i%10]) point[2]++;
	}

	var max = Math.max(...point);
		var result = [];
		for(let j=0; j<point.length; j++){
			if(point[j] === max) result.push(j+1);
		};

  	return result;
}