let dailyBtn = document.getElementById('dailyBtn');
let weeklyBtn = document.getElementById('weeklyBtn');
let monthlyBtn = document.getElementById('monthlyBtn');
let dailyP = document.getElementById('dailyP')
let weeklyP = document.getElementById('weeklyP')
let monthlyP = document.getElementById('monthlyP')

let workTimeNow = document.getElementById('workTimeNow');
let workTimePast = document.getElementById('workTimePast');
let playTimeNow = document.getElementById('playTimeNow');
let playTimePast = document.getElementById('playTimePast');
let studyTimeNow = document.getElementById('studyTimeNow');
let studyTimePast = document.getElementById('studyTimePast');
let exerciseTimeNow = document.getElementById('exerciseTimeNow');
let exerciseTimePast = document.getElementById('exerciseTimePast');
let socialTimeNow = document.getElementById('socialTimeNow');
let socialTimePast = document.getElementById('socialTimePast');
let selfCareTimeNow = document.getElementById('selfCareTimeNow');
let selfCareTimePast = document.getElementById('selfCareTimePast');



function getTime(){

    return fetch('../data/data.json')
    .then(Response => Response.json()).then(data =>{ return data})
    
    // .then(data => console.log(data[1].timeframes.daily.current))

}

function daily(){
    getTime().then( data => {
        workTimeNow.innerText = `${data[0].timeframes.daily.current}hrs`
        workTimePast.innerText = `yesterday - ${data[0].timeframes.daily.previous}hrs`
        playTimeNow.innerText = `${data[1].timeframes.daily.current}hrs`
        playTimePast.innerText = `yesterday - ${data[1].timeframes.daily.previous}hrs`
        studyTimeNow.innerText = `${data[2].timeframes.daily.current}hrs`
        studyTimePast.innerText = `yesterday - ${data[2].timeframes.daily.previous}hrs`
        exerciseTimeNow.innerText = `${data[3].timeframes.daily.current}hrs`
        exerciseTimePast.innerText = `yesterday - ${data[3].timeframes.daily.previous}hrs`
        socialTimeNow.innerText = `${data[4].timeframes.daily.current}hrs`
        socialTimePast.innerText = `yesterday - ${data[4].timeframes.daily.previous}hrs`
        selfCareTimeNow.innerText = `${data[5].timeframes.daily.current}hrs`
        selfCareTimePast.innerText = `yesterday - ${data[5].timeframes.daily.previous}hrs`
})}

function weekly()
{
    getTime().then( data => {
        workTimeNow.innerText = `${data[0].timeframes.weekly.current}hrs`
        workTimePast.innerText = `Last week - ${data[0].timeframes.weekly.previous}hrs`
        playTimeNow.innerText = `${data[1].timeframes.weekly.current}hrs`
        playTimePast.innerText = `Last week - ${data[1].timeframes.weekly.previous}hrs`
        studyTimeNow.innerText = `${data[2].timeframes.weekly.current}hrs`
        studyTimePast.innerText = `Last week - ${data[2].timeframes.weekly.previous}hrs`
        exerciseTimeNow.innerText = `${data[3].timeframes.weekly.current}hrs`
        exerciseTimePast.innerText = `Last week - ${data[3].timeframes.weekly.previous}hrs`
        socialTimeNow.innerText = `${data[4].timeframes.weekly.current}hrs`
        socialTimePast.innerText = `Last week - ${data[4].timeframes.weekly.previous}hrs`
        selfCareTimeNow.innerText = `${data[5].timeframes.weekly.current}hrs`
        selfCareTimePast.innerText = `Last week - ${data[5].timeframes.weekly.previous}hrs`
})
}

function monthly()
{
    getTime().then( data => {
        workTimeNow.innerText = `${data[0].timeframes.monthly.current}hrs`
        workTimePast.innerText = `Last month - ${data[0].timeframes.monthly.previous}hrs`
        playTimeNow.innerText = `${data[1].timeframes.monthly.current}hrs`
        playTimePast.innerText = `Last month - ${data[1].timeframes.monthly.previous}hrs`
        studyTimeNow.innerText = `${data[2].timeframes.monthly.current}hrs`
        studyTimePast.innerText = `Last month - ${data[2].timeframes.monthly.previous}hrs`
        exerciseTimeNow.innerText = `${data[3].timeframes.monthly.current}hrs`
        exerciseTimePast.innerText = `Last month - ${data[3].timeframes.monthly.previous}hrs`
        socialTimeNow.innerText = `${data[4].timeframes.monthly.current}hrs`
        socialTimePast.innerText = `Last month - ${data[4].timeframes.monthly.previous}hrs`
        selfCareTimeNow.innerText = `${data[5].timeframes.monthly.current}hrs`
        selfCareTimePast.innerText = `Last month - ${data[5].timeframes.monthly.previous}hrs`
})
}



window.onload = daily()


dailyBtn.addEventListener('click', function(){
    daily()
    dailyP.classList.add("active")
    weeklyP.classList.remove("active")
    monthlyP.classList.remove("active")

})

weeklyBtn.addEventListener('click', function(){
    weekly()
    dailyP.classList.remove("active")
    weeklyP.classList.add("active")
    monthlyP.classList.remove("active")
})

monthlyBtn.addEventListener('click', function(){
    monthly()
    dailyP.classList.remove("active")
    weeklyP.classList.remove("active")
    monthlyP.classList.add("active")
    
})