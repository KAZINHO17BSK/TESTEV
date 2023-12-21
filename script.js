 function calcularResultado() {
    const respostas = document.forms["vocationalTest"].elements;
    let pontuacao = 0;
    let todasAsPerguntasRespondidas = true;

    for (const resposta of respostas) {
        if (resposta.type === "radio" && resposta.checked) {
            pontuacao += parseInt(resposta.value);
        }
    }

    for (let i = 1; i <= 6; i++) {
        const perguntaSelecionada = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (!perguntaSelecionada) {
            todasAsPerguntasRespondidas = false;
            break;
        }
    }

    let resultado = "Seu resultado: ";
    if (!todasAsPerguntasRespondidas) {
        resultado = "Por favor, responda todas as perguntas antes de calcular o resultado.";
    } else {
        if (pontuacao >= 0 && pontuacao <= 5) {
            resultado = "Você pode gostar de uma carreira na área de Mecânica.";
        } else if (pontuacao === 6) {
            resultado = "Você pode gostar de uma carreira na área de Saúde e Segurança.";
        } else if (pontuacao >= 7 && pontuacao <= 11) {
            resultado = "Você pode gostar de uma carreira na área de Mecânica ou na área de Saúde e Segurança.";
        } else if (pontuacao === 12) {
            resultado = "Você pode gostar de uma carreira na área de Informática.";
        } else if (pontuacao >= 13 && pontuacao <= 17) {
            resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática.";
        } else if (pontuacao === 18) {
            resultado = "Você pode gostar de uma carreira na área de Meio Ambiente.";
        } else if (pontuacao >= 19 && pontuacao <= 23) {
            resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente.";
        } else if (pontuacao === 24) {
            resultado = "Você pode gostar de uma carreira na área Administrativa.";
        } else if (pontuacao >= 25 && pontuacao <= 29) {
            resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente;\nAdministrativa.";
        } else if (pontuacao === 30) {
            resultado = "Você pode gostar de uma carreira na área de Automação.";
        } else if (pontuacao >= 31 && pontuacao <= 35) {
            resultado = "Você pode gostar das áreas na carreira de\nMecânica;\nSaúde e Segurança;\nInformática; \nMeio Ambiente; \nAutomação.";
        } else if (pontuacao === 36) {
            resultado = "Você pode gostar de uma carreira na área de Elétrica.";
        }
    }

    const novaGuia = window.open();
    novaGuia.document.write('<html><head><title>Resultado</title>');
    novaGuia.document.write('<style>');
    novaGuia.document.write(`
        body {
            font-family: Arial, sans-serif;
            background-image: url("background.jpg");
            background-size: 100% 100%;
            background-repeat: no-repeat, repeat-x;
            position: relative;
        }
        footer {
            color: #eeecec;
            text-align: center;
            font-size: 25px;
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 10px;
        }
        .resultado-caixa {
            height: 100px;
            widht: 100px;
            margin-right: 10%;
            position: absolute;
            top: 100px;
            left: 100px;
            padding: 20px;
            background-color: white;
            background-size: 100px 100px;
            background-repeat: no-repeat;
            position: relative;
            border-radius: 20px;
        }    
        .resultado-caixa h2 {
            color: #000;
            text-align: center;
        }
        .resultado-caixa h3 {
            color: #000;
            text-align: center;
        }
    `);
    novaGuia.document.write('</style>');
    novaGuia.document.write('</head><body>');
    novaGuia.document.write('<div class="resultado-caixa">');
    novaGuia.document.write('<h2>Resultado do Teste Vocacional</h2>');
    novaGuia.document.write(`<h3>${resultado}</h3>`);
    novaGuia.document.write('</div>');
    novaGuia.document.write('<footer>&copy; Charles & Lucas Todos os direitos reservados 2023.</footer>');
    novaGuia.document.write('</body></html>');
    novaGuia.document.close();
}

function limparRespostas() {
    const respostas = document.forms["vocationalTest"].elements;
    for (const resposta of respostas) {
        if (resposta.type === "radio" && resposta.checked) {
            resposta.checked = false;
        }
    }
}