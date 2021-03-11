const nome = 'Silvana'
const sexo = 'F'
const idade = 70
const contribuicao = 31

// Tempo de contribuição
// Homens: 35
// Mulheres: 30

// H: contribuição + idade >= 95
// M: contribuição + idade > 85

if (sexo == 'F') {
    if (contribuicao > 30) {
        if ((contribuicao  + idade ) >= 85) {
            console.log(`${nome}, você pode se aposentar!`)
        }
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}

if (sexo == 'M') {
    if (contribuicao > 35) {
        if ((contribuicao + idade) >= 95) {
            console.log(`${nome}, você pode se aposentar!`)
        }
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}

