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

	let kana = {
		"あ":["a"],"い":["i"],"う":["u"],"え":["e"],"お":["o"],
		"か":["ka","ca"],"き":["ki"],"く":["ku","cu","qu"],"け":["ke"],"こ":["ko","co"],
		"さ":["sa"],"し":["si","ci","shi"],"す":["su"],"せ":["se","ce"],"そ":["so"],
		"た":["ta"],"ち":["ti","chi"],"つ":["tu","tsu"],"て":["te"],"と":["to"],
		"な":["na"],"に":["ni"],"ぬ":["nu"],"ね":["ne"],"の":["no"],
		"は":["ha"],"ひ":["hi"],"ふ":["fu","hu"],"へ":["he"],"ほ":["ho"],
		"ま":["ma"],"み":["mi"],"む":["mu"],"め":["me"],"も":["mo"],
		"や":["ya"],"ゆ":["yu"],"よ":["yo"],
		"ら":["ra"],"り":["ri"],"る":["ru"],"れ":["re"],"ろ":["ro"],
		"わ":["wa"],"を":["wo"],"ん":["nn"],
		"が":["ga"],"ぎ":["gi"],"ぐ":["gu"],"げ":["ge"],"ご":["go"],
		"ざ":["za"],"じ":["ji","zi"],"ず":["zu"],"ぜ":["ze"],"ぞ":["zo"],
		"だ":["da"],"ぢ":["di"],"づ":["du"],"で":["de"],"ど":["do"],
		"ば":["ba"],"び":["bi"],"ぶ":["bu"],"べ":["be"],"ぼ":["bo"],
		"ぱ":["pa"],"ぴ":["pi"],"ぷ":["pu"],"ぺ":["pe"],"ぽ":["po"],
		"ぁ":["la","xa"],"ぃ":["li","xi"],"ぅ":["lu","xu"],"ぇ":["le","xe"],"ぉ":["lo","xo"],
		"きゃ":["kya"],"きゅ":["kyu"],"きょ":["kyo",],
		"しゃ":["sya","sha"],"しゅ":["syu","shu"],"しょ":["syo","sho"],
		"ちゃ":["tya","cha","cya"],"ちゅ":["tyu","chu","cyu"],"ちょ":["tyo","cyo","cho"],
		"にゃ":["nya"],"にゅ":["nyu"],"にょ":["nyo"],
		"ひゃ":["hya"],"ひゅ":["hyu"],"ひょ":["hyo"],
		"みゃ":["mya"],"みゅ":["myu"],"みょ":["myo"],
		"りゃ":["rya"],"りゅ":["ryu"],"りょ":["ryo"],
		"ぎゃ":["gya"],"ぎゅ":["gyu"],"ぎょ":["gyo"],
		"びゃ":["bya"],"びゅ":["byu"],"びょ":["byo"],
		"ぴゃ":["pya"],"ぴゅ":["pyu"],"ぴょ":["pyo"],
		"ふぁ":["fa",],"ふぃ":["fi"],"ふぇ":["fe"],"ふぉ":["fo"],
		"じゃ":["ja","zya"],"じゅ":["ju","zyu"],"じょ":["jo","zyo"],
		"てぃ":["teli","texi","thi"],
		"でゅ":["delyu","dexyu"],
		"っか":["kka"],"っき":["kki"],"っく":["kku"],"っけ":["kke"],"っこ":["kko"],
		"っさ":["ssa"],"っし":["ssi","sshi"],"っす":["ssu"],"っせ":["sse"],"っそ":["sso"],
		"った":["tta"],"っち":["tti","cchi"],"っつ":["ttu","ttsu"],"って":["tte"],"っと":["tto"],
		"っは":["hha"],"っひ":["hhi"],"っふ":["ffu","hhu"],"っへ":["hhe"],"っほ":["hho"],
		"っま":["mma"],"っみ":["mmi"],"っむ":["mmu"],"っめ":["mme"],"っも":["mmo"],
		"っら":["rra"],"っり":["rri"],"っる":["rru"],"っれ":["rre"],"っろ":["rro"],
		"っが":["gga"],"っぎ":["ggi"],"っぐ":["ggu"],"っげ":["gge"],"っご":["ggo"],
		"っざ":["zza"],"っじ":["zzi","jji"],"っず":["zzu"],"っぜ":["zze"],"っぞ":["zzo"],
		"っだ":["dda"],"っぢ":["ddi"],"っづ":["ddu"],"っで":["dde"],"っど":["ddo"],
		"っぱ":["ppa"],"っぴ":["ppi"],"っぷ":["ppu"],"っぺ":["ppe"],"っぽ":["ppo"],
		"っきゃ":["kkya"],
		"っしゃ":["ssya","ssha"],
		"っちゃ":["ttya","ccha"],
		"っみゃ":["mmya"],
		"っりゃ":["rrya"],
		"っぎゃ":["ggya"],
		"っじゃ":["jja","zzya"],
		"っぢゃ":["ddya"],
		"っぴゃ":["ppya"],
		"っきゅ":["kkyu"],
		"っしゅ":["ssyu","sshu"],
		"っちゅ":["ttyu","cchu"],
		"っみゃ":["mmya"],
		"っりゅ":["rryu"],
		"っぎゅ":["ggyu"],
		"っじゅ":["jju","zzyu"],
		"っぢゅ":["ddyu"],
		"っぴゃ":["ppya"],
		"っきょ":["kkyo"],
		"っしょ":["ssyo","ssho"],
		"っちょ":["ttyo","ccho"],
		"っみょ":["mmyo"],
		"っりょ":["rryo"],
		"っぎょ":["ggyo"],
		"っじょ":["jjo","zzyo"],
		"っぢょ":["ddyo"],
		"っぴょ":["ppyo"],
		"ってぃ":["tteli"],
		"ー":["-"],"。":["."], "、":[","],
		"んか":["nnka","nnca","nka","nca"],"んき":["nnki","nki"],"んく":["nnku","nncu","nnqu","nku","ncu","nqu"],"んけ":["nnke","nke"],"んこ":["nnko","nnco","nko","nco"],
		"んさ":["nnsa","nsa"],"んし":["nnsi","nnci","nnshi","nsi","nci","nshi"],"んす":["nnsu","nsu"],"んせ":["nnse","nnce","nse","nce"],"んそ":["nnso","nso"],
		"んた":["nnta","nta"],"んち":["nnti","nnchi","nti","nchi"],"んつ":["nntu","nntsu","ntu","ntsu"],"んて":["nnte","nte"],"んと":["nnto","nto"],
		"んは":["nnha","nha"],"んひ":["nnhi","nhi"],"んふ":["nnfu","nnhu","nfu","nhu"],"んへ":["nnhe","nhe"],"んほ":["nnho","nho"],
		"んま":["nnma","nma"],"んみ":["nnmi","nmi"],"んむ":["nnmu","nmu"],"んめ":["nnme","nme"],"んも":["nnmo","nmo"],
		"んや":["nnya","nya"],"んゆ":["nnyu","nyu"],"んよ":["nnyo","nyo"],
		"んら":["nnra","nra"],"んり":["nnri","nri"],"んる":["nnru","nru"],"んれ":["nnre","nre"],"んろ":["nnro","nro"],
		"んわ":["nnwa","nwa"],"んを":["nnwo","nwo"],
		"んが":["nnga","nga"],"んぎ":["nngi","ngi"],"んぐ":["nngu","ngu"],"んげ":["nnge","nge"],"んご":["nngo","ngo"],
		"んざ":["nnza","nza"],"んじ":["nnji","nnzi","nji","nzi"],"んず":["nnzu","nzu"],"んぜ":["nnze","nze"],"んぞ":["nnzo","nzo"],
		"んだ":["nnda","nda"],"んぢ":["nndi","ndi"],"んづ":["nndu","ndu"],"んで":["nnde","nde"],"んど":["nndo","ndo"],
		"んば":["nnba","nba"],"んび":["nnbi","nbi"],"んぶ":["nnbu","nbu"],"んべ":["nnbe","nbe"],"んぼ":["nnbo","nbo"],
		"んぱ":["nnpa","npa"],"んぴ":["nnpi","npi"],"んぷ":["nnpu","npu"],"んぺ":["nnpe","npe"],"んぽ":["nnpo","npo"],
		"んきゃ":["nnkya","nkya"],"んきゅ":["nnkyu","nkyu"],"んきょ":["nnkyo","nkyo"],
		"んしゃ":["nnsya","nnsha","nsya","nsha"],
		"んしゅ":["nnsyu","nnshu","nsyu","nshu"],
		"んしょ":["nnsyo","nnsho","nsyo","nsho"],
		"んちゃ":["nntya","nncha","nncya","ntya","ncha","ncya"],
		"んちゅ":["nntyu","nnchu","nncyu","ntyu","nchu","ncyu"],
		"んちょ":["nntyo","nncyo","nncho","ntyo","ncyo","ncho"],
		"んひゃ":["nnhya","nhya"],"んひゅ":["nnhyu","nhyu"],"んひょ":["nnhyo","nhyo"],
		"んみゃ":["nnmya","nmya"],"んみゅ":["nnmyu","nmyu"],"んみょ":["nnmyo","nmyo"],
		"んりゃ":["nnrya","nrya"],"んりゅ":["nnryu","nryu"],"んりょ":["nnryo","nryo"],
		"んぎゃ":["nngya","ngya"],"んぎゅ":["nngyu","ngyu"],"んぎょ":["nngyo","ngyo"],
		"んびゃ":["nnbya","nbya"],"んびゅ":["nnbyu","nbyu"],"んびょ":["nnbyo","nbyo"],
		"んぴゃ":["nnpya","npya"],"んぴゅ":["nnpyu","npyu"],"んぴょ":["nnpyo","npyo"],
		"んふぁ":["nnfa","nfa"],
		"んふぃ":["nnfi","nfi"],
		"んふぇ":["nnfe","nfe"],
		"んふぉ":["nnfo","nfo"],
		"んじゃ":["nnja","nnzya","nja","nzya"],
		"んじゅ":["nnju","nnzyu","nju","nzyu"],
		"んじょ":["nnjo","nnzyo","njo","nzyo"],
		"んてぃ":["nnteli","nntexi","nnthi","nthi"],
		"んでゅ":["nndelyu","nndexyu","ndelyu","ndexyu"],
		"んー":["nn-","n-"],"ん。":["nn.","n."], "ん、":["nn,","n,"],
};

console.log(test("ちょっとまっててね"));

//ぁぃぅぇぉ　っ　ん　- , .が最初に来ることがない
//っの前に　ん　は来ない　んの後に　っ　は来ない
	function test(string) {
		let array = [];
		let prev = "";
		let curr = "";
		let next = "";
		for(let i=0; i<string.length; i++) {
			prev = string[i-1];
			curr = string[i];
			next = string[i+1];
			if(!(prev === "ん"
			  || prev === "っ"
			  || prev === "ぁ"
			  || prev === "ぃ"
			  || prev === "ぅ"
			  || prev === "ぇ"
			  || prev === "ぉ"
			  || prev === "ゃ"
			  || prev === "ゅ"
			  || prev === "ょ")) {
				if(next === "ぁ"
				|| next === "ぃ"
				|| next === "ぅ"
				|| next === "ぇ"
				|| next === "ぉ"
				|| next === "ゃ"
				|| next === "ゅ"
				|| next === "ょ"
				) {
					array.push(curr+next);
					console.log(array);
				}
			}
			if(prev === "っ") {
				if(next === "ぁ"
				 ||next === "ぃ"
				 ||next === "ぅ"
				 ||next === "ぇ"
				 ||next === "ぉ"
				 ||next === "ゃ"
				 ||next === "ゅ"
				 ||next === "ょ"
				) {
					array.push(prev+curr+next);
					console.log(array);
				}else {
					array.push(prev+curr);  
					console.log(array);
				}
			}            
			if(prev === "ん") {
				if(next === "ぁ"
				||next === "ぃ"
				||next === "ぅ"
				||next === "ぇ"
				||next === "ぉ"
				||next === "ゃ"
				||next === "ゅ"
				||next === "ょ"
				) {
					array.push(prev+curr+next);
					console.log(array);
				}else {
					array.push(prev+curr);  
					console.log(array);
				}
			}
		}
		return array;
	}
});
											// if(prev === "っ") {
											//     if(next === "ぁ"
											//     || next === "ぃ"
											//     || next === "ぅ"
											//     || next === "ぇ"
											//     || next === "ぉ"
											//     || next === "ゃ"
											//     || next === "ゅ"
											//     || next === "ょ") {
											//         array.push(prev+curr+next);
											//     }else{
											//         array.push(prev+curr);
											//     }
											// }
											// if(prev === "ん") {
											//     if(next === "ぁ"
											//     || next === "ぃ"
											//     || next === "ぅ"
											//     || next === "ぇ"
											//     || next === "ぉ"
											//     || next === "ゃ"
											//     || next === "ゅ"
											//     || next === "ょ") {
											//         nextPull = next;
											//     }
											//     if((curr === "あ"
											//     || curr === "い"
											//     || curr === "う"
											//     || curr === "え"
											//     || curr === "お"
											//     || curr === "な"
											//     || curr === "に"
											//     || curr === "ぬ"
											//     || curr === "ね"
											//     || curr === "の")) {
											//         array.push(prev+curr+nextPull);
											//     }
											// }else {
											//     array.push(curr);
											// }


