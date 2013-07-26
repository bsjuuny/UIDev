/*

Working remake of this:
http://dribbble.com/shots/946731-Unsafe-Lock-Rebound

*/

var number = document.getElementsByClassName("number"),
    numberSelect = document.getElementsByClassName("number_select");

for(i = 0; i < number.length; i++) {
  numberSelect[i].addEventListener("click", fnRotateNum, false);
  numberSelect[i].style.marginTop = "0px";
  console.log(numberSelect[i]);
}

function fnRotateNum() {
  spans = this.getElementsByTagName("span");
  if(parseInt(this.style.marginTop, 10) <= -612 + 153) {
    this.style.marginTop = "0px";
    for(i = 0; i < spans.length; i++) {
      if(spans[i].classList.contains("top_number")) {
        spans[i].classList.remove("top_number");
      }
      if(spans[i].classList.contains("bottom_number")) {
        spans[i].classList.remove("bottom_number");;
      }
    }
    spans[0].classList.add("top_number");
    spans[2].classList.add("bottom_number");
  }
  else {
    this.style.marginTop = parseInt(this.style.marginTop, 10) - 51 + "px";
    for(i = 0; i < spans.length; i++) {
      if(spans[i].classList.contains("top_number")) {
        spans[i].classList.remove("top_number");
        console.log(spans[i+1]);
        spans[i+1].classList.add("top_number");
        i++;
      }
      if(spans[i].classList.contains("bottom_number")) {
        spans[i].classList.remove("bottom_number");
        spans[i+1].classList.add("bottom_number");
        i += 1;
      }
    }
  }
  console.log(this.getElementsByTagName("div"));
}