// 🎨 全カラー（完全版）
const colors = [
{name:"カーマイン",color:"#d7003a",hint:"西洋の真紅",ex:"コチニール由来の動物染料の赤"},
{name:"茜色",color:"#b7282d",hint:"アカネの根",ex:"夕日の色を表す色名としても使われる"},
{name:"ワインレッド",color:"#83274e",hint:"赤ワインのような色",ex:"濃く深い紫みの赤"},
{name:"牡丹色",color:"#e7609e",hint:"室町時代にかけて栽培された",ex:"牡丹の花のような鮮やかな赤紫"},
{name:"桜色",color:"#ffdbed",hint:"紅染めの中で最も淡いピンク",ex:"桜の花のようなごく薄い紫みを帯びた赤"},
{name:"珊瑚色",color:"#ff7f7f",hint:"洋の東西を問わず珍重されたピンク系の色",ex:"珊瑚のような明るい黄みを帯びた赤"},
{name:"ピーチ",color:"#ebc0af",hint:"とある果実の色",ex:"桃の果肉の色を表す明るく淡いオレンジ色"},
{name:"ベージュ",color:"#eedcb3",hint:"未加工・未染料の毛織物の色を表す色。",ex:"明るい灰みの赤みを帯びた黄"},
{name:"煉瓦色",color:"#a2482b",hint:"深い赤系の建物に使われる色",ex:"赤レンガのようなくすんだ赤褐色"},
{name:"スカーレット",color:"#ff2400",hint:"和色名「緋色」",ex:"炎のような鮮やかな黄みの赤"},
{name:"朱色",color:"#e94709",hint:"銀朱を原料とする鉱物顔料の色",ex:"印鑑の朱肉のような鮮やかな黄みの赤"},
{name:"ボルドー",color:"#5e0e18",hint:"フランス産の赤ワインのような色",ex:"赤ワインのような暗い赤紫系の色"},
{name:"ローズピンク",color:"#ff66cc",hint:"ピンク色のバラに由来する落ち着いた気品のある色",ex:"バラの色の中でも明るい紫みを帯びた赤"},
{name:"鴇色",color:"#f9a1d0",hint:"江戸時代に流行した明るく優しいピンク",ex:"薄い紫みを帯びた赤"},
{name:"サーモンピンク",color:"#fa8072",hint:"魚の身の色からとられた",ex:"鮭の身のようなやわらかい黄みの赤"},
{name:"ローズベージュ",color:"#bc9593",hint:"赤みがかったベージュ",ex:"バラの花びらのような赤みを帯びたベージュ"},
{name:"テラコッタ",color:"#83452a",hint:"イタリア語で「焼いた土」",ex:"粘土で作った素焼きの土器・装飾品の色"},

{name:"ココア",color:"#6e4a55",hint:"カカオ豆から作られる飲み物",ex:"ココアのような赤みがある茶色"},
{name:"コーヒーブラウン",color:"#834f2f",hint:"茶色の中でも黄みがかっていることが特徴",ex:"炒ったコーヒー豆のような黄みを帯びた茶色"},
{name:"黄丹",color:"#ee7948",hint:"皇太子の礼服の色",ex:"紅花とくちなしで染めたオレンジ"},
{name:"山吹色",color:"#f8b500",hint:"黄色の花から名づけられた",ex:"ヤマブキのような鮮やかな黄色"},
{name:"鬱金色",color:"#fabf13",hint:"カレー粉やたくあん漬けの着色料としても用いられる",ex:"ウコンの根で染めた赤みの黄色"},
{name:"キャメル",color:"#bb8d5f",hint:"ラクダの毛皮の色からとられた",ex:"黄みが強く、あまり暗くない茶色"},
{name:"チョコレート",color:"#602d1d",hint:"カカオ豆で作られたお菓子のような色",ex:"赤みを帯びた暗い茶色"},
{name:"セピア",color:"#483c2c",hint:"イカ墨の袋から作られた",ex:"イカが墨を出す墨汁嚢からつくられた古代の絵の具の色で、暗い茶色。"},
{name:"レモンイエロー",color:"#fff33f",hint:"レモンの皮のような色",ex:"鮮やかな黄色の中でも、やや緑みを帯びた黄色"},
{name:"カーキー",color:"#c5a05a",hint:"塵・埃を意味するペルシャ語に由来する色",ex:"イギリス軍の軍服の色として採用された、くすんだ黄みの緑色"},
{name:"ジョンブリアン",color:"#ffdc00",hint:"フランス語で「輝くような黄色」",ex:"アンチモンという金属を原料とする顔料"},

{name:"オリーブ",color:"#72640a",hint:"旧約聖書にも登場する実のような色",ex:"オリーブの実のような暗い緑みの黄色"},
{name:"萌黄色",color:"#aacf53",hint:"若葉",ex:"春"},
{name:"モスグリーン",color:"#8a9a5b",hint:"苔色",ex:"落ち着き"},
{name:"エメラルド",color:"#50c878",hint:"宝石緑",ex:"宝石"},
{name:"ボトルグリーン",color:"#006a4e",hint:"濃緑",ex:"瓶"},
{name:"ビリジアン",color:"#40826d",hint:"青緑",ex:"顔料"},

{name:"スカイブルー",color:"#87ceeb",hint:"空色",ex:"空"},
{name:"藍色",color:"#165e83",hint:"濃青",ex:"伝統"},
{name:"ターコイズブルー",color:"#40e0d0",hint:"青緑",ex:"石"},
{name:"マリンブルー",color:"#003366",hint:"海色",ex:"深海"},
{name:"ネイビーブルー",color:"#191970",hint:"紺色",ex:"海軍"},

{name:"江戸紫",color:"#6a0dad",hint:"青紫",ex:"江戸"},
{name:"バイオレット",color:"#8f00ff",hint:"紫",ex:"光"},
{name:"ラベンダー",color:"#e6e6fa",hint:"淡紫",ex:"花"},
{name:"ライラック",color:"#c8a2c8",hint:"薄紫",ex:"花"},

{name:"スノーホワイト",color:"#ffffff",hint:"白",ex:"雪"},
{name:"アイボリー",color:"#fffff0",hint:"象牙",ex:"柔白"},
{name:"銀鼠",color:"#a0a0a0",hint:"灰色",ex:"グレー"},
{name:"チャコールグレー",color:"#36454f",hint:"濃灰",ex:"炭"},
{name:"漆黒",color:"#0d0d0d",hint:"黒",ex:"深黒"}
];

let current;
let score = 0;
let wrongList = [];
let reviewMode = false;
let reviewIndex = 0;
let lastQuestion = null;

let gameMode = "normal";
let questionCount = 0;

let timeLeft = 60;
let timer = null;

// ヒント
function showHint() {
  document.getElementById("hint").innerText = "ヒント：" + current.hint;
}

// 問題生成
function generateQuestion() {
  if (reviewMode) return loadReviewQuestion();

  do {
    current = colors[Math.floor(Math.random() * colors.length)];
  } while (current === lastQuestion);

  lastQuestion = current;
  drawQuestion();
}

// 復習問題
function loadReviewQuestion() {
  if (reviewIndex >= wrongList.length) {
    alert("復習おわり！");
    reviewMode = false;
    return;
  }
  current = wrongList[reviewIndex];
  drawQuestion();
}

// 描画
function drawQuestion() {
  document.getElementById("colorBox").style.background = current.color;
  document.getElementById("hint").innerText = "";

  let choices = [current.name];

  while (choices.length < 4) {
    let r = colors[Math.floor(Math.random() * colors.length)].name;
    if (!choices.includes(r)) choices.push(r);
  }

  choices.sort(() => Math.random() - 0.5);

  let html = "";
  choices.forEach(c => {
  html += `<button class="choice" onclick="checkAnswer('${c}')">
    ${c}
  </button>`;
});

  document.getElementById("choices").innerHTML = html;
  document.getElementById("result").innerText = "";
  document.getElementById("explanation").innerText = "";
}

// 判定
function checkAnswer(ans) {
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach(btn => {
    if (btn.innerText === current.name) btn.classList.add("correct");
    else if (btn.innerText === ans) btn.classList.add("wrong");
    btn.disabled = true;
  });

  if (ans === current.name) {
    score++;
    document.getElementById("result").innerText = "⭕ 正解！";
  } else {
    document.getElementById("result").innerText = "❌ 正解は「" + current.name + "」";
    wrongList.push(current);
  }

  document.getElementById("score").innerText = score;
  document.getElementById("explanation").innerText = "解説：" + current.ex;

  if (reviewMode) reviewIndex++;
  questionCount++;
}

// 次
function nextQuestion() {
  if (gameMode === "challenge" && questionCount >= 10) {
    showResult(10);
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("modeScreen").style.display = "block";
    return;
  }
  generateQuestion();
}

// 間違い一覧
function showReview() {
  let html = "<h3>📚 間違い一覧</h3>";

  if (wrongList.length === 0) {
    html += "まだ間違いなし！✨";
  } else {
    wrongList.forEach(item => {
      html += `
      <div style="margin:10px;padding:10px;background:#fff;border-radius:10px;">
        <div style="width:40px;height:40px;background:${item.color};margin:auto;"></div>
        <div>${item.name}</div>
      </div>`;
    });
  }

  document.getElementById("review").innerHTML = html;
}

// 復習モード開始
function startReview() {
  if (wrongList.length === 0) {
    alert("復習する問題がないよ！");
    return;
  }

  reviewMode = true;
  reviewIndex = 0;

  
  generateQuestion();
}
function getTextColor(bgColor) {
  let r = parseInt(bgColor.substr(1,2),16);
  let g = parseInt(bgColor.substr(3,2),16);
  let b = parseInt(bgColor.substr(5,2),16);

  let brightness = (r*299 + g*587 + b*114) / 1000;

  return brightness > 140 ? "#000" : "#fff";
}

function startGame(mode) {
  gameMode = mode;
  document.getElementById("modeScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";
  score = 0;
  questionCount = 0;
  document.getElementById("score").innerText = score;
  if (gameMode === "timer") {
    timeLeft = 60;
    document.getElementById("timerDisplay").style.display = "block" ;
    startTimer();
  } else {
    document.getElementById("timerDisplay").style.display = "none";
  }
  generateQuestion();
}
function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timerDisplay").innerText =
      "残り時間：" + timeLeft + "秒";
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert(
          `時間切れ！\n\nスコア：${score}`
      );
      document.getElementById("quizScreen").style.display = "none";
      document.getElementById("modeScreen").style.display = "block";
    }
  }, 1000);
}
function showResult(totalQuestions){
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
  document.getElementById("finalScore").innerText =
      `${score} / ${totalQuestions} 問正解`;
  let rate = Math.round(score / totalQuestions * 100);
  document.getElementById("finalRate").innerText =
      `正答率 ${rate}%`;
}
function restartGame(){
  document.getElementById("resultScreen").style.display="none"
  document.getElementById("modeScreen").style.display="block"
}