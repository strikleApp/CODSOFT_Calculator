const resultLable = document.getElementById("result");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

//  NUMBERS
zero.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = zero.innerText;
  } else {
    resultLable.textContent += zero.innerText;
  }
});

one.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = one.innerText;
  } else {
    resultLable.textContent += one.innerText;
  }
});

two.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = two.innerText;
  } else {
    resultLable.textContent += two.innerText;
  }
});

three.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = three.innerText;
  } else {
    resultLable.textContent += three.innerText;
  }
});

four.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = four.innerText;
  } else {
    resultLable.textContent += four.innerText;
  }
});

five.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = five.innerText;
  } else {
    resultLable.textContent += five.innerText;
  }
});

six.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = six.innerText;
  } else {
    resultLable.textContent += six.innerText;
  }
});

seven.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = seven.innerText;
  } else {
    resultLable.textContent += seven.innerText;
  }
});

eigth.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = eigth.innerText;
  } else {
    resultLable.textContent += eigth.innerText;
  }
});

nine.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
    resultLable.textContent = nine.innerText;
  } else {
    resultLable.textContent += nine.innerText;
  }
});

// OPERATORS

const opertatorsArray = ["+", "-", "*", "/"];

add.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
  } else {
    if (
      opertatorsArray.includes(
        resultLable.textContent[resultLable.textContent.length - 1]
      )
    ) {
    } else {
      resultLable.textContent += add.innerText;
    }
  }
});

subtract.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
  } else {
    if (
      opertatorsArray.includes(
        resultLable.textContent[resultLable.textContent.length - 1]
      )
    ) {
    } else {
      resultLable.textContent += subtract.innerText;
    }
  }
});

multiply.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
  } else {
    if (
      opertatorsArray.includes(
        resultLable.textContent[resultLable.textContent.length - 1]
      )
    ) {
    } else {
      resultLable.textContent += multiply.innerText;
    }
  }
});

divide.addEventListener("click", function () {
  if (resultLable.textContent == "0") {
  } else {
    if (
      opertatorsArray.includes(
        resultLable.textContent[resultLable.textContent.length - 1]
      )
    ) {
    } else {
      resultLable.textContent += divide.innerText;
    }
  }
});

equal.addEventListener("click", function () {
  var content = resultLable.textContent;
  if (opertatorsArray.includes(content[content.length - 1])) {
    content = content.substring(0, content.length - 1);
  }
  const result = eval(content);
  resultLable.textContent = result;
});
clear.addEventListener("click", function () {
  resultLable.textContent = "0";
});

// KEYPRESS

function addKeypress(element, key) {
  document.addEventListener("keypress", function (event) {
    if (event.key == key) {
      element.click();
    }
  });
}
addKeypress(zero, "0");
addKeypress(one, "1");
addKeypress(two, "2");
addKeypress(three, "3");
addKeypress(four, "4");
addKeypress(five, "5");
addKeypress(six, "6");
addKeypress(seven, "7");
addKeypress(eigth, "8");
addKeypress(nine, "9");
addKeypress(add, "+");
addKeypress(subtract, "-");
addKeypress(multiply, "*");
addKeypress(divide, "/");
addKeypress(equal, "=");
addKeypress(clear, "c");
addKeypress(equal, "Enter");
