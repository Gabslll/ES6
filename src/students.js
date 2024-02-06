const alunosENotas = [
    { nome: "Gabriel", nota: 8 },
    { nome: "João", nota: 10 },
    { nome: "Fernanda", nota: 6 },
    { nome: "Luisa", nota: 9 },
    { nome: "Kaio", nota: 5 },
    { nome: "Camila", nota: 3 }
]

function retornaNotasDosAlunos (alunosENotas) {
    for (let i = 0; i < alunosENotas.length; i++) {
        const aluno = alunosENotas[i];
        
        if (aluno.nota >= 6) {
            console.log(`O aluno: ${aluno.nome} tirou ${aluno.nota} e passou.`)
        } else {
            console.log(`O aluno ${aluno.nome} tirou ${aluno.nota} e não passou.`)
        }
    }
}

retornaNotaAlunos(alunosENotas);