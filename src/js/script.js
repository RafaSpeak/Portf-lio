const descriptionSkills = {
  html: {
    en: `I use <strong>HTML5</strong> technology to structure my web pages, always prioritizing the correct and <strong>semantic</strong> use of its features, avoiding bad programming practices. I value exploring the <strong>semantic tags</strong> of the HTML5 language to ensure that the structure of projects is understandable for both the browser and users. Additionally, I pay special attention to using <strong>metadata</strong> to define crucial information and ensure the project is <strong>accessible</strong> to everyone.`,
    pt: `Utilizo a tecnologia <strong>HTML5</strong> para estruturar minhas páginas web, sempre priorizando o uso correto e <strong>semântico</strong> das suas funcionalidades, evitando más práticas de programação. Valorizo a exploração das <strong>tags semânticas</strong> da linguagem HTML5 para garantir que a estrutura dos projetos seja compreensível tanto para o navegador quanto para os usuários. Além disso, dedico atenção especial ao uso de <strong>metadados</strong> para definir informações cruciais e garantir que o projeto seja <strong>acessível</strong> a todos.`
  },
  css: {
    en: `I use <strong>CSS3</strong> technology to style my web pages, always focusing on the efficient and modern use of its resources, avoiding bad design practices. I value the exploration of advanced properties, such as <strong>Flexbox</strong> and <strong>Grid Layout</strong>, to create <strong>responsive</strong> and well-structured layouts, ensuring that the visual presentation of projects is harmonious and functional. Additionally, I pay special attention to <strong>accessibility</strong> and code <strong>optimization</strong>, ensuring that the design is accessible to everyone and performs well on different devices.`,
    pt: `Utilizo a tecnologia <strong>CSS3</strong> para estilizar minhas páginas web, sempre focando no uso eficiente e moderno dos seus recursos, evitando más práticas de design. Valorizo a exploração de propriedades avançadas, como <strong>Flexbox</strong> e <strong>Grid Layout</strong>, para criar layouts <strong>responsivos</strong> e bem estruturados, garantindo que a apresentação visual dos projetos seja harmoniosa e funcional. Além disso, dou especial atenção à <strong>acessibilidade</strong> e à <strong>otimização</strong> do código, assegurando que o design seja acessível a todos e performe bem em diferentes dispositivos.`
  },
  javascript: {
    en: `I use <strong>JavaScript</strong> to develop the <strong>interactivity</strong> and <strong>logic</strong> of my web pages, always focusing on <strong>clean and efficient coding</strong> practices. I value using modern language features like <strong>DOM manipulation</strong>, <strong>events, and APIs</strong> to create dynamic and engaging user experiences. Furthermore, I pay special attention to code optimization and <strong>accessibility</strong>, ensuring that features are accessible to all users and browsers.`,
    pt: `Utilizo <strong>JavaScript</strong> para desenvolver a <strong>interatividade</strong> e a <strong>lógica</strong> das minhas páginas web, sempre focando em práticas de <strong>codificação limpas</strong> e eficientes. Valorizo o uso de recursos modernos da linguagem, como <strong>manipulação de DOM</strong>, <strong>eventos e APIs</strong>, para criar experiências de usuário dinâmicas e envolventes. Além disso, dou especial atenção à otimização do código e à <strong>acessibilidade</strong>, assegurando que as funcionalidades sejam acessíveis a todos os usuários e navegadores.`
  },
  nodejs: {
    en: `I use <strong>Node.js</strong> to develop the <strong>backend</strong> of my applications, with an emphasis on creating efficient and scalable <strong>RESTful APIs</strong>. With <strong>Express</strong>, I structure the server in an organized and modular way, applying good coding practices to guarantee the <strong>maintainability</strong> and <strong>security</strong> of the code. I value the implementation of robust functionalities, such as <strong>authentication</strong>, data <strong>validation</strong> and <strong>route manipulation</strong>, always seeking to optimize the performance and scalability of APIs.`,
    pt: `Utilizo <strong>Node.js</strong> para desenvolver o <strong>backend</strong> das minhas aplicações, com ênfase na criação de <strong>APIs RESTful</strong> eficientes e escaláveis. Com o <strong>Express</strong>, estruturo o servidor de forma organizada e modular, aplicando boas práticas de codificação para garantir a <strong>manutenibilidade</strong> e a <strong>segurança</strong> do código. Prezo pela implementação de funcionalidades robustas, como <strong>autenticação</strong>, <strong>validação</strong> de dados e <strong>manipulação de rotas</strong>, buscando sempre otimizar a performance e a escalabilidade das APIs.`
  },
  react: {
    en: `I'm studying <strong>React</strong> to improve my skills in developing dynamic and reactive <strong>user interfaces</strong>. During learning, I'm focusing on understanding fundamental concepts such as <strong>components</strong>, <strong>state</strong>, and <strong>props</strong>, as well as applying good code organization and reuse practices. Although I'm still deepening my knowledge, I already value the flexibility and power of React to create modern, interactive web applications.`,
    pt: `Estou estudando <strong>React</strong> para aprimorar minhas habilidades no desenvolvimento de <strong>interfaces de usuário</strong> dinâmicas e reativas. Durante o aprendizado, estou focando na compreensão dos conceitos fundamentais, como <strong>componentes</strong>, <strong>estado</strong> e <strong>props</strong>, bem como na aplicação de boas práticas de organização e reutilização de código. Embora ainda esteja aprofundando meus conhecimentos, já valorizo a flexibilidade e o poder do React para criar aplicações web modernas e interativas.`
  },
  taiwind: {
    en: `I use <strong>Tailwind</strong> CSS to efficiently create highly customizable and <strong>responsive</strong> web interfaces. I take advantage of Tailwind's utilitarian approach to apply styles <strong>directly to HTML elements</strong>, which allows for rapid design iteration and greater <strong>flexibility</strong> in building layouts. I value Tailwind's ability to create cohesive and adaptable interfaces, using its utility classes to adjust spacing, colors, and typography in a granular way.`,
    pt: `Utilizo o <strong>Tailwind</strong> CSS para criar interfaces web altamente personalizáveis e <strong>responsivas</strong> com eficiência. Aproveito a abordagem utilitária do Tailwind para aplicar estilos <strong>diretamente nos elementos HTML</strong>, o que permite uma rápida iteração no design e uma maior <strong>flexibilidade</strong> na construção de layouts. Valorizo a capacidade do Tailwind de criar interfaces coesas e adaptáveis, utilizando suas classes de utilidades para ajustar espaçamentos, cores e tipografia de forma granular.`
  },
  sql: {
    en: `I use <strong>SQL</strong> to manage and manipulate data in relational databases. I value building well-designed database structures, with an emphasis on <strong>normalization</strong> and <strong>referential integrity</strong>, to ensure the consistency and efficiency of information. I take advantage of the SQL language to <strong>create</strong>, <strong>read</strong>, <strong>update</strong> and <strong>delete</strong> data <strong>(CRUD)</strong>, in addition to implementing <strong>joins</strong>, aggregations and subqueries to extract valuable insights.`,
    pt: `Utilizo <strong>SQL</strong> para gerenciar e manipular dados em bancos relacionais. Valorizo a construção de estruturas de banco de dados bem projetadas, com ênfase em <strong>normalização</strong> e <strong>integridade referencial</strong>, para garantir a consistência e a eficiência das informações. Aproveito a linguagem SQL para <strong>criar</strong>, <strong>ler</strong>, <strong>atualizar</strong> e <strong>excluir</strong> dados <strong>(CRUD)</strong>, além de implementar <strong>joins</strong>, agregações e subconsultas para extrair insights valiosos.`
  },
  git: {
    en: `I'm studying <strong>Git</strong> to improve my skills in <strong>version control</strong> and collaboration on development projects. I'm focusing on understanding basic concepts, such as <strong>commits</strong>, <strong>branches</strong> and <strong>merges</strong>, as well as learning how to use essential commands to manage <strong>change history</strong> and resolve conflicts. I value practice with Git to improve organization and efficiency in code development.`,
    pt: `Estou estudando <strong>Git</strong> para aprimorar minhas habilidades no <strong>controle de versão</strong> e na colaboração em projetos de desenvolvimento. Estou focando na compreensão dos conceitos básicos, como <strong>commits</strong>, <strong>branches</strong> e <strong>merges</strong>, além de aprender a utilizar comandos essenciais para <strong>gerenciar o histórico de alterações</strong> e resolver conflitos. Valorizo a prática com Git para melhorar a organização e a eficiência no desenvolvimento de código.`
  }
}

const descriptionsProjects = {
  planilhas: {
    pt: 'O estilo minimalista é caracterizado por simplicidade, funcionalidade e foco no essencial. Em design, seja gráfico, de interiores ou web, ele valoriza,Cores Neutras: Paletas em tons de branco, cinza, preto ou pastel, com toques ocasionais de cores vibrantes como destaque.Espaço Negativo: Uso generoso de espaços vazios para criar uma sensação de leveza e clareza.Linhas Limpas: Formas geométricas simples e estruturas organizadas.Tipografia Clara: Fontes limpas e legíveis, sem excesso de ornamentos.Funcionalidade: Tudo tem um propósito claro, eliminando excessos visuais ou decorativos.',
    en: 'The minimalist style is characterized by simplicity, functionality, and a focus on the essential. In design, whether graphic, interior, or web, it values - **Neutral Colors:** Palettes in shades of white, gray, black, or pastel, with occasional touches of vibrant colors as highlights- **Negative Space:**  Generous use of empty spaces to create a sense of lightness and clarity - **Clean Lines:** Simple geometric shapes and organized structures - **Clear Typography:** Clean and legible fonts without excessive ornaments - **Functionality:** Everything has a clear purpose, eliminating visual or decorative excess.',
    urlGit: 'https://github.com/RafaSpeak/RafaSpeak',
    urlDeploy: 'https://github.com/RafaSpeak/RafaSpeak'
  },
  movies: {
    pt: 'Projeto frontend FavFlix. Neste projeto, pude estar aprimorando minhas habilidades em HTML5, CSS e JavaScript, integrando a OMDb API para criar um sistema de busca de filmes por nome e ano. O layout do projeto foi inspirado na plataforma de streams Netflix, com um design moderno e responsivo, proporcionando uma experiência de navegação fluida e intuitiva para os usuários ao explorarem informações de filmes.',
    en: "FavFlix frontend project. In this project, I was able to improve my skills in HTML5, CSS and JavaScript, integrating the OMDb API to create a system for searching movies by name and year. The project's layout was inspired by the Netflix streaming platform, with a modern and responsive design, providing a fluid and intuitive navigation experience for users when exploring movie information.",
    urlGit: '',
    urlDeploy: ''
  },
  login: {
    pt: 'Projeto frontend de formulário de login e cadastro moderno e minimalista. Neste projeto, pude estar aprimorando minhas habilidades em HTML5, CSS e JavaScript, utilizando ícones do Bootstrap para melhorar a interface. A estrutura foi desenvolvida de forma responsiva e focada em uma experiência de usuário simplificada, com validações dinâmicas em JavaScript e otimização SEO para garantir melhor visibilidade nos motores de busca.',
    en: 'Modern and minimalist frontend design of a login and registration form. In this project, I was able to improve my skills in HTML5, CSS and JavaScript, using Bootstrap icons to improve the interface. The structure was developed in a responsive way and focused on a simplified user experience, with dynamic validations in JavaScript and SEO optimization to ensure better visibility in search engines.',
    urlGit: '',
    urlDeploy: ''
  },
  calculator: {
    pt: 'Projeto frontend de calculadora responsiva. Neste projeto, pude estar aprimorando minhas habilidades em JavaScript e trabalhando com funcionalidades como soma, subtração, divisão, e cálculos de porcentagem.',
    en: 'Responsive calculator frontend design. In this project, I was able to hone my JavaScript skills and work with features such as addition, subtraction, division, and percentage calculations.',
    urlGit: 'https://github.com/RafaSpeak/RafaSpeak',
    urlDeploy: ''
  },
  calculatorIMC: {
    pt: 'Projeto frontend de calculadora de IMC. Neste projeto, pude estar aprimorando minhas habilidades em HTML5, CSS e JavaScript para criar uma calculadora de Índice de Massa Corporal (IMC) responsiva e dinâmica. O sistema calcula o IMC e exibe mensagens personalizadas de acordo com o resultado, proporcionando uma experiência interativa ao usuário. ',
    en: 'BMI calculator frontend project. In this project, I was able to improve my HTML5, CSS and JavaScript skills to create a responsive and dynamic Body Mass Index (BMI) calculator. The system calculates the BMI and displays personalized messages according to the result, providing an interactive experience to the user.',
    urlGit: 'https://github.com/RafaSpeak/RafaSpeak',
    urlDeploy: ''
  },
  previsaoTempo: {
    pt: 'Projeto frontend de previsão do tempo. Neste projeto, pude estar aprimorando minhas habilidades em JavaScript e trabalhando com a integração da API OpenWeather para exibir informações de previsão do tempo em tempo real. Além disso, utilizei HTML5 e CSS para estruturar e estilizar a interface de forma responsiva, garantindo uma boa experiência do usuário em diferentes dispositivos.',
    en: 'Weather forecast frontend project. In this project, I was able to improve my JavaScript skills and work with the OpenWeather API integration to display real-time weather forecast information. In addition, I used HTML5 and CSS to structure and style the interface in a responsive way, ensuring a good user experience across different devices.',
    urlGit: '',
    urlDeploy: ''
  }
};

let isMenuVisible = false;
let isLanguageEnglish = true;
let isThemaDark = true;

function toggleMenu() {
  isMenuVisible = !isMenuVisible;
  document.querySelectorAll('.linha-menu-humburguer').forEach(element => {
    element.style.backgroundColor = isMenuVisible ? '#00ffff' : 'white';
  });
}

function toggleLanguage() {
  isLanguageEnglish = !isLanguageEnglish;
}

function toggleThema() {
  isThemaDark = !isThemaDark;
}


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const listaMenus = document.getElementById('lista-menus');
  const btnCardProjetcts = document.querySelectorAll('.btn-project');
  const imageCardsProjects = document.querySelectorAll('.group-image-project');
  const arraySkills = document.querySelectorAll('.skill-element');
  const textSkills = document.querySelector('.textSkills');
  const btnLanguage = document.getElementById('btn-idioma');
  const btnTheme = document.getElementById('btn-tema');
  const arrayMenus = document.querySelectorAll('.itemsMenu-header');
  const userLanguage = localStorage.getItem('language') || navigator.language;

  const observations = ['left', 'right', 'bottom', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 's1', 's2', 's3'];
  observations.forEach(obs => {
    createObservation(`.hidden-scroll-${obs}`, `show-scroll-${obs}`);
  });

  document.querySelectorAll('.btn-project').forEach(element => {
    element.addEventListener('click', () => {
      const title = element.parentNode.querySelector('.title-project').textContent;
      const tecnologies = element.parentNode.querySelector('.description-project').textContent.replace('Stack:', '').split('|').map(tec => tec.trim());
      const classes = element.className.split(' ');
      let description = '';
      let textsOption = '';
      if (isLanguageEnglish) {
        description = descriptionsProjects[classes[1]].en;
        textsOption = ['Technologies:', 'See in:'];
      } else {
        description = descriptionsProjects[classes[1]].pt;
        textsOption = ['Técnologias:', 'Ver em:']
      }
      const urlGit = descriptionsProjects[classes[1]].urlGit;
      const urlDeploy = descriptionsProjects[classes[1]].urlDeploy;

      dialogProject(title, description, tecnologies, urlGit, urlDeploy, textsOption);
    });
  });


  document.querySelector('.close-options').addEventListener('click', (event) => {
    event.preventDefault();
    closeOptionBox();
  });

  document.querySelector('.btn-options-git').addEventListener('click', (event) => {
    closeOptionBox();
  });

  document.querySelector('.btn-options-deploy').addEventListener('click', (event) => {
    closeOptionBox();
  })

  btnTheme.addEventListener('click', (event) => {
    event.preventDefault();
    toogleThemeLenguage(
      isThemaDark, themeLight,
      toggleThema, toggleMenu,
      themeDark, listaMenus
    );
  })

  if (userLanguage.startsWith('pt')) {
    portuguese();
    toggleLanguage();
  } else {
    english();
    toggleLanguage();
  }

  arrayMenus.forEach((element) => {
    element.addEventListener('click', () => {
      if (window.innerWidth <= 986) {
        closedMenu(listaMenus);
        toggleMenu();
      }
    });
  });

  controlTextByLanguage(
    isLanguageEnglish,
    '.textSkills',
    '*Hover your mouse over the skills to check their descriptions*',
    '*Passe o mouse sobre as habilidades para verificar suas descrições*'
  );

  btnLanguage.addEventListener('click', (event) => {
    event.preventDefault();
    toogleThemeLenguage(
      isLanguageEnglish, portuguese,
      toggleLanguage, toggleMenu,
      english, listaMenus
    );
  });


  if (window.innerWidth > 896) {
    arraySkills.forEach((element) => {
      element.addEventListener('mouseover', () => {
        const classesSkills = element.className.split(' ');

        if (classesSkills[1] in descriptionSkills) {
          if (isLanguageEnglish) {
            handleTextSillsHover(isThemaDark, textSkills, classesSkills, 'en', 'rgb(212, 212, 212)', 'rgb(59, 59, 59)');
          } else {
            handleTextSillsHover(isThemaDark, textSkills, classesSkills, 'pt', 'rgb(212, 212, 212)', 'rgb(59, 59, 59)');
          }
        }
      });

      element.addEventListener('mouseout', () => {
        controlTextByLanguage(
          isLanguageEnglish,
          '.textSkills',
          '*Hover your mouse over the skills to check their descriptions*',
          '*Passe o mouse sobre as habilidades para verificar suas descrições*'
        )
      });
    });
  }

  handleHoverCardsProject(false, imageCardsProjects, 'mouseover', '130%');
  handleHoverCardsProject(false, imageCardsProjects, 'mouseout', '115%');
  handleHoverCardsProject(true, btnCardProjetcts, 'mouseover', '130%');
  handleHoverCardsProject(true, btnCardProjetcts, 'mouseout', '115%');

  menu.addEventListener('click', () => {
    isMenuVisible ? closedMenu(listaMenus) : openMenu(listaMenus, isThemaDark);
    toggleMenu();
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth > 896) {
      document.body.style.overflow = 'auto';
      listaMenus.style.visibility = 'visible';
      listaMenus.style.backgroundColor = 'transparent'
    } else {
      closedMenu(listaMenus);
      toggleMenu();
    }
  });
});


function handleTextSillsHover(isTheme, element, array, lenguage, color1, color2) {
  if (isTheme) {
    element.innerHTML = descriptionSkills[array[1]][lenguage];
    element.querySelectorAll('strong').forEach(element => {
      element.style.color = color1;
      element.style.fontWeight = 'bolder';
    });
  } else {
    element.innerHTML = descriptionSkills[array[1]][lenguage];
    element.querySelectorAll('strong').forEach(element => {
      element.style.color = color2;
      element.style.fontWeight = 'bolder';
    });
  }
}

function handleHoverCardsProject(isBtn, item, event, value) {
  if (isBtn) {
    item.forEach(element => {
      element.addEventListener(event, () => {
        const cardItem = element.parentElement;
        const imagemCardItem = cardItem.firstElementChild;
        imagemCardItem.style.backgroundSize = value;
      });
    });
  } else {
    item.forEach(element => {
      element.addEventListener(event, () => {
        element.style.backgroundSize = value;
      });
    });
  }
}

function closedMenu(menu) {
  menu.style.visibility = 'hidden';
  document.body.style.overflow = 'auto';
  menu.style.backgroundColor = 'transparent';
}

function openMenu(menu, themeDark) {
  menu.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
  menu.style.backgroundColor = (themeDark) ? 'black' : 'white';
}

function dialogProject(title, description, technologies, urlGit, urlDeploy, texts) {
  document.body.style.overflow = 'hidden';
  document.querySelector('.description-option-project').textContent = description;
  document.querySelector('.group-project-options-box').style.display = 'flex';
  document.querySelector('.name-project-option').textContent = title;
  document.querySelector('.btn-options-git').setAttribute('href', urlGit)
  document.querySelector('.btn-options-deploy').setAttribute('href', urlDeploy)
  document.querySelector('.description-option-project').textContent = description;
  const listTec = document.querySelector('.list-options-box-tec');
  listTec.innerHTML = '';
  technologies.forEach(element => {
    const newLi = document.createElement('li');
    newLi.textContent = element;
    listTec.appendChild(newLi);
  });
  document.querySelector('.text-tecnologias-options').textContent = texts[0];
  document.querySelector('.text-see-in-options').textContent = texts[1];
}

function portuguese() {
  document.querySelector('.btn-options-deploy').innerHTML = '<i class="bi bi-box-arrow-up-right"></i> Visitar';
  //icone idioma
  document.querySelector('.icon-idioma').setAttribute('src', 'src/img/brasil.webp')
  // navegação
  const arrayMenusPortugues = ['inicio', 'sobre', 'habilidades', 'projetos', 'serviços', 'contato'];
  const arrayItensMenu = document.querySelectorAll('.itemsMenu-header');
  arrayItensMenu.forEach((element, index) => {
    element.textContent = arrayMenusPortugues[index];
  });
  // sobre
  document.querySelector('.titleSobre').innerHTML = '&#8249; <span class="letraMonoton">S</span>obre &#8260; &#8250';
const textsSobreArray = [
  'Saudações, sou <strong>Rafael Do Rosario</strong>, um viajante no vasto mundo da tecnologia, guiado pela paixão em desvendar os segredos da programação. Nos últimos <strong>doze meses</strong>, dediquei-me a dominar as ferramentas mais valorizadas no mercado e a seguir os caminhos harmoniosos das <strong>metodologias ágeis de desenvolvimento</strong>.',
  'Concluí minha jornada inicial em um curso técnico de <strong>Desenvolvimento de Sistemas (DS)</strong>, com ênfase na arte do <strong>desenvolvimento Full Stack</strong>. Desde então, tenho trilhado o caminho do aprendizado contínuo, colaborando em projetos como freelancer e contribuindo para a harmonia de projetos de código aberto, refinando minhas habilidades com cada desafio enfrentado.'
];
  const arrayTextSobre = document.querySelectorAll('.textSobre');
  arrayTextSobre.forEach((element, index) => {
    element.innerHTML = textsSobreArray[index];
  })
  // skills
  document.querySelector('.titleSkills').innerHTML = '&#8249; <span class="letraMonoton">H</span>abilidades &#8260; &#8250;'
  document.querySelector('.textSkills').innerHTML = '*Passe o mouse sobre as habilidades para verificar suas descrições*';
  // projetos
  document.querySelector('.titleProjetos').innerHTML = '&#8249; <span class="letraMonoton">P</span>rojetos &#8260; &#8250;';
  const arrayCards = document.querySelectorAll('.card-item');
  const titlesProjetctsArray = ['Portfólio Minimalista', 'API - Filmes', 'Formuláio de Login', 'Calculadora - Light Dark', 'Calculadora de IMC', 'API - Previsão do Tempo'];
  arrayCards.forEach((element, index) => {
    element.querySelector('.title-project').innerHTML = titlesProjetctsArray[index];
  });
  document.querySelectorAll('.btn-project').forEach(element => {
    element.textContent = 'Ver projeto';
  })
  // serviço
  document.querySelector('.titleService').innerHTML = '&#8249; <span class="letraMonoton">S</span>erviços &#8260; &#8250;';
  const titlesCards = ['Criação de Sites', 'Sites Responsivos', 'Criação de APIs'];
  const descriptionsCards = ['Criação de sites personalizados, sejam pessoais ou para diversos setores de negócio', ' Todos os sites são responsivos, para melhorar ainda mais a experiência do usuário em qualquer dispositivo.', 'Criação de APIs Rest seguras e experiência de integração com bancos de dados externos.'];
  const cardsService = document.querySelectorAll('.card-service');
  cardsService.forEach((element, index) => {
    element.querySelector('.title-card-service').innerHTML = titlesCards[index];
    element.querySelector('.description-card-service').innerHTML = descriptionsCards[index];
  });
  // contato
  document.querySelector('.titleContact').innerHTML = '&#8249; <span class="letraMonoton">C</span>ontato &#8260; &#8250;';
  const inputsPlaceholdsArray = ['Insira seu nome e sobrenome', 'Insira seu email', 'Assunto da mensagem', 'Sua mensagem...'];
  const inputsArray = document.querySelectorAll('.inputsFormContato');
  inputsArray.forEach((element, index) => {
    element.setAttribute('placeholder', inputsPlaceholdsArray[index]);
  });
  document.getElementById('enviar').setAttribute('value', 'Enviar');
}

function english() {
  document.querySelector('.btn-options-deploy').innerHTML = '<i class="bi bi-box-arrow-up-right"></i> Visit';
  //icone idioma
  document.querySelector('.icon-idioma').setAttribute('src', 'src/img/eua.webp');
  // navegação
  const arrayMenusPortugues = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
  const arrayItensMenu = document.querySelectorAll('.itemsMenu-header');
  arrayItensMenu.forEach((element, index) => {
    element.textContent = arrayMenusPortugues[index];
  });
  // sobre
  document.querySelector('.titleSobre').innerHTML = '&#8249; <span class="letraMonoton">A</span>bout &#8260; &#8250';
  const textsSobreArray=[
    'Greetings, I am <strong>Rafael Do Rosario</strong>, a traveler in the vast world of technology, guided by a passion for unraveling the secrets of programming. Over the past <strong>twelve months</strong>, I have dedicated myself to mastering the most valued tools in the market and following the harmonious paths of <strong>agile development methodologies</strong>.',
    'I completed my initial journey with a technical course in <strong>Systems Development (DS)</strong>, focusing on the art of <strong>Full Stack development</strong>. Since then, I have walked the path of continuous learning, collaborating on freelance projects and contributing to the harmony of open-source projects, refining my skills with every challenge faced.'
  ];
  const arrayTextSobre = document.querySelectorAll('.textSobre');
  arrayTextSobre.forEach((element, index) => {
    element.innerHTML = textsSobreArray[index];
  });
  // skills
  document.querySelector('.titleSkills').innerHTML = '&#8249; <span class="letraMonoton">S</span>kills &#8260; &#8250;';
  document.querySelector('.textSkills').innerHTML = '*Hover your mouse over the skills to check their descriptions*';
  // projetos
  document.querySelector('.titleProjetos').innerHTML = '&#8249; <span class="letraMonoton">P</span>rojects &#8260; &#8250;';
  const arrayCards = document.querySelectorAll('.card-item');
  const titlesProjetctsArray = ['Jessica Spreadsheets', 'API - Movies', 'Login Form', 'Calculator - Light Dark', 'BMI Calculator', 'API - Weather Forecast'];
  arrayCards.forEach((element, index) => {
    element.querySelector('.title-project').innerHTML = titlesProjetctsArray[index];
  });
  document.querySelectorAll('.btn-project').forEach(element => {
    element.textContent = 'View project';
  });
  // serviço
  document.querySelector('.titleService').innerHTML = '&#8249; <span class="letraMonoton">S</span>ervices &#8260; &#8250;';
  const titlesCards = ['Website Creation', 'Responsive Websites', 'Creating APIs'];
  const descriptionsCards = ['Creation of personalized websites, whether personal or for various business sectors', 'All websites are responsive, to further improve the user experience on any device.', 'Creation of secure Rest APIs, and integration with external databases experience.'];
  const cardsService = document.querySelectorAll('.card-service');
  cardsService.forEach((element, index) => {
    element.querySelector('.title-card-service').innerHTML = titlesCards[index];
    element.querySelector('.description-card-service').innerHTML = descriptionsCards[index];
  });
  // contato
  document.querySelector('.titleContact').innerHTML = '&#8249; <span class="letraMonoton">C</span>ontact &#8260; &#8250;';
  const inputsPlaceholdsArray = ['Enter your first and last name', 'Enter your email', 'Message subject', 'Your message...'];
  const inputsArray = document.querySelectorAll('.inputsFormContato');
  inputsArray.forEach((element, index) => {
    element.setAttribute('placeholder', inputsPlaceholdsArray[index]);
  });
  document.getElementById('enviar').setAttribute('value', 'Send');
}

function themeLight() {
  //Caixa options
  document.querySelector('.group-project-options-box').style.backgroundColor = 'rgb(255 255 255 / 55%)';
  document.querySelector('.project-options-box').style.backgroundColor = '#ffffff';
  document.querySelector('.project-options-box').style.boxShadow = '0px 0px 10px gray';
  document.querySelector('.project-options-box').style.color = 'black';
  document.querySelector('.name-project-option').style.color = '#000000';
  document.querySelector('.name-project-option').style.textShadow = '0px 0px 5px #0000009a';
  document.querySelector('.close-options').style.color = 'black';
  document.getElementById('btn-tema').setAttribute('src', 'src/img/modo-claro.webp');
  document.querySelector('.listNav').style.backgroundColor = 'transparent';
  document.body.style.backgroundColor = '#f7f7f7';
  document.querySelector('.logoNav').style.color = 'rgb(49, 49, 49)';
  document.querySelector('.groupNav').style.backgroundColor = '#ffffffed';
  document.querySelector('.groupNav').style.boxShadow = '0px 0px 8px rgba(49, 49, 49, 0.438)';
  document.querySelector('.groupHeader-texts h1').style.color = 'rgb(49, 49, 49)';
  document.querySelector('.titleSobre').style.color = 'rgb(49, 49, 49)';
  document.querySelector('.groupSobre').style.backgroundColor = '#ffffff';
  document.querySelector('.groupSobre-primary').style.color = '#1d1d1d';
  document.querySelector('.titleSkills').style.color = 'rgb(49, 49, 49)';
  document.querySelector('.textSkills').style.color = '#1d1d1d';
  document.querySelector('.groupProjetos').style.backgroundColor = 'white';
  document.querySelector('.titleProjetos').style.color = 'rgb(49, 49, 49)';
  document.querySelector('.groupService').style.backgroundColor = '#f7f7f7';
  document.querySelector('.titleService').style.color = 'rgb(49, 49, 49)';
  document.querySelector('.groupContact').style.backgroundColor = 'white';
  document.querySelector('.titleContact').style.color = 'rgb(49, 49, 49)';
  document.querySelector('textarea').style.border = '1px solid rgb(219, 219, 219)';
  document.querySelector('textarea').style.backgroundColor = '#eeeeee';
  document.querySelector('textarea').style.color = 'rgb(49, 49, 49)';

  // Seletores querySelectorAll
  document.querySelectorAll('.itemsMenu-header').forEach(element => {
    element.classList.remove('itemsMenu-header--dark');
    element.classList.add('itemsMenu-header--ligth');
  });
  document.querySelectorAll('.itemsMenu-header').forEach(element => {
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.linha-menu-humburguer').forEach(element => {
    element.style.backgroundColor = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.geoupHeader-socialMediaButton').forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.boxShadow = '0px 0px 10px rgba(128, 128, 128, 0.575)';
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.textSobre').forEach(element => {
    element.style.color = '#1d1d1d';
  });
  document.querySelectorAll('.skill-element').forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.border = '1px solid #e4e4e4';
  });
  document.querySelectorAll('strong').forEach(element => {
    element.style.color = 'rgb(59, 59, 59)';
  });
  document.querySelectorAll('.card-item').forEach(element => {
    element.style.backgroundColor = '#f3f3f3';
    element.style.border = '1px solid #e2e2e2';
  });
  document.querySelectorAll('.title-project').forEach(element => {
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.description-project').forEach(element => {
    element.style.color = '#5b5b5b';
  });
  document.querySelectorAll('.btn-project').forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.border = '2px solid #e9e9e9';
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.card-service').forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.border = '1px solid #e2e2e2';
    element.style.transition = 'border 1s ease';
  });
  document.querySelectorAll('.circle-interno-servico').forEach(element => {
    element.style.backgroundColor = 'white';
  });
  document.querySelectorAll('.title-card-service').forEach(element => {
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.description-card-service').forEach(element => {
    element.style.color = '#1d1d1d';
  });
  document.querySelectorAll('input').forEach(element => {
    element.style.border = '1px solid rgb(219, 219, 219)';
    element.style.backgroundColor = '#eeeeee';
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.linhas').forEach(element => {
    element.style.backgroundImage = 'linear-gradient(to top, transparent 20%, #00ffff)';
  });
  document.querySelectorAll('.listNav > li').forEach(element => {
    element.style.backgroundColor = 'transparent';
  });

  // Elementos com eventos
  document.querySelectorAll('.itemsMenu-header').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = 'black';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'rgb(49, 49, 49)';
    });
  });
  document.querySelectorAll('.geoupHeader-socialMediaButton').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = '#00ffff';
      element.style.boxShadow = '0px 0px 10px #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'rgb(49, 49, 49)';
      element.style.boxShadow = '0px 0px 10px rgba(128, 128, 128, 0.575)';
    });
  });
  document.querySelectorAll('.skill-element').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #e4e4e4';
    });
  });
  document.querySelectorAll('.btn-project').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = 'gray';
      element.style.color = 'white';
    });
    element.addEventListener('mouseout', () => {
      element.style.backgroundColor = 'white';
      element.style.color = 'rgb(49, 49, 49)';
    });
  });
  document.querySelectorAll('.card-service').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #e2e2e2';
    });
  });
  document.querySelector('textarea').addEventListener('focus', () => {
    document.querySelector('textarea').style.boxShadow = '0px 0px 8px #00ffff';
  });
  document.querySelectorAll('.listNav > li').forEach(element => {
    if (window.innerWidth < 896) {
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgb(229, 229, 229)';
      });
      element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'transparent';
      });
    }
  });
}

function themeDark() {
  document.querySelector('.group-project-options-box').style.backgroundColor = 'rgba(0, 0, 0, 0.86)';
  document.querySelector('.project-options-box').style.backgroundColor = '#0b0b0b';
  document.querySelector('.project-options-box').style.boxShadow = 'none';
  document.querySelector('.project-options-box').style.color = 'white';
  document.querySelector('.name-project-option').style.color = '#00ffff';
  document.querySelector('.name-project-option').style.textShadow = '0px 0px 5px #00ffff9a';
  document.querySelector('.close-options').style.color = 'white';
  document.getElementById('btn-tema').setAttribute('src', 'src/img/modo-escuro.webp');
  document.querySelector('.listNav').style.backgroundColor = 'transparent';
  document.body.style.backgroundColor = '#0f0f0f';
  document.querySelector('.logoNav').style.color = 'white';
  document.querySelector('.groupNav').style.backgroundColor = '#080808ed';
  document.querySelector('.groupNav').style.boxShadow = '0px 0px 8px rgb(49, 49, 49)';
  document.querySelector('.groupHeader-texts h1').style.color = 'white';
  document.querySelector('.titleSobre').style.color = 'white';
  document.querySelector('.groupSobre').style.backgroundColor = '#0b0b0b';
  document.querySelector('.groupSobre-primary').style.color = '#f7f7f7';
  document.querySelector('.titleSkills').style.color = 'white';
  document.querySelector('.textSkills').style.color = '#9ca3af';
  document.querySelector('.groupProjetos').style.backgroundColor = '#0b0b0b';
  document.querySelector('.titleProjetos').style.color = 'white';
  document.querySelector('.groupService').style.backgroundColor = '#0f0f0f';
  document.querySelector('.titleService').style.color = 'white';
  document.querySelector('.groupContact').style.backgroundColor = '#0b0b0b';
  document.querySelector('.titleContact').style.color = 'white';
  document.querySelector('textarea').style.border = '1px solid #00ffff';
  document.querySelector('textarea').style.backgroundColor = '#161616';
  document.querySelector('textarea').style.color = 'white';

  // Seletores querySelectorAll
  document.querySelectorAll('.itemsMenu-header').forEach(element => {
    element.classList.remove('itemsMenu-header--ligth');
    element.classList.add('itemsMenu-header--dark');
  });
  document.querySelectorAll('.itemsMenu-header').forEach(element => {
    element.style.color = 'white';
  });
  document.querySelectorAll('.linha-menu-humburguer').forEach(element => {
    element.style.backgroundColor = 'white';
  });
  document.querySelectorAll('.geoupHeader-socialMediaButton').forEach(element => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = 'none';
    element.style.color = 'white';
  });
  document.querySelectorAll('.textSobre').forEach(element => {
    element.style.color = '#9ca3af';
  });
  document.querySelectorAll('.skill-element').forEach(element => {
    element.style.backgroundColor = '#141414';
    element.style.border = '1px solid #242323';
  });
  document.querySelectorAll('strong').forEach(element => {
    element.style.color = 'rgb(212, 212, 212)';
  });
  document.querySelectorAll('.card-item').forEach(element => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.border = '1px solid #1a1a1a';
  });
  document.querySelectorAll('.title-project').forEach(element => {
    element.style.color = 'white';
  });
  document.querySelectorAll('.description-project').forEach(element => {
    element.style.color = '#5b5b5b';
  });
  document.querySelectorAll('.btn-project').forEach(element => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.border = '2px solid #2c2c2c';
    element.style.color = 'white';
  });
  document.querySelectorAll('.card-service').forEach(element => {
    element.style.backgroundColor = '#141414';
    element.style.border = '1px solid #1e1d1d';
    element.style.transition = 'border 1s ease';
  });
  document.querySelectorAll('.circle-interno-servico').forEach(element => {
    element.style.backgroundColor = '#0f0f0f';
  });
  document.querySelectorAll('.title-card-service').forEach(element => {
    element.style.color = 'white';
  });
  document.querySelectorAll('.description-card-service').forEach(element => {
    element.style.color = '#9ca3af';
  });
  document.querySelectorAll('input').forEach(element => {
    element.style.border = '1px solid #00ffff';
    element.style.backgroundColor = '#161616';
    element.style.color = 'white';
  });
  document.querySelectorAll('.linhas').forEach(element => {
    element.style.backgroundImage = 'linear-gradient(to top, transparent 20%, #00ffff)';
  });
  document.querySelectorAll('.listNav > li').forEach(element => {
    element.style.backgroundColor = 'transparent';
  });

  // Elementos com eventos
  document.querySelectorAll('.itemsMenu-header').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = '#00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'white';
    });
  });
  document.querySelectorAll('.geoupHeader-socialMediaButton').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = '#00ffff';
      element.style.boxShadow = '0px 0px 10px #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'white';
      element.style.boxShadow = 'none';
      element.backgroundColor = '#1d1d1d';
    });
  });
  document.querySelectorAll('.skill-element').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #131313';
    });
  });
  document.querySelectorAll('.btn-project').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = '#2e2e2e';
      element.style.color = 'white';
    });
    element.addEventListener('mouseout', () => {
      element.style.backgroundColor = '#1d1d1d';
      element.style.color = 'white';
    });
  });
  document.querySelectorAll('.card-service').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #1a1a1a';
    });
  });
  document.querySelector('textarea').addEventListener('focus', () => {
    document.querySelector('textarea').style.boxShadow = '0px 0px 8px #00ffff';
  });
  document.querySelectorAll('.listNav > li').forEach(element => {
    if (window.innerWidth < 896) {
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgb(45, 45, 45)';
      });
      element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'transparent';
      });
    }
  });
}

function createObservation(hiddenClass, visibleClass) {
  const observation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
      } else {
        return;
      }
    });
  });

  const elementosOcultos = document.querySelectorAll(hiddenClass);
  elementosOcultos.forEach((element) => observation.observe(element));
}

function closeOptionBox() {
  document.body.style.overflow = 'auto';
  document.querySelector('.group-project-options-box').style.display = 'none';
}

function controlTextByLanguage(lenguageEnglis, element, textEn, textPt) {
  document.querySelector(element).innerHTML = (lenguageEnglis) ? textEn : textPt;
}

function toogleThemeLenguage(
  condition, function1,
  toogleFunction1, toogleFunction2,
  function2, list) {
  if (condition) {
    function1();
    toogleFunction1();
    if (window.innerWidth <= 896) {
      closedMenu(list);
      toogleFunction2();
    }
  } else {
    function2();
    toogleFunction1();
    if (window.innerWidth <= 896) {
      closedMenu(list);
      toogleFunction2();
    }
  }
}