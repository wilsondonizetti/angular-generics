export class Mock {
 static DADOS_FORM = {
  formularioID: 1,
  descricao: 'teste formulario',
  perguntas: [
    {
      perguntaID: 1,
      descricao: null,
      respostas: [
        {
          respostaID: 1,
          perguntaID: 1,
          descricao: 'Resposta 1'
        },
        {
          respostaID: 2,
          perguntaID: 1,
          descricao: 'Resposta 2'
        }
      ]
    },
    {
      perguntaID: 2,
      descricao: 'pergunta 2',
      respostas: [
        {
          respostaID: 3,
          perguntaID: 2,
          descricao: 'Resposta 3'
        },
        {
          respostaID: 4,
          perguntaID: 2,
          descricao: 'Resposta 4'
        }
      ]
    }
  ]
}
}