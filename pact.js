function playerStyle(play){
    play.style.border = "1px solid green";
    play.style.margin ='10px';
}
const playerNames = document.getElementsByClassName("player-name");
for(const player of playerNames){
    player.style.color='red';
}
const players =document.getElementsByClassName("players");
for(const play of  players){
    playerStyle(play)
    play.addEventListener('click',function(){
    
        play.addEventListener('click',function(){
            play.style.backgroundColor='yellow';
        })
    
        
    })
  
   
}

function addPlayer(){
    const allPlayer = document.getElementById("allPlayer");
    const player = document.createElement('div');
    player.classList.add('players');
    player.innerHTML=`
    <h1 class="player-name">player-4</h1>
    <p>Corrupti laudantium nam recusandae sed maxime aliquid voluptate magnam optio modi reiciendis numquam, aspernatur sapiente eaque autem, totam quaerat minima asperiores provident voluptatem, ullam nostrum? Aut doloremque vitae aperiam sit.totam quaerat minima asperiores provident voluptatem, ullam nostrum? Aut doloremque vitae aperiam sit </p>
    `
    allPlayer.appendChild(player);
}


