const nome = 'Carlos'
const peso = 120
const altura = 1.88
const sexo = 'Masculino'

const imc = peso / (altura * altura)

console.log(imc)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`)
} else {
    console.log(`${nome}, você não está acima do peso`)
}