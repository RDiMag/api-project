document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://tame-gold-centipede-ring.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('p').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}