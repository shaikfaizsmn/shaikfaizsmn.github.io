function LoadUser(){
    let url = "https://randomuser.me/api/"

    fetch(url)
    .then(response) = response.json()
    .then(data => {
        let fn = document.getElementById("firstName")
        let ln = document.getElementById("lastName")
        let phone = document.getElementById("phone")
        let img = document.getElementById("userImg")

        fn.innerHTML = data.results[0].name.first
        ln.innerHTML = data.results[0].name.last
        phone.innerHTML = data.results[0].phone
        img.src = data.results[0].picture.large
    })
}

let elLoadUser = document.getElementById("getRandomUser")
elLoadUser.addEventListener("click", function(){
    LoadUser()
})

let elLoadMultipleUsers = document.getElementById("getMultipleUser")
elLoadMultipleUsers.addEventListener("click",function(){
    let userCount = document.getElementById("userCount")
    elLoadMultipleUsers(userCount.value)
})

function elLoadMultipleUsers(userCount){
    let url = "https://randomuser.me/api/?results=" + userCount
    let temp = ""

    fetch(url)
    .then(response) = response.json()
    .then(faiz => {
        let allUsers = document.getElementById("allUsers")

        for(let i = 0; i < data.results.length; i++){

            let fn = '<div id="firstName">' + faiz.results[0].name.first + '</div>'
            let ln = '<div>' + faiz.results[i].name.last + '</div>'
            let phone = '<div>' + faiz.results[i].phone + '</div>'
            let img = '<img src="' + faiz.results[i].picture.large + '">'

        temp = temp + fn + ln + phone + img
        }
        allUsers.innerHTML = temp
    })
}

let elLoadGender = document.getElementById("getGenderUser")
elLoadGender.addEventListener("click",function(){
    console.log("Load Gender Clicked")

    let gender = document.getElementById("userGender")
    console.log("Select Gender : " + gender.value)


})

function loadGender(gender, userCount){
    let url = "https://randomuser.me/api/?results=" + userCount + "&gender=" + gender

}