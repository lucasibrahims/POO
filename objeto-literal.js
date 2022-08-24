const user = {
    nome: "Lucas",
    email: "lucas@email.com",
    nascimento: "10/07/2001",
    role: "admin",
    ativo: true,

    exibirInfos: function () {
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);

    }
}

user.exibirInfos();