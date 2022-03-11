const setOfWords = [
    "This is saurabh and you are the most welcome to come to my typing project.",
    "If you want to live a happy life, tie it to a goal, not to people or things",
    "Hope you are having fun this is a simple task that you have to complete and check your potential!",
  ];
  
  const massage = document.getElementById("massage");
  
  const typeWriter = document.getElementById("textarea");
  
  const button = document.getElementById("btn");
  
  let startTime, endTime;
  
  const random = () => {
    var randomNo12 = Math.floor(Math.random() * setOfWords.length);
    massage.innerText = setOfWords[randomNo12];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
  };
  
  const random1 = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);
    // how many words he types
    let usertypeword = typeWriter.value;
    let wordCount = count(usertypeword);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalmassage = "you typed total at " + speed + " word per minute ";
    finalmassage += comparewords(massage.innerText, usertypeword);
  
    massage.innerText = finalmassage;
  };
  
  const comparewords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;
  
    word1.forEach(function (usertype, index) {
      if (usertype == word2[index]) {
        cnt++;
      }
    });
  
    let errorwords = word1.length - cnt;
    return (
      cnt +
      " correct out of " +
      word1.length +
      " word and on the total number of error are " +
      errorwords +
      "."
    );
  };
  
  const count = (ab) => {
    let response = ab.split(" ").length;
    console.log(response);
    return response;
  };
  
  button.addEventListener("click", function () {
    console.log(this);
    if (this.innerText == "Start") {
      typeWriter.disabled = false;
      random();
    } else if (this.innerText == "Done") {
      typeWriter.disabled = true;
      button.innerText = "Start";
      random1();
    }
  });
  
  // function random(){
  //     // var randomNo12 =  Math.floor(Math.random()*setOfWords.length);
  //     // massage.innerText = setOfWords[randomNo12];
  // var r = Math.round(Math.random()*445);
  // var g = Math.round(Math.random()*405);
  // var b = Math.round(Math.random()*444);
  // console.log(r,g,b);
  // document.body.style.background ="rgb("+r + ","+ g +","+b+")";
  // }
  