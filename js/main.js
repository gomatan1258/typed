'use strict';

$(()=>{
	
	const $target = $("#target");
	const $scoreLabel = $("#score");
	const $missLabel = $("#miss");
	const $timerLabel = $("#timer");

	const timeLimit = 180 * 1000;
	const words = [
		'apple', 'sky', 'blue', 'middle', 'set',
	];
	let word;
	let loc;
	let score;
	let miss;
	let isPlaying = false;
	let startTime;
	let exportString = "";
	
	$(window).keydown(e=>{
		if(e.key === "Enter" && isPlaying === false) {
			startTime = Date.now(); //updateTimerを行う前の経過ミリ秒を代入
			isPlaying = true;
			init();
			updateTimer();
			return;
		}

		if(isPlaying === false) {
			return;
		}
		if(e.key === word[loc]) {
			exportString += word[loc];
			loc++;
			if(loc === word.length) {
				exportString = "";
				word = words[Math.floor(Math.random() * words.length)];
				loc = 0;
			}
			updateTarget();
			score++;
			$scoreLabel.text(score);
		}else {
			miss++;
			$missLabel.text(miss);
		}
	});
	
	function updateTarget() {
		$target.html("<span style=\"color: red;\">"+exportString+"</span>" + word.substring(loc));
	}
	
	function updateTimer() {
		const timeLeft = startTime + timeLimit - Date.now(); //GameStartしたときの残り時間を代入
		$timerLabel.text((timeLeft/1000).toFixed(2));
		const timeoutId = setTimeout(()=>{
			updateTimer();
		}, 10);
		if(timeLeft < 0) {
			clearTimeout(timeoutId);
			$timerLabel.text("0.00");
			isPlaying = 0;
			setTimeout(()=>{
				showResult();
			}, 100);
		}
	}
	
	function showResult() {
		const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
		alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
	}
	
	function init() {
		score = 0;
		miss = 0;
		loc = 0;
		word = words[Math.floor(Math.random() * words.length)];
		$scoreLabel.text(score);
		$missLabel.text(miss);
		$target.text(word);
	}
});	