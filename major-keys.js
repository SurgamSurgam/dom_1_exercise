let name = prompt('What is your name?');
let first = prompt('What is your first key?');
let second = prompt('What is your second key?');
let third = prompt('What is your third key?');
let fourth = prompt('What is your fourth key?');
let fifth = prompt('What is your fifth key?');

let header = document.getElementById('header');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');

let selectedName = header.innerHTML = `${name}'s Major Keys`;
let selectedFirst = item1.innerHTML = first;
let selectedSecond = item2.innerHTML = second;
let selectedThird = item3.innerHTML = third;
let selectedFourth = item4.innerHTML = fourth;
let selectedFifth = item5.innerHTML = fifth;

function highlight(input, numInnerHtmlId) {
  let copy = input.slice(0);
  let action = "<span style = 'background-color : yellow'>" + copy + "</span>";

  numInnerHtmlId.innerHTML = action;
  // switch (numInnerHtmlId) {
  //   case 1:
  //     item1.innerHTML = action;
  //     break;
  //   case 2:
  //     item2.innerHTML = action;
  //     break;
  //   case 3:
  //     item3.innerHTML = action;
  //     break;
  //   case 4:
  //     item4.innerHTML = action;
  //     break;
  //   case 5:
  //     item5.innerHTML = action;
  //     break;

}

if (first.toUpperCase() === first) {
  first = first.toLowerCase();
  highlight(first, item1);
} else if (second.toUpperCase() === second) {
  second = second.toLowerCase();
  highlight(second, item2);
} else if (third.toUpperCase() === third) {
  third = third.toLowerCase();
  highlight(third, item3);
} else if (fourth.toUpperCase() === fourth) {
  fourth = fourth.toLowerCase();
  highlight(fourth, item4);
} else if (fifth.toUpperCase() === fifth) {
  fifth = fifth.toLowerCase();
  highlight(fifth, item5);
}
