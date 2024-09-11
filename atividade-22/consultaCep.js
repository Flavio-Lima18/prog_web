$("#mybtn").on("click", function(){
    var cep = $("#cep").val();
    
    // Limpando os campos enquanto busca o CEP
    $("#rua").val("...");
    $("#bairro").val("...");
    $("#cidade").val("...");
    $("#uf").val("...");
    $("#ibge").val("...");
   
    var url = "https://viacep.com.br/ws/"+cep+"/json";

    // Adiciona um log para ver se a URL está correta
    console.log("Buscando URL:", url);

    $.getJSON(url, function(retorno){
        // Exibe o retorno no console para verificar os dados
        console.log(retorno);

        if (!("erro" in retorno)) {
            $("#rua").val(retorno.logradouro);
            $("#bairro").val(retorno.bairro);
            $("#cidade").val(retorno.localidade);
            $("#uf").val(retorno.uf);
            $("#ibge").val(retorno.ibge);
        } else {
            alert("CEP não encontrado.");
        }
    }).fail(function() {
        // Em caso de falha na requisição, exibe um alerta
        alert("Erro ao buscar o CEP. Verifique sua conexão.");
    }); 
});
