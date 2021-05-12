// // const, let

// var var1 = "var";
// console.log(var1);

// // var変数のは上書き可能
// var1 = "varvar";
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "varvarvar";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書きが可能
// var2 = "letを上書き";
// console.log(var2);

// // let は再宣言不可能

// let var2 = "let変数を再宣言";

// const var3 = "const";
// console.log(var3);

// var3 = "constconst";

// const var3  = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const var4 = {
//   name: "ジャンケン",
//   age: 28
// };

// var4.name = "jakenn";
// var4.address = "Fukuoka";
// console.log(var4);

// // constで定義した配列はプロパティの変更が可能
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

// // テンプレート文字列

// const name = "たか";
// const age = 26;
// // [私の名前はたかです。年齢は26歳です。]

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//　アロー関数

//　従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //　アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// //　処理が一行で終わる場合は{}要らない
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "taka",
//   age: 26
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//

// デフォルト値、引数
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("taka");

//スプレッド構文
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //分割代入
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー,結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // //コピー
// const arr6 = [...arr4];
// console.log(arr6);
// // arr6[0] = 100;
// // console.log(arr4);

// //結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//"="でコピーしたらミスが起きる
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

//mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}ばんめは${nameArr[index]}です`);
// }

// map 使い方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}ばんめは${name}です`));

//mapとアロー関数
// nameArr.map((name) => console.log(name));

//filter 使い方 (returnの後は条件式) / 奇数の取り出し
// = ある条件で値を取り出す際に使える
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

//例題　（佐藤だけさんをつけない）
// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//三項演算子
//ある条件? 条件がtrue : 条件がfalse;
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// typeof その変数の方を判定してくれる
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です!!";
// };
// console.log(checkSum(50, 40));

//論理演算子の本当の意味を知ろう! && ||
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// // || は左側がfalseなら右側を返す!
// // || は左側がtrueなら左側を返す!
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// // && は左側がtrueなら右側を返す!
// // || は左側がfalseなら左側を返す!
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
