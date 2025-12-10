let hp_slime = 50;
let exp_slime = 15;

let atk_hero = Number(prompt("請輸入勇者攻擊力："));

while (isNaN(atk_hero)) {
    alert("❌ 請輸入數字！");
    atk_hero = Number(prompt("請輸入武器攻擊力："));
}

//減法第一種
hp_slime = hp_slime - atk_hero;

//減法第二種
//hp_slime -= atk_hero;

document.write(`勇者的攻擊力為${atk_hero}。<br>`);
document.write(`你攻擊史萊姆，造成${atk_hero}點傷害！史萊姆剩餘${hp_slime}`);

if (hp_slime <= 0) {
    document.write(`史萊姆倒下了！獲得經驗值${exp_slime}`);


  } else {
    document.write(`史萊姆活下來，並且逃跑了！`);
  }