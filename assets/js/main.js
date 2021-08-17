
function selectHoroskope() {
    let horoskope = document.getElementById("horoskope").value
    console.log(horoskope)
    switch (horoskope) {
        case "aries":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_aries.png" alt=""><h2>Ýour Horoskope is Aries</h2><p>Today your patience might be tested when one or more of your projects gets put on hold by someone… </p>'
            break;
        case "taurus":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt=""><h2>Ýour Horoskope is Taurus</h2><p>Your intense energy makes you a great candidate for a leadership position right now, so if you are… </p>'
            break;
        case "gemini":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt=""><h2>Ýour Horoskope is Gemini</h2><p>If you aren\'t sure if you are ready to commit to a party, a date, a new job, or anything else that… </p>'
            break;
        case "cancer":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt=""><h2>Ýour Horoskope is Cancer</h2><p>Too many different elements in your life are overlapping with each other right now—and it\'s your… </p>'
            break;
        case "leo":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_leo.png" alt=""><h2>Ýour Horoskope is Leo</h2><p>The issues you\'ll be dealing with today are very complicated ones—you will have to navigate your… </p>'
            break;
        case "virgo":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt=""><h2>Ýour Horoskope is Virgo</h2><p>You\'ll get along best with people who appeal to your more analytical side, today. Surprisingly, all… </p>'
            break;
        case "libra":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_libra.png" alt=""><h2>Ýour Horoskope is Libra</h2><p>Pick a cultural event that\'s coming up and get some tickets for it today.</p>'
            break;
        case "scorpio":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt=""><h2>Ýour Horoskope is Scorpio</h2><p>Someone will challenge a belief that you\'ve held for a very long time today—and they will say an… </p>'
            break;
        case "sagittarius":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt=""><h2>Ýour Horoskope is Sagettarius</h2><p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to… </p>'
            break;
        case "capricorn":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt=""><h2>Ýour Horoskope is Capricorn</h2><p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity. </p>'
            break;
        case "aquarius":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt=""><h2>Ýour Horoskope is Aquarius</h2><p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great… </p>'
            break;
        case "pisces":
            document.getElementById("output").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt=""><h2>Ýour Horoskope is Pisces</h2><p>Communication is very important today—written, spoken, and even nonverbal body language will all… </p>'
            break;
    }
}
