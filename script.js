
// JavaScript Document
$(document).ready(function() {
  var player1="O";
  var player2="X";
  var lmt=2;
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([
    {
      title: 'Question 1',
      text: 'Player1 Name'
    },
    {
      title: 'Question 2',
      text: 'Player2 Name'
    },
    {
      title: 'Question 3',
      text: 'win limit (Number Only[1-9])'
    }
  ]).then((result) => {
    arr=result;
    player1=result.value[0];
    player2=result.value[1];
    lmt=result.value[2];
    console.log(player1,player2,lmt);
    if(player2 != null && player2.length > 2 ){ 
      document.getElementById("pl2").innerHTML = player2;
      }
      else{
        player2=document.getElementById("pl2").textContent;
        console.log(player2);
      }
    if(player1 != null && player1.length >2){
        document.getElementById("pl1").innerHTML = player1;
      }
      else{
        player1=document.getElementById("pl1").textContent;
        console.log(player1);
      }
      if(lmt === null){
        lmt=1;
      }
    console.log(player2)
    /*if (result.value) {
      //const answers = JSON.stringify(result.value)
       player1=progressSteps[0].value;
      player2=progressSteps[1].value;
      alert(player2);
      Swal.fire({
        title: 'All done!',
        html: `
          Your answers:
          <pre><code>${answers}</code></pre>
        `,
        confirmButtonText: 'Lovely!'
      })
    }*/
  })
  
  var x = "x";
  var o = "o";
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  $('#game li').click(function(){
    if(lmt==o_win){
      Swal.fire({
        title: player1.toUpperCase()+' Won the Battle!!!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
      .then(()=>{
        let timerInterval
  Swal.fire({
  title: 'Auto restart alert!',
  html: 'I will restart in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  willOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
    location.reload();
  }

})
      });
    }
    else if(lmt==x_win){
      Swal.fire({
        title: player2.toUpperCase()+' Won the Battle!!!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
      .then(()=>{
        let timerInterval
        Swal.fire({
        title: 'Auto restart alert!',
        html: 'I will restart in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        willOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
          location.reload();
        }
      
      })
      });
    }
   
    if(o_win==3 && x_win==0 ||x_win==0 && o_win==3 ){
     //alert("nee mattum win pannadha opponent num win panna vidu ,LoL!!!!")
    }
    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
     {
     //alert('O has won the game. Start a new game')
     Swal.fire(player1.toUpperCase(),'has won the game. Start a new game')
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
     }
    else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
    {
     //alert('X wins has won the game. Start a new game')
     Swal.fire(player2.toUpperCase(),'has won the game. Start a new game')
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')	
    }
    else if (count == 9)
    {
    //alert('Its a tie. It will restart.')
    Swal.fire('Its a tie. It will restart.')
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
    count = 0
    }
    else if ($(this).hasClass('disable'))
    {
      //alert('Already selected')
      Swal.fire('Already selected')
    }
    else if (count%2 == 0)
    {
      count++
      $(this).text(o)
        $(this).addClass('disable o btn-primary')
        if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
        {
       //alert('O wins')
       count = 0
       o_win++
  $('#o_win').text(o_win)
          }
    }
     else  
    {
      count++
      $(this).text(x)
      $(this).addClass('disable x btn-info')
       if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
          {
     //alert('X wins')
     
     count = 0
     x_win++
     $('#x_win').text(x_win)
          }
    }
  
     });
      $("#reset").click(function () {
      $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
    count = 0
  
    });
  });
function myfun(){
  let timerInterval
  Swal.fire({
  title: 'Auto reset alert!',
  html: 'I will reset in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  willOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
  }
