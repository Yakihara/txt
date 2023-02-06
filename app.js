 for(var a = 1; a<=150; a++){
        console.log(a,"hi world")
    }    


   for (var i = 1; i<=20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
   } 

   function func1(a) {
    console.log(arguments[0]);
  }
  func1(1);
  if (func1 > 0)
  {
    console.log("Hello")
  }
  else
  {
    console.log("olleH")
  }

  const fs = require("fs");
  let text = fs.readFileSync("1.txt", "utf-8");
  function func2(a, b) {
    console.log(a);
    console.log(b);
    fs.writeFileSync("1.txt", text + a * b);
  }
  func2(1, 2);
  console.log(text);



