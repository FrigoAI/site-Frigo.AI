function respostaBot(mensagem) {
    const respostaPadrao = "Desculpe, não entendi muito bem. Poderia reformular?";
    const resposta = mensagem.toLowerCase();
  
    if (resposta.includes("vazamento") || resposta.includes("vaza") || resposta.includes("óleo") || resposta.includes("oleo")) {
      addMessage("Frigo.AI: Para vazamentos, desligue a câmara, isole a área e acione nosso suporte pelo WhatsApp: (11) 99999-9999.");
      addMessage(`Frigo.AI: Guia Rápido para Vazamentos:
🔎 Identificação:
- Sinais visuais: óleo nas conexões/tubulações.
- Queda de desempenho: aumento da temperatura interna.
- Detecção: use detector eletrônico ou solução de sabão para localizar bolhas.

🔧 Correção:
- Localize o ponto de vazamento com ferramentas adequadas.
- Faça o reparo (solda ou troca de peça).
- Teste o reparo pressurizando com nitrogênio.
- Recarregue o sistema conforme especificações.`);
    } 
    else if (resposta.includes("manutenção preventiva") || resposta.includes("checklist") || resposta.includes("prevenção") || resposta.includes("manutenção programada")) {
      ultimaPergunta = "checklist";
      addMessage(`Frigo.AI: A manutenção preventiva é essencial! Ela evita falhas inesperadas, prolonga a vida útil da câmara fria e mantém a conservação dos produtos.
✅ Itens a verificar:
- Sistemas elétricos e mecânicos
- Compressor e fluído refrigerante
- Evaporador, condensador e ventiladores
- Portas e vedações
- Sensores e drenagem

📅 Frequência recomendada:
- Diário: Monitoramento geral.
- Mensal: Limpeza profunda e testes.
- Trimestral: Avaliação de desempenho.
- Anual: Manutenção completa com lavagem química.`);
      addMessage("Frigo.AI: Deseja receber um checklist detalhado para manutenção preventiva?");
    }
    else if (resposta.includes("sim") && ultimaPergunta === "checklist") {
      addMessage(`Frigo.AI: Checklist Básico:
🔹 Inspeção de componentes
🔹 Testes no sistema de refrigeração
🔹 Avaliação elétrica
🔹 Limpeza de evaporadores/condensadores
🔹 Calibração de sensores
🔹 Revisão do isolamento térmico
🔹 Verificação do sistema de drenagem`);
    }
    else if (resposta.includes("problema") || resposta.includes("defeito") || resposta.includes("erro") || resposta.includes("anormalidade")) {
      addMessage(`Frigo.AI: Se você está enfrentando problemas, veja os mais comuns:
1️⃣ Gelo no evaporador: ajuste o ciclo de degelo.
2️⃣ Temperatura instável: calibre sensores e revise termostato.
3️⃣ Vedação ruim nas portas: substitua borrachas ou ajuste alinhamento.
4️⃣ Ruídos anormais: aperte conexões e lubrifique peças.
5️⃣ Falhas elétricas: revise disjuntores, fios e troque componentes danificados.`);
      addMessage("Frigo.AI: Caso o problema persista, agende uma visita técnica!");
    }
    else if (resposta.includes("orçamento") || resposta.includes("preço") || resposta.includes("custo") || resposta.includes("valores")) {
      addMessage(`Frigo.AI: Nosso orçamento padrão inclui:
- Controlador de temperatura: R$ 250,00
- Fios e conectores: R$ 100,00
- Produtos de limpeza: R$ 80,00
- Mão de obra especializada: R$ 600,00
Total: R$ 1.030,00`);
    }
    else if (resposta.includes("serviço") || resposta.includes("portfólio") || resposta.includes("o que fazem") || resposta.includes("trabalho")) {
      addMessage("Frigo.AI: Você pode ver todos os nossos serviços na aba Portfólio!");
    }
    else if (resposta.includes("suporte") || resposta.includes("contato") || resposta.includes("telefone") || resposta.includes("numero") || resposta.includes("whatsapp")) {
      addMessage("Frigo.AI: Você pode falar com a gente pelo WhatsApp: (11) 99999-9999. Estamos prontos para ajudar!");
    }
    else if (resposta.includes("agendar") || resposta.includes("manutenção") || resposta.includes("conserto") || resposta.includes("arrumar")) {
      addMessage("Frigo.AI: Para agendar uma manutenção, clique no botão 'Agendar Manutenção' abaixo do chat.");
    }
    else if (resposta.includes("histórico") || resposta.includes("historico") || resposta.includes("meu atendimento") || resposta.includes("minhas consultas")) {
      const historico = usuarios[usuarioLogado]?.historico || [];
      if (historico.length) {
        addMessage("Frigo.AI: Seu histórico de agendamentos: " + historico.join(", "));
      } else {
        addMessage("Frigo.AI: Você ainda não possui agendamentos registrados.");
      }
    }
    else if (resposta.includes("desligar") && resposta.includes("câmara")) {
      addMessage("Frigo.AI: Para desligar a câmara fria, utilize o botão 'I/ON' no painel de controle ou o interruptor geral próximo ao equipamento. Em casos de emergência, desligue a alimentação elétrica no quadro de distribuição.");
    }
    else if (resposta.includes("oi") || resposta.includes("olá") || resposta.includes("bom dia") || resposta.includes("boa tarde") || resposta.includes("boa noite")) {
      addMessage("Frigo.AI: Olá! Como posso ajudar você hoje?");
    }
    else {
      addMessage("Frigo.AI: " + respostaPadrao);
    }
}
