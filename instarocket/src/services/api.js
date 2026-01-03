import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.3.2:3333'
})

export default api



// 10.0.3.2 --> localhost para quem usa o Genymotion
// IOS ou Android via USB, usar o IP da maquina
// IOS normal, usar "localhost"
// 10.0.2.2 --> emulador do Android Studio

// se nada funcionar, colocar o IP da máquina