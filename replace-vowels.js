function replaceVowels(str) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let num = 0;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      newStr += num;
      num === 9 ? (num = 0) : num++;
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

replaceVowels("akashraaaaaaaaaaaaaaaaaaaaaaaaaa");
