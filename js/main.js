'use strict';

$(()=>{
	
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
	
	const $jaWord = $("#jaWord");
	const $jaRead = $("#jaRead");
	const $target = $("#target");
	const $scoreLabel = $("#score");
	const $missLabel = $("#miss");
	const $timerLabel = $("#timer");

	const timeLimit = 30 * 1000;
	
	const words = [
		["優柔不断","ゆうじゅうふだん"],
		["武士の情け","ぶしのなさけ"],
		["タイピングソフト","たいぴんぐそふと"],
		["エンターキー","えんたーきー"],
		["味噌豚骨","みそとんこつ"],
		["危ない橋を渡る","あぶないはしをわたる"],
		["急がば回れ","いそがばまわれ"],
		["円周率","えんしゅうりつ"],
		["足し算引き算","たしざんひきざん"],
		["アメリカ合衆国","あめりかがっしゅうこく"],
		["大敗を喫す","たいはいをきっす"],
		["根性なし","こんじょうなし"],
		["甘いものが欲しい","あまいものがほしい"],
		["オニオンサーモン","おにおんさーもん"],
		["袋のネズミ","ふくろのねずみ"],
	];
	let word;
	let score;
	let miss;
	let typeKey;
	let isPlaying = false;
	let startTime;
	let loc = 0;
	let allString = "";
	let partString = "";
	let romanArray = [];
	let romanAllArray = [];
	
	$(window).keydown(e=>{
		typeKey = e.key;
		console.log("test");
		if(typeKey === "Enter" && isPlaying === false) {
			init();
			return;
		}

		if(isPlaying === false) {
			return;
		}
		// 全てのタイピング文字列
		allString += typeKey;
		// 仕分けを行なうためのタイピング文字列
		partString += typeKey;

		romanArray = filtering(partString, romanAllArray[loc]);


		if(romanArray.length !== 0) {
			score++;
			$scoreLabel.text(score);
			updateTarget(loc);
		}else {
			miss++;
			$missLabel.text(miss);
			partString = partString.slice(0, -typeKey.length); 
			allString = allString.slice(0, -typeKey.length); 
		}
	
		if(romanArray[0] === partString) {
			loc++;
			partString = "";
		}
		if(romanAllArray.length === loc) {
			createTarget();
		}
	});
	
	function updateTarget(location) {
		let str = "";
		romanAllArray[location] = romanArray;
		for(let i=0; i<romanAllArray.length; i++) {
			str += romanAllArray[i][0];
		}
		console.log(allString.length +"番目の文字列です");
		$target.html("<span style=\"color: red;\">"+allString+"</span>" + str.substring(allString.length));
	}
	
	function updateTimer() {
		const timeLeft = startTime + timeLimit - Date.now(); //GameStartしたときの残り時間を代入
		$timerLabel.text((timeLeft/1000).toFixed(2));
		const timeoutId = setTimeout(()=>{
			updateTimer();
		}, 10);
		if(timeLeft < 0　&& isPlaying === true) {
			isPlaying = false;
			clearTimeout(timeoutId);
			$target.text("終了！エンターで再挑戦");
			$timerLabel.text("0.00");
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
		updateTimer();
		createTarget();
		score = 0;
		miss = 0;
		loc = 0;
		allString = "";
		partString = "";
		$scoreLabel.text(score);
		$missLabel.text(miss);
		startTime = Date.now(); //updateTimerを行う前の経過ミリ秒を代入
		isPlaying = true;
	}
	
	function createTarget() {
		word = words[Math.floor(Math.random() * words.length)];
		$jaWord.text(word[0]);
		$jaRead.text(word[1]);
		romanAllArray = RomajiToArray(JapaneseToArray(word[1]));
		loc = 0;
		allString = "";
		let str = "";
		for(let i=0; i<romanAllArray.length; i++) {
			str += romanAllArray[i][0];
		}
		$target.text(str);
	}

	function RomajiToArray(array) {
		let arr = [];
		for(let i=0; i<array.length; i++) {
			arr.push(kana[array[i]]);
		}
		return arr;
	}

	function defaultRomajiTargetLength(array) {
		let str = "";
		for(let i=0; i<array.length; i++) {
			str += kana[array[i]][0];
		}       
		return str.length;
	}

	function filtering(string,array) {
        let arr = [];
        for(let i=0; i<array.length; i++) {
            if(array[i].indexOf(string) === 0) { 
				arr.push(array[i]);
            }
		}
        return arr;
    }
	
	function JapaneseToArray(string) {
		let array = [];
		let prev = "";
		let curr = "";
		let next = "";
		for(let i=0; i<string.length; i++) {
			prev = string[i-1];
			curr = string[i];
			next = string[i+1];
			if(prev === undefined) {
				prev = "";
			}
			if(next === undefined) {
				next = "";
			}
			
			if(prev === "っ") {
				if(next === "ぁ" 
				|| next === "ぃ"
				|| next === "ぅ"
				|| next === "ぇ"
				|| next === "ぉ"
				|| next === "ゃ"
				|| next === "ゅ"
				|| next === "ょ"
				) {
					array.push(prev+curr+next);
				}else {
					array.push(prev+curr);
				}
				continue;
			}
			if(prev === "ん") {
				if(curr === "あ"
				|| curr === "い"
				|| curr === "う"
				|| curr === "え"
				|| curr === "お"
				|| curr === "な"
				|| curr === "に"
				|| curr === "ぬ"
				|| curr === "ね"
				|| curr === "の"
				) {
					array.push(prev);
					array.push(curr);
					continue;
				}
				if(next === "ぁ" 
				|| next === "ぃ"
				|| next === "ぅ"
				|| next === "ぇ"
				|| next === "ぉ"
				|| next === "ゃ"
				|| next === "ゅ"
				|| next === "ょ"
				) {
					array.push(prev+curr+next);
				} else {
					array.push(prev+curr);
				}
				continue;
			}
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
				continue;
			}
			if(i === string.length-1) {
				if(curr === "ん") {
					array.push(curr);
				}
			}
			if(curr === "ぁ"
            || curr === "ぃ"
            || curr === "ぅ"
            || curr === "ぇ"
            || curr === "ぉ"
            || curr === "ゃ"
            || curr === "ゅ"
            || curr === "ょ"
			|| curr === "っ"
			|| curr === "ん"
			) {
                continue;
            } else {
				array.push(curr);
			}
		}
		return array;
	}
    
    function shuffle(array) {
        let n = array.length;
        let t;
        let i;
        while (n) {
            i = Math.floor(Math.random() * n--);
            t = array[n];
            array[n] = array[i];
            array[i] = t;
        }
        return array;
	}
});