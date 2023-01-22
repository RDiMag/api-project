document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const city = document.querySelector('input').value
    try{
        const response = await fetch(`https://tame-gold-centipede-ring.cyclic.app/api/${city}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('p').innerText = `${data.cultName}, ${data.status}, ${data.leader}`
    }catch(error){
        console.log(error)
    }
}