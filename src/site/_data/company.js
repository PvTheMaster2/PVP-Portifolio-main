// Informações da empresa PVP Projects
module.exports = {
  // Informações básicas
  name: 'PVP Projects',
  fullName: 'PVP Projects - Engenharia de Precisão',
  tagline: 'Soluções integradas que unem técnica, segurança e design',
  
  // Sobre a empresa
  about: {
    description: 'A PVP Projects nasceu da paixão pela engenharia de precisão e do desejo de oferecer soluções integradas que unem técnica, segurança e design.',
    history: 'Fundada por Pedro Vitor Pagliarin, Engenheiro Eletricista formado pela Universidade Federal do Rio Grande do Sul (UFRGS), a empresa acumula 8 anos de sólida experiência no desenvolvimento de projetos para escritórios de arquitetura e engenharia de renome.',
    experience: '8 anos de experiência',
    education: 'Engenheiro Eletricista - UFRGS',
    focus: 'Transformar desafios técnicos em projetos eficientes e inteligentes, garantindo a tranquilidade e a satisfação de nossos clientes e parceiros.'
  },

  // Missão e valores
  mission: {
    title: 'Nossa Missão e Valores',
    description: 'Acreditamos que um projeto de excelência é construído sobre pilares sólidos de confiança, competência e colaboração.',
    values: [
      {
        title: 'Transparência e Competência Técnica',
        description: 'Atuamos com clareza em todas as etapas, oferecendo soluções tecnicamente robustas, seguras e em total conformidade com as normas vigentes (NBR, CEEE Equatorial, DMAE, etc.).',
        icon: '🔍'
      },
      {
        title: 'Colaboração Estratégica',
        description: 'Somos parceiros de arquitetos e construtores. Nosso objetivo é complementar a visão arquitetônica com soluções de engenharia que sejam funcionais, esteticamente integradas e executáveis.',
        icon: '🤝'
      },
      {
        title: 'Foco no Cliente',
        description: 'Buscamos construir relações duradouras, baseadas na confiança e no benefício mútuo, entregando projetos que atendem e superam as expectativas.',
        icon: '👥'
      },
      {
        title: 'Inovação e Eficiência',
        description: 'Utilizamos ferramentas de ponta, como Revit para modelagem BIM e AutoCAD para detalhamento preciso, garantindo compatibilidade entre disciplinas e otimização da execução em obra.',
        icon: '⚡'
      }
    ]
  },

  // Serviços oferecidos
  services: {
    eletrico: {
      title: 'Projetos Elétricos',
      description: 'Instalações de baixa tensão para todos os portes',
      features: [
        'Entrada de energia e medição individualizada (padrão CEEE e outras concessionárias)',
        'Quadros de distribuição, diagramas unifilares e balanceamento de cargas',
        'Projetos de iluminação, tomadas e pontos de força',
        'Infraestrutura para climatização, automação e sistemas fotovoltaicos',
        'Sistema de Proteção contra Descargas Atmosféricas (SPDA)'
      ],
      icon: '⚡',
      color: 'primary'
    },
    hidrossanitario: {
      title: 'Projetos Hidrossanitários',
      description: 'Redes de água fria e quente',
      features: [
        'Sistemas de esgoto cloacal e pluvial',
        'Dimensionamento de reservatórios, caixas de inspeção e sistemas sépticos',
        'Documentação para aprovação em concessionárias (DMAE, SEMAE, etc.)'
      ],
      icon: '🚰',
      color: 'secondary'
    },
    comunicacao: {
      title: 'Projetos de Comunicação',
      description: 'Infraestrutura para redes de dados, telefonia e TV',
      features: [
        'Cabeamento estruturado',
        'Redes de dados',
        'Telefonia',
        'TV'
      ],
      icon: '📡',
      color: 'accent'
    },
    consultoria: {
      title: 'Consultoria e Compatibilização BIM',
      description: 'Modelagem 3D das instalações em Revit',
      features: [
        'Análise de interferências e otimização de rotas',
        'Coordenação com projetos de arquitetura, estrutura e interiores',
        'Modelagem 3D das instalações em Revit'
      ],
      icon: '🏗️',
      color: 'success'
    }
  },

  // Informações de contato
  contact: {
    engineer: 'Eng. Pedro Vitor Pagliarin',
    email: 'pedrovitor.pagliarin@hotmail.com',
    phone: '+55 (54) 99159-0379',
    whatsapp: '+55 (54) 99159-0379',
    address: 'Porto Alegre, RS, Brasil',
    hours: 'Segunda a Sexta: 8h às 18h',
    social: {
      linkedin: 'https://linkedin.com/in/pedro-vitor-pagliarin',
      whatsapp: 'https://wa.me/5554991590379',
      email: 'mailto:pedrovitor.pagliarin@hotmail.com'
    }
  },

  // Especialidades técnicas
  expertise: {
    areas: [
      'Projetos Residenciais',
      'Projetos Comerciais',
      'Projetos Prediais',
      'Projetos Institucionais'
    ],
    tools: [
      'Revit (Modelagem BIM)',
      'AutoCAD (Detalhamento)',
      'NBR (Normas Técnicas)',
      'CEEE Equatorial',
      'DMAE',
      'SEMAE'
    ],
    certifications: [
      'Engenheiro Eletricista - UFRGS',
      '8 anos de experiência',
      'Projetos para escritórios de renome'
    ]
  },

  // Métricas da empresa
  metrics: {
    experience: '8 anos',
    projects: '50+ projetos',
    clients: '20+ clientes',
    satisfaction: '100%',
    compliance: '100% (normas vigentes)'
  },

  // Logotipo (espaço reservado)
  logo: {
    src: '/assets/images/logo-pvp-projects.png',
    alt: 'PVP Projects - Engenharia de Precisão',
    available: false
  }
}; 