let hp_slime = 50;
let exp_slime = 15;

let atk_hero = prompt("請輸入勇者攻擊力：");

chance = Math.random();

//減法第一種
hp_slime = hp_slime - atk_hero;

//減法第二種
//hp_slime -= atk_hero;

document.write(`勇者的攻擊力為${atk_hero}。`);
document.write(`勇者爆擊點為${chance}`);
document.write(`你攻擊史萊姆，造成${atk_hero}點傷害！史萊姆剩餘${hp_slime}`);

if (hp_slime <= 0 || chance >= 0.7) {
  document.write(`史萊姆倒下了！獲得經驗值${exp_slime}`);
} else {
  document.write(`史萊姆活下來，並且逃跑了！`);
}
