
let botoesDeletar = document.querySelectorAll("#deletar");


botoesDeletar.forEach(function(botao) {
    botao.addEventListener("click", function(event) {
        event.preventDefault();
        let confirmacao = confirm("Tem certeza que quer deletar essa publicação?");
        if (confirmacao) {
            var url = event.target.parentElement.getAttribute('href');
            location.href = url;
        }
    });
});
