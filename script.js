function convert()
{
    let Value = document.getElementById("temp")
    const temp = Value.value
    console.log(temp)
    let num = document.getElementById("input").value
    console.log(num)

    let result = calculate(Number(num), temp)

    if(temp === "fahrenheit"){
        console.log(result + " " + "celsius")
        document.getElementById("result").innerHTML = result + " " + "celsius"
    }
    else if(temp === "celsius"){
        console.log(result + " " + "fahrenheit")
        document.getElementById("result").innerHTML = result + " " + "fahrenheit"
    }
}

function calculate(num, temp)
{
    console.log(num)
    console.log(temp)
    if(temp === "fahrenheit"){
        return (num - 32) * 5/9
    }
    if(temp === "celsius"){
        return (num * 9/5) + 32
    }
    return num
}