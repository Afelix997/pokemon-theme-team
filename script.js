

function getData(object) {
    console.log(object)
    let name=object.data.name
    let imageURL= object.data.sprites.front_default
    return [name,imageURL]
}

const getMon = async () => {
    let randNum = Math.floor(Math.random() * 898) + 1;
    const randoData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}/`)

    let teamType = await axios.get(randoData.data.types[0].type.url)
    let teamArr = [];
    while (teamArr.length < 5) {
        var r = Math.floor(Math.random() * teamType.data.pokemon.length) + 1;
        if (teamArr.indexOf(r) === -1) teamArr.push(r);
    }
    let pokeType = randoData.data.types[0].type.name.toUpperCase()
    document.getElementById("type").innerText=pokeType
    console.log(teamType,teamArr)
    let firstMember = getData(randoData)
    document.getElementById("first").innerText = firstMember[0]
    document.getElementById("firstImg").src = firstMember[1]
   
    let secondMember=getData(await axios.get(teamType.data.pokemon[teamArr[0]].pokemon.url))
    document.getElementById("second").innerText = secondMember[0]
    document.getElementById("secondImg").src = secondMember[1]
    let thirdMember = getData(await axios.get(teamType.data.pokemon[teamArr[1]].pokemon.url))
    document.getElementById("third").innerText = thirdMember[0]
    document.getElementById("thirdImg").src = thirdMember[1]
    let fourthMember = getData(await axios.get(teamType.data.pokemon[teamArr[2]].pokemon.url))
    document.getElementById("fourth").innerText = fourthMember[0]
    document.getElementById("fourthImg").src = fourthMember[1]
    let fifthMember = getData(await axios.get(teamType.data.pokemon[teamArr[3]].pokemon.url))
    document.getElementById("fifth").innerText = fifthMember[0]
    document.getElementById("fifthImg").src = fifthMember[1]
    let sixthMember = getData(await axios.get(teamType.data.pokemon[teamArr[4]].pokemon.url))
    document.getElementById("sixth").innerText = sixthMember[0]
    document.getElementById("sixthImg").src = sixthMember[1]
}
