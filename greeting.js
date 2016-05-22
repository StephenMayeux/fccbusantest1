function reverse(str) {
  answer = str.split("").reverse().join("")
  answer.map(function(letter) {
    letter.toUpperCase();
  });

  return answer.join("")
}

reverse("butts")
