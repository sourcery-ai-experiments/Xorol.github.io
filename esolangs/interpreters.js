function factorial(n) { //Code for factorial
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}

function interpretNumbers() {
  //init vars
  var program = document.getElementById("numbers-in").value;
  var stack = [];
  var accum = 0;
  var output = "";
  var pointer = 0;
  var quit = false;
  //main loop
  while (true) {
    var command = program.split(" ")[pointer];
    if ((pointer === program.length - 1) || (command === undefined) || (quit)) {
      break; //oh no, the program has ended!  time to break
    }
    //console.log(pointer.toString() + " " + command + " " + stack.join(" ") + output) //debug
    switch (command) {
      case "10":
        //add
        stack.push(stack.pop() + stack.pop());
        break;
      case "11":
        //subt
        stack.push(stack.pop() - stack.pop());
        break;
      case "12":
        //mul
        stack.push(stack.pop() * stack.pop());
        break;
      case "13":
        //div
        stack.push(stack.pop() / stack.pop());
        break;
      case "14":
        //floor div
        stack.push(Math.floor(stack.pop() / stack.pop()));
        break;
      case "15":
        //div + mod
        let a = stack.pop();
        let b = stack.pop();
        stack.push(a / b);
        stack.push(a % b);
        break;
      case "16":
        //inc
        stack.push(stack.pop()++);
        break;
      case "17":
        //dec
        stack.push(stack.pop()--);
        break;
      case "18":
        //digital root
        stack.push(1 + (stack.pop() - 1) % 9)
        break;
      case "19":
        //factorial
        stack.push(factorial(stack.pop()))
      case "20":
        //push to stack
        pointer++;
        stack.push((parseInt(program.split(" ")[pointer])));
        break;
      case "21":
        //reverse stack
        stack = stack.reverse();
      case "22":
        //swap top two values
        [stack[stack.length - 1], stack[stack.length - 2]] = [stack[stack.length - 2], stack[stack.length - 1]];
        break;
      case "23":
        //discard top value
        stack.pop();
        break;
      case "24":
        //Set accum to first item on stack
        accum = stack.pop();
        break;
      case "25":
        //push accum to stack
        stack.push(accum);
        break;
      case "26":
        //duplicate top value
        stack[stack.length] = stack[stack.length - 1];
        break;
      case "27":
        //Clear the stack
        stack = [];
        break;
      case "30":
        //output
        output += stack.pop().toString();
        break;
      case "31":
        //output as ascii
        output += String.fromCharCode(stack.pop());
        break;
      case "32":
        //output entie stack
        output += stack.join(" ");
        break;
      case "33":
        //entire stack as ascii
        for (var i = 0; i <= stack.length - 1; i++) {
          output += String.fromCharCode(stack[i]);
        }
        break;
      case "34":
        //take input as integer
        stack.push(parseInt(window.prompt("Enter a number: ")));
        break;
      case "35":
        //take inpt as char
        stack.push(window.prompt("Enter a character: ").charCodeAt(0));
        break;
      case "36":
        //input as ascii string
        var x = window.prompt("Enter something: ");
        for (var i = 0; i <= x.length - 1; i++) {
          stack.push(x.charCodeAt(i));
        }
        break;
      case "40":
        //do next thing if accum is not zero
        if (accum === 0) { break; }
        pointer++;
        if ((program.split(" ")[pointer] === "42") || (program.split(" ")[pointer] === "20")) { pointer++; }
        break;
      case "41":
        //do next thing if accum is  zero
        if (accum != 0) { break; }
        pointer++;
        if ((program.split(" ")[pointer] === "42") || (program.split(" ")[pointer] === "20")) { pointer++; }
        break;
      case "42":
        //goto
        pointer = parseInt(program[pointer++]) - 1;
        break;
      case "43":
        pointer = 0;
        break;
      case "~":
        quit = true;
        break;

    }
    pointer++;
  }


  document.getElementById("numbers-out").innerHTML = output;
}

function interpretpP() {
  var program = document.getElementById("pp-in").value;
  var output = "";
  for (var i = 0; i <= program.length - 1; i++) {
    var command = program[i];
    if (command != "p") {
      break;
    } else if (command === "p") {
      output += "Hello, world!\n"
    }
  }
  document.getElementById("pp-out").innerHTML = output;
}

function interpretDeadfish() {
  var program = document.getElementById("><x>-in").value;
  var idx = 0;
  var output = "";

  for (var i = 0; i <= program.length - 1; i++) {
    switch (program[i]) {
      case "i":
        //increment
        idx++;
        break;
      case "d":
        //decrement
        idx--;
        break;
      case "o":
        //output
        output +=  "\n" + idx.toString();
        break;
      case "s":
        idx = Math.pow(idx, 2);
        break;
    }
  }
  document.getElementById("><x>-out").innerHTML = output;
}

function interpretStar() {
  var code=document.getElementById("*-in").value;
  if(code === "*") document.getElementById("*-out").innerHTML = "Hello, world!";
  if(code === " * ") document.getElementById("*-out").innerHTML = Math.random() * Number.MAX_VALUE;
  if(code === "*+*") while(true){}
}
