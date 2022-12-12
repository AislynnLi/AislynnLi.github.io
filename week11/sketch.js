  console.log("here I am")

  let button_console = document.getElementById("button1");
  let theMain = document.querySelector('body')


  let username = document.getElementById('name');
  username.addEventListener('change',upload_input_name)
  let input_text = document.getElementById('input_text');
  input_text.addEventListener('change',upload_input_text)

  let quote_input_name = document.getElementById('quote_input_name');
  let quote_input_text = document.getElementById('quote_input_text');

  let audio = document.getElementById("song1");
  let audio2 = document.getElementById("song2");

  function upload_input_name(){
    quote_input_name.textContent = "- "+ username.value;
  }

  function upload_input_text(){
    quote_input_text.textContent = input_text.value;
  }



  let button1 = document.getElementById('button1');
  button1.addEventListener('click',connection)

  function connection(){
    theMain.style.backgroundImage = "url(assets/image1.jpg)";
    quote_input_text.style.direction = "ltr";
    quote_input_text.style.letterSpacing = "11px";
    quote_input_text.style.wordSpacing = "-14px";
    quote_input_text.style.wordBreak = "break-all";
    quote_input_text.textContent = input_text.value;
    audio.play();
  }

  let button2 = document.getElementById('button2');
  button2.addEventListener('click',order)

  function order(){
    theMain.style.backgroundImage = "url(assets/image3.jpg)";
    quote_input_text.style.wordSpacing = "normal";
    quote_input_text.style.wordBreak = "normal";
    quote_input_text.style.letterSpacing = "normal";
    let split_after = input_text.value.split(" ");
    quote_input_text.textContent = '';
    for(let i = 0; i<split_after.length; i++){
        if (i%4 != 1){
            console.log(i)
            quote_input_text.textContent += split_after[i] + ' ';
        }
    }
    audio.play();
  }


  let button3 = document.getElementById('button3');
  button3.addEventListener('click',direction)

  function direction(){
    theMain.style.backgroundImage = "url(assets/image4.jpg)";
    quote_input_text.style.direction = "rtl";
    quote_input_text.style.unicodeBidi = "bidi-override";
    quote_input_text.style.wordSpacing = "normal";
    quote_input_text.style.wordBreak = "normal";
    quote_input_text.style.letterSpacing = "normal";
    quote_input_text.textContent = input_text.value;
    audio.play();
  }

  let button4 = document.getElementById('button4');
  button4.addEventListener('click',normal)

  function normal(){
    theMain.style.backgroundImage = "url(assets/image5.jpg)";
    quote_input_text.style.direction = "ltr";
    quote_input_text.style.wordSpacing = "normal";
    quote_input_text.style.wordBreak = "normal";
    quote_input_text.style.letterSpacing = "normal";
    quote_input_text.textContent = input_text.value;
    audio2.play();
  }

  let button5 = document.getElementById('button5');
  button5.addEventListener('click',focus)

  function focus(){
    theMain.style.backgroundImage = "url(assets/image2.jpg)";
    quote_input_text.style.direction = "ltr";
    quote_input_text.style.wordSpacing = "normal";
    quote_input_text.style.wordBreak = "normal";
    quote_input_text.style.letterSpacing = "normal";

    let split_after_focus = input_text.value.split('');
    quote_input_text.textContent = '';
    for(let i = 0; i<split_after_focus.length; i++){
        if (i%6 != 5){
            console.log(i)
            quote_input_text.textContent += split_after_focus[i];
        }
    }
    audio.play();
  }
  
  
