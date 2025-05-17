document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    alert('Bem-vindo ao Quiz!');
    
    //DECLARANDO O ARRAY DE PERGUNTAS
    const questoes=[
        "Qual carro você deseja comprar ?  ",
        "Você tem interesse em alguma marca de carro especifica ?",
        "Quais são os principais fatores a serem considerados ao escolher um carro novo ?",
        "Qual é o seu orçamento máximo para a compra do veículo?",
        "Tem intenção de realizar um test drive antes de tomar a decisão?",
        "Já verificou o custo médio do seguro para os modelos que está avaliando?",
        "Pretende usar o carro principalmente para uso urbano, viagens ou ambos?",
        "Está interessado em carros com motorização tradicional (combustão) ou já considera híbridos ou elétricos?",
        "Tem preferência por câmbio manual ou automático?",
        "Qual é a sua expectativa em relação ao consumo de combustível?",
    ]
    //DECLARANDOS AS VARIAVEIS
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

    function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
    }

    function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

    }
    function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
    }

    proximaPergunta.addEventListener('click',nextQuestao);
    reiniciarBotao.addEventListener('click',reiniciarQuiz);

    mostrarPergunta();

})