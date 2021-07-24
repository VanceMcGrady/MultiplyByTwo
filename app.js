console.log("this is working")

const input = document.getElementById('input')
const button = document.getElementById('submit')
let output = document.getElementById('output')

button.addEventListener('click', function(){
    return output.innerHTML = parseInt(input.value) * 2
})

