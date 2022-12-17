console.log("alive")
var upper_strokes_data = []
var bottom_strokes_data = []
var pianpang_radicals = []
var bushou_radicals = []
var already = false
var upper_images = []
var bottom_images = []
var pianpang_information = []
var bushou_information = []

let audio_key = document.getElementById("key");
let audio_write = document.getElementById("write");
let audio_change = document.getElementById("change");

var answer_on = 1;
let ni_pie = document.getElementById("pie")
let ni_shu = document.getElementById("shu")
let yan_dian = document.getElementById("dian")
let yan_gou = document.getElementById("hengzhegou")
let shou_heng = document.getElementById("heng")
let shou_shu = document.getElementById("shugou")
let shou_ti = document.getElementById("ti")

let turn_right = document.getElementById("turn_right")
let turn_left = document.getElementById("turn_left")

if(page_on == 1){
turn_left.addEventListener("click", change_answer_left)
turn_right.addEventListener("click", change_answer_right)

let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")

var exist_1 = false;
var exist_2 = false;
var exist_3 = false;

function change_answer_left(){
    audio_key.play();

    if (answer_on > 1){
        answer_on = answer_on-1
        answer1.style.display = "none"
        answer2.style.display = "none"
        answer3.style.display = "none"
        exist_1 = false;
        exist_2 = false;
        exist_3 = false;
    }
    if(answer_on == 1){
        ni_pie.style.display = "inline-block"
        ni_shu.style.display = "inline-block"
        yan_dian.style.display = "none"
        yan_gou.style.display = "none"
        shou_heng.style.display = "none"
        shou_shu.style.display = "none"
        shou_ti.style.display = "none"
    }
    if(answer_on == 2){
        ni_pie.style.display = "none"
        ni_shu.style.display = "none"
        yan_dian.style.display = "inline-block"
        yan_gou.style.display = "inline-block"
        shou_heng.style.display = "none"
        shou_shu.style.display = "none"
        shou_ti.style.display = "none"
    }
    
    if(answer_on == 3){
        ni_pie.style.display = "none"
        ni_shu.style.display = "none"
        yan_dian.style.display = "none"
        yan_gou.style.display = "none"
        shou_heng.style.display ="inline-block"
        shou_shu.style.display = "inline-block"
        shou_ti.style.display = "inline-block"
    }
}
function change_answer_right(){
    audio_key.play();
    if (answer_on < 3){
        answer_on = answer_on+1
        exist_1 = false;
        exist_2 = false;
        exist_3 = false;
        answer1.style.display = "none"
        answer2.style.display = "none"
        answer3.style.display = "none"
    }
    if(answer_on == 1){
        ni_pie.style.display = "inline-block"
        ni_shu.style.display = "inline-block"
        yan_dian.style.display = "none"
        yan_gou.style.display = "none"
        shou_heng.style.display = "none"
        shou_shu.style.display = "none"
        shou_ti.style.display = "none"
    }
    if(answer_on == 2){
        ni_pie.style.display = "none"
        ni_shu.style.display = "none"
        yan_dian.style.display = "inline-block"
        yan_gou.style.display = "inline-block"
        shou_heng.style.display = "none"
        shou_shu.style.display = "none"
        shou_ti.style.display = "none"
    }
    
    if(answer_on == 3){
        ni_pie.style.display = "none"
        ni_shu.style.display = "none"
        yan_dian.style.display = "none"
        yan_gou.style.display = "none"
        shou_heng.style.display ="inline-block"
        shou_shu.style.display = "inline-block"
        shou_ti.style.display = "inline-block"
    }
}
}



//https://www.youtube.com/watch?v=6OhMbf2v_jI
fetch('data.json')
.then(response => response.json())
.then(json => {
    json.upper_strokes.forEach(stroke =>{
        upper_strokes_data.push(stroke.name)
    });
    json.bottom_strokes.forEach(stroke =>{
        bottom_strokes_data.push(stroke.name)
    });
    json.pianpang_radicals_data.forEach(stroke =>{
        pianpang_radicals.push(stroke.name)
    });
    json.bushou_radicals_data.forEach(stroke =>{
        bushou_radicals.push(stroke.name)
    });
    json.upper_strokes.forEach(stroke =>{
        upper_images.push(stroke.image)
    });
    json.bottom_strokes.forEach(stroke =>{
        bottom_images.push(stroke.image)
    });
    console.log(upper_images)

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

let bushou = getRandomArrayElements(bushou_radicals, 16).slice(0);
let pianpang = getRandomArrayElements(pianpang_radicals, 16).slice(0);

divs_upper = []
divs_bottom = []

// page
// let page_on;

let page1 = document.getElementById('page1')
page1.addEventListener('click',change_page_1)

function change_page_1(){
    audio_key.play();
    let page_on = 1;
    console.log(page_on)
}

let page2 = document.getElementById('page2')
page2.addEventListener('click',change_page_2)

function change_page_2(){
    audio_key.play();
    let page_on = 2;
    console.log(page_on)
}

let page3 = document.getElementById('page3')
page3.addEventListener('click',change_page_3)

function change_page_3(){
    audio_key.play();
    let page_on = 3;
    console.log(page_on)
}

let popup = document.getElementById("popup1")
let popup1 = document.getElementById("instruction")
popup.addEventListener('click',sound)
popup1.addEventListener('click',sound)

function sound(){
    audio_key.play();
}


for(let i = 0; i<16; i++){
    if (page_on != 3){
    divs_upper.push(document.getElementById(i+1));
    divs_upper[i].innerText = upper_strokes_data[i];
    } else {
    divs_upper.push(document.getElementById(i+1));
    divs_upper[i].innerText = pianpang[i];
    divs_upper[i].style.fontFamily = "'Special Elite', cursive"
    }
}

for(let i = 0; i<16; i++){
    if (page_on != 3){
    divs_bottom.push(document.getElementById(i+17));
    divs_bottom[i].innerText = bottom_strokes_data[i];
    if(divs_bottom[i].innerText ==  "𠃊" || divs_bottom[i].innerText == "𡿨" || divs_bottom[i].innerText == "𠃑" || divs_bottom[i].innerText =="𠄎" || divs_bottom[i].innerText == "𠃍" || divs_bottom[i].innerText == "𠄌" ){
        divs_bottom[i].style.fontFamily = "'Noto Serif HK', serif"
    }
    } else {
    divs_bottom.push(document.getElementById(i+17));
    divs_bottom[i].innerText = bushou[i];
    divs_bottom[i].style.fontFamily = "'Special Elite', cursive"
    }
}

for(let i = 0; i<16; i++){
    divs_upper[i].addEventListener('click',focus_upper,i)
    divs_upper[i].addEventListener("mouseover", information,i);
    divs_upper[i].addEventListener('mouseout',information_out_pianpang,i)
    divs_bottom[i].addEventListener('click',focus_upper,i);
    divs_bottom[i].addEventListener('mouseover',information,i)
    divs_bottom[i].addEventListener('mouseout',information_out_bushou,i)
}

function information(i){
    if(page_on == 3){
    json.pianpang_radicals_data.forEach(stroke =>{
            
    if (i.path[0].innerText == stroke.name){
    i.path[0].innerText = stroke.meaning
    // i.path[0].style.fontSize = "50px"
    // i.path[0].style.padding = "16px"
    }
    
    });

    json.bushou_radicals_data.forEach(stroke =>{
        if (i.path[0].innerText == stroke.name){
        i.path[0].innerText = stroke.meaning
        }
        
        });

        console.log(i.path[0].id)
    
        let theMain = document.getElementById(""+i.path[0].id+"")
        theMain.style.fontSize = "17px"

} 
}

json.pianpang_radicals_data.forEach(stroke =>{
for(let r = 0; r<16; r++){
    if(pianpang[r] == stroke.name){
        pianpang_information[r] = stroke.meaning
        }
}
});
json.bushou_radicals_data.forEach(stroke =>{
    for(let r = 0; r<16; r++){
        if(bushou[r] == stroke.name){
            bushou_information[r] = stroke.meaning
            }
}
});

function information_out_pianpang(i){
    if(page_on == 3){
    for(let r = 0; r<16; r++){
        if(i.path[0].id - 1 == r){
        i.path[0].innerText = ""+pianpang[r]+""
        }
    }
}

let theMain = document.getElementById(""+i.path[0].id+"")
        theMain.style.fontSize = "50px"
}

function information_out_bushou(i){
    if(page_on == 3){
    for(let r = 0; r<16; r++){
        if(i.path[0].id - 17 == r){
        i.path[0].innerText = ""+bushou[r]+""
        }
    }
}

let theMain = document.getElementById(""+i.path[0].id+"")
        theMain.style.fontSize = "50px"
}

function focus_upper(i){
    audio_key.play();
    for(let r = 0; r<16; r++){
        if(i.path[0].innerText == upper_strokes_data[r]){
            audio_key.play();
            var div = document.createElement('div');
                div.className = "draggable";
                div.idName = '' + r + ''
                div.setAttribute("id", '' + r + '')
                div.innerText = upper_strokes_data[r];
                div.style.width = "200px";
                div.style.fontSize = "200px";
                div.style.display = "inline";
                div.style.position = "fixed";
                div.style.top = "30%";
                div.style.padding = "0px";
                div.style.fontFamily = "'Noto Serif JP', serif"
        
            document.getElementsByTagName('body')[0].appendChild(div);
            div.onmouseover = function() {mouseOver()};
            div.onmouseout = function() {mouseOut()};

            function mouseOver() {
                div.style.color = "darkred";
                if(div.innerText == ""){
                div.style.border = "green dotted 2px";
                }
                document.addEventListener('keydown', logKey);
                function logKey(e) {
                if (`${e.code}` == "Backspace" && div.style.color == "darkred") {
                  div.style.display = "none"
                  audio_key.play();
                }
                if ((`${e.code}` == "ShiftLeft" ||  `${e.code}` == "ShiftRight" )&& div.style.color == "darkred") {
                    console.log("here")
                    div.style.border = "green dotted 2px"
                  } else {
                    div.style.border = "green dotted 0px"
                  }
              }
              }
            function mouseOut() {
                div.style.color = "black";
                div.style.border = "green dotted 0px";
              }
            if (page_on == 2){
            div.addEventListener("dblclick", change_inside);

            function change_inside() {
                audio_change.play();
                const img = document.createElement("img");
                img.style.maxWidth = "100%";
                img.style.objectFit = "contain";
                img.style.left = "-100px"
                img.src = ''+upper_images[r]+'';
                div.innerHTML = " ";
                div.appendChild(img);
            }
        }
        }
        if(i.path[0].innerText == bottom_strokes_data[r]){
            var div = document.createElement('div');
            div.className = "draggable";
            div.idName = '' + r + ''
            div.setAttribute("id", '' + r + '')
            div.innerText = bottom_strokes_data[r];
            div.style.width = "200px";
            div.style.fontSize = "200px";
            div.style.display = "inline";
            div.style.position = "fixed";
            div.style.top = "30%";
            div.style.padding = "0px";
            div.style.fontFamily = "'Noto Serif JP', serif"
            if(div.innerText ==  "𠃊" || div.innerText == "𡿨" || div.innerText == "𠃑" || div.innerText =="𠄎" || div.innerText == "𠃍" || div.innerText == "𠄌" ){
                div.style.fontFamily = "'Noto Serif HK', serif"
            }
        document.getElementsByTagName('body')[0].appendChild(div);
        div.onmouseover = function() {mouseOver()};
        div.onmouseout = function() {mouseOut()};
        function mouseOver() {
            console.log(div.style.fontFamily)
            div.style.color = "darkred";
                if(div.innerText == ""){
                div.style.border = "green dotted 2px";
                }
                document.addEventListener('keydown', logKey);
                function logKey(e) {
                if (`${e.code}` == "Backspace" && div.style.color == "darkred") {
                  div.style.display = "none"
                  audio_key.play();
                }
                if ((`${e.code}` == "ShiftLeft" ||  `${e.code}` == "ShiftRight" )&& div.style.color == "darkred") {
                    console.log("here")
                    div.style.border = "green dotted 2px"
                  } else {
                    div.style.border = "green dotted 0px"
                  }
              }
          }
        function mouseOut() {
            div.style.color = "black";
            div.style.border = "green dotted 0px";
          }
        if (page_on == 2){
            div.addEventListener("dblclick", change_inside);

            function mouseOver() {
                div.style.border = "green dotted 2px";
                console.log("hi")
              }

            function change_inside() {
                audio_change.play();
                const img = document.createElement("img");
                img.style.maxWidth = "100%";
                img.style.objectFit = "contain";
                img.style.left = "-100px"
                img.src = ''+bottom_images[r]+'';
                div.innerHTML = " ";
                div.appendChild(img);
            }
        }
      
        }

            if (i.path[0].innerText == pianpang_information[r]){
                console.log(i.path[0].innerText)
            var div = document.createElement('div');
                div.className = "draggable";
                div.innerText = pianpang[r];
                div.style.width = "200px";
                div.style.fontSize = "200px";
                div.style.display = "inline";
                div.style.position = "fixed";
                div.style.top = "30%";
                div.style.padding = "0px";
            document.getElementsByTagName('body')[0].appendChild(div);
            div.onmouseover = function() {mouseOver()};
            div.onmouseout = function() {mouseOut()};

            function mouseOver() {
                div.style.color = "darkred";
                document.addEventListener('keydown', logKey);
                function logKey(e) {
                if (`${e.code}` == "Backspace" && div.style.color == "darkred") {
                  div.style.display = "none"
                  audio_key.play();
                }
                if ((`${e.code}` == "ShiftLeft" ||  `${e.code}` == "ShiftRight") && div.style.color == "darkred") {
                    console.log("here")
                    div.style.border = "green dotted 2px"
                  } else {
                    div.style.border = "green dotted 0px"
                  }
              }
              }
            function mouseOut() {
                div.style.color = "black";
                div.style.border = "green dotted 0px"
              }
              if (page_on != 2){
                // div.addEventListener("dblclick", delete_me);
       
                //  function delete_me() {
                //    div.style.display = "none"
                //  }
                }
    }
            


        if(i.path[0].innerText == bushou_information[r]){
            var div = document.createElement('div');
                div.className = "draggable";
                div.innerText = bushou[r];
                div.style.width = "200px";
                div.style.fontSize = "200px";
                div.style.display = "inline";
                div.style.position = "fixed";
                div.style.top = "30%";
                div.style.padding = "0px";
            document.getElementsByTagName('body')[0].appendChild(div);
            div.onmouseover = function() {mouseOver()};
            div.onmouseout = function() {mouseOut()};

            function mouseOver() {
                div.style.color = "darkred";
                document.addEventListener('keydown', logKey);
                function logKey(e) {
                if (`${e.code}` == "Backspace" && div.style.color == "darkred") {
                  div.style.display = "none"
                  audio_key.play();
                }
                if ((`${e.code}` == "ShiftLeft" ||  `${e.code}` == "ShiftRight" )&& div.style.color == "darkred") {
                    console.log("here")
                    div.style.border = "green dotted 2px"
                  } else {
                    div.style.border = "green dotted 0px"
                  }
              }
              }
            function mouseOut() {
                div.style.color = "black";
                div.style.border = "green dotted 0px"
              }
            if (page_on != 2){
        }
        }
}
}

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        audio_write.play()
        var textEl = event.target.querySelector('p')

        if (page_on == 1){
            console.log(event.target.id)
        
        if(answer_on == 1){
        if(event.target.id == 2){
        var distance_1 = 
            (Math.sqrt(Math.pow(event.rect.left - ni_pie.getBoundingClientRect().left, 2) +
             Math.pow(event.rect.top - ni_pie.getBoundingClientRect().top,2) | 0))
            .toFixed(2)

            console.log(distance_1)
            if (distance_1<20){
                exist_1 = true;
            } else {
                exist_1 = false;
            }
        }
    }
        if(answer_on == 2){
        console.log(event.target.id)
        if(event.target.id == 15){
            var distance_1 = 
                (Math.sqrt(Math.pow(event.rect.left - yan_dian.getBoundingClientRect().left, 2) +
                 Math.pow(event.rect.top - yan_dian.getBoundingClientRect().top,2) | 0))
                .toFixed(2)
            
                console.log(distance_1)
                if (distance_1<20){
                    exist_1 = true;
                } else {
                    exist_1 = false;
                }
        }
        }
        if(answer_on == 3){
            if(event.target.id == 0){
            var distance_1 = 
                (Math.sqrt(Math.pow(event.rect.left - shou_heng.getBoundingClientRect().left, 2) +
                 Math.pow(event.rect.top - shou_heng.getBoundingClientRect().top,2) | 0))
                .toFixed(2)
    
                console.log(distance_1)
                if (distance_1<40){
                    exist_1 = true;
                } else {
                    exist_1 = false;
                }
            }
        }
    }

        if (page_on == 1){
        if(answer_on == 1){
        var answer = document.getElementById("answer1")
        }
        if(answer_on == 2){
            var answer = document.getElementById("answer2")
        }
        if(answer_on == 3){
            var answer = document.getElementById("answer3")
        }

            if(answer_on == 1){
                if(event.target.id == 1){
            var distance_2 = 
            (Math.sqrt(Math.pow(event.rect.left - ni_shu.getBoundingClientRect().left, 2) +
             Math.pow(event.rect.top - ni_shu.getBoundingClientRect().top,2) | 0))
            .toFixed(2)

            console.log(distance_2)
            if (distance_2<20){
                exist_2 = true;
            } else{
                exist_2 = false;
            }
                }
            }

            if(answer_on == 2){
                if(event.target.id == 10){
                var distance_2 = 
                (Math.sqrt(Math.pow(event.rect.left - yan_gou.getBoundingClientRect().left, 2) +
                 Math.pow(event.rect.top - yan_gou.getBoundingClientRect().top,2) | 0))
                .toFixed(2)

                console.log(distance_2)
            if (distance_2<20){
                exist_2 = true;
            } else{
                exist_2 = false;
            }
            }
                }
            if(answer_on == 3){
                if(event.target.id == 7){
                var distance_2 = 
                (Math.sqrt(Math.pow(event.rect.left - shou_shu.getBoundingClientRect().left, 2) +
                 Math.pow(event.rect.top - shou_shu.getBoundingClientRect().top,2) | 0))
                .toFixed(2)

                console.log(distance_2)
            if (distance_2<20){
                exist_2 = true;
            } else{
                exist_2 = false;
            }
            }
                }
            if(answer_on == 3){
                if(event.target.id == 0){
                var distance_3 = 
                (Math.sqrt(Math.pow(event.rect.left - shou_ti.getBoundingClientRect().left, 2) +
                 Math.pow(event.rect.top - shou_ti.getBoundingClientRect().top,2) | 0))
                .toFixed(2)

                console.log(distance_3)
            if (distance_3<20){
                exist_3 = true;
            } else{
                exist_3 = false;
            }
            }
                }


        if (page_on == 1){
        if (answer_on != 3){
        if (exist_1 && exist_2){
            answer.style.display = "inline"
        }else {
            answer.style.display = "none"
                }
            }
        if(answer_on == 3){
            if (exist_1 && exist_2 && exist_3 ){
                answer.style.display = "inline"
            }else {
                answer.style.display = "none"
                    }
        }
        }
        }

        console.log("working")
      }
    }
  })

  
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        // if (event.shiftKey) {
        // target.style.backgroundColor = "#bdb76b"
        target.style.fontSize = ''+ Math.min(Math.round(event.rect.width),Math.round(event.rect.height))+'px'
        // target.img.style.width = ''+ Math.min(Math.round(event.rect.width),Math.round(event.rect.height))+''
        // document.addEventListener('keypress', (event) => {
        //     var name = event.key;
        //     var code = event.code;
        //     // Alert the key name and key code on keydown
        //     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
        //   }, false);

        //   if (event.shiftKey) {
        //     console.log("The SHIFT key was pressed!");
        //   } else {
        //     console.log("The SHIFT key was NOT pressed!");
        //   }
      },
      end (event) {
        audio_write.play();
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 }
      })
    ],

    inertia: true
  })



//   function changeSize (){
//     if(Me){
//         Me.style.fontSize = ''+change_size.value*5+'px'
//         console.log(Me)
//         }
//     console.log("here")
//   }


function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)

  target.style.color = "darkred"
//   console.log(event.Backspace)
//   if (event.keyCode == 8) {
//     console.log('BACKSPACE was pressed');

//     // Call event.preventDefault() to stop the character before the cursor
//     // from being deleted. Remove this line if you don't want to do that.
//     event.preventDefault();
// }

//   target.addEventListener('keydown', function(event) {
//     const key = event.key; // const {key} = event; ES6+
//     if (key === "Backspace" || key === "Delete") {
//         console.log("false");
//     }
// });
//   event.onkeydown = function() {
//     var key = event.keyCode || event.charCode;

//     if( key == 8 || key == 46 ){
//     target.style.display = "none"
//     }
// };
//   target.style.cursor = "url(loading.ani),auto";
}


// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


// screenshot
if (page_on != 1){
document.getElementById('screenshot').addEventListener('click', function() {
    html2canvas(document.querySelector("body")).then(canvas => {
        audio_key.play();
        // document.body.appendChild(canvas)
        canvas.download = "screenshot.png";
            // Canvas2Image.saveAsPNG(canvas).download = "screenshot.png";
            // Canvas2Image.saveAsPNG(canvas).href = canvas.toDataURL("image/jpeg");
          return Canvas2Image.saveAsPNG(canvas);
    });

    // capture();
});
}

// const capture = async () => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     const video = document.createElement("video");
  
//     try {
//       const captureStream = await navigator.mediaDevices.getDisplayMedia();
//       video.srcObject = captureStream;
//       context.drawImage(video, 0, 0, window.width, window.height);
//       const frame = canvas.toDataURL("image/png");
//       captureStream.getTracks().forEach(track => track.stop());
//       window.location.href = frame;
//       console.log(frame)
//     } catch (err) {
//       console.error("Error: " + err);
//     }
//   };
  
//   capture();

//json
})

// document.onkeypress = function(evt) {
//     evt = evt || window.event;
//     var charCode = evt.keyCode || evt.which;
//     var charStr = String.fromCharCode(charCode);
//     console.log(charStr);
// };

