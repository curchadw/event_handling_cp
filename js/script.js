const play_pause = document.getElementById('play_pause');
const audio = document.getElementById('audio');

play_pause.innerHTML = `<img src="assets/play.png" alt="" width='50' height='50' onclick='play()' />`

const play = () =>{
    play_pause.innerHTML = `<img src="assets/pause.png" alt="" width='50' height='50' onclick='pause()' />`
    audio.play()
}

const pause = () =>{
    play_pause.innerHTML = `<img src="assets/play.png" alt="" width='50' height='50' onclick='play()' />`
    audio.pause()
}

// audio.ontimeupdate(()=>{
//     let time = (audio.currentTime/audio.duration)*100
//     let progress = Math.round(time);
//     document.getElementById('progress').value = progress
// })

audio.addEventListener('timeupdate',(e)=>{
    console.log('Playing')
    let time = (audio.currentTime/audio.duration)*100
    let progress = Math.round(time);
    document.getElementById('progress').value = progress
})

audio.volume = .03

