const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <h3>Biblioteca NPM para funções uteis no dia a dia do programador.</h3>
      <p>
        Uma biblioteca NPM para funções uteis no dia a dia do programador, como
        funções para calcular dias úteis e descobrir a bandeira do cartão de
        crédito
      </p>
      <a
        href="https://github.com/MatheusWill/utils"
        target="blank"
        className="btn"
      >
        Ver Projeto
      </a>
      <h3>Bot do Discord com integração ao OpenAI GPT-3.</h3>
      <p>
        Um simples tutorial e código para construir um bot do Discord que pode
        responder a perguntas complexas e concluir tarefas úteis.
      </p>
      <a
        href="https://github.com/MatheusWill/BOT_DISCORD_GPT"
        target="blank"
        className="btn"
      >
        Ver Projeto
      </a>
      <h3>API de Consultório em ASP.NET.</h3>
      <p>
        API feito em ASP.NET com C#, para agendamentos e controle de um
        consultório fictício, com controle de especialidades, profissionais e
        pacientes, assim como suas consultas, podendo filtrar elas pelas datas
        (data de início e fim) do agendamento e uma especialidade específica.
      </p>
      <a
        href="https://github.com/MatheusWill/API_Consultorio_ASP.NET"
        target="blank"
        className="btn"
      >
        Ver Projeto
      </a>
    </section>
  );
};

export default ProjectsContainer;
