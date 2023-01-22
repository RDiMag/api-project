document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const city = document.querySelector('input').value
    try{
        const response = await fetch(`https://tame-gold-centipede-ring.cyclic.app/api/${city}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerText = data.cultName
        document.getElementById('status').innerText = data.status
        document.getElementById('leader').innerText = data.leader
    }catch(error){
        console.log(error)
    }
}