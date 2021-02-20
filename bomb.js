

// Grobal id Area
const btn = document.getElementById('btn');
const reset = document.getElementById("reset");
 
// Definition EventListener Area

 btn.addEventListener("click" , way);
 reset.addEventListener("click" , del);


 function way(){
   const output = document.getElementById("output");
     rand = Math.floor(Math.random()*5); //要素数を定義
     if (rand == 0) output.innerHTML = "まひろ";
     if (rand == 1) output.innerHTML = "戸田のダイナマイト";
     if (rand == 2) output.innerHTML = "オクラ";
     if (rand == 3) output.innerHTML = "味の横綱";
     if (rand == 4) output.innerHTML = "渾身の一撃";
     const reset = document.getElementById("reset");
     reset.innerHTML = "RESET";
   }


   function del(){
     reset.addEventListener("click" , del);
     output.innerHTML = "Result";
     reset.innerHTML = "";
 };
