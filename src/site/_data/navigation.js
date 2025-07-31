// Estrutura de navegação principal
module.exports = {
  // Menu principal
  main: [
    {
      name: 'Home',
      url: '/',
      icon: '🏠',
      description: 'Página inicial'
    },
    {
      name: 'Sobre',
      url: '/sobre',
      icon: '👨‍💼',
      description: 'Conheça a PVP Projects'
    },
    {
      name: 'Serviços',
      url: '/servicos',
      icon: '⚡',
      description: 'Nossas soluções de engenharia'
    },
    {
      name: 'Projetos',
      url: '/projetos',
      icon: '🏗️',
      description: 'Portfólio completo'
    },
    {
      name: 'Contato',
      url: '/contato',
      icon: '📞',
      description: 'Entre em contato'
    }
  ],

  // Categorias de serviços
  services: [
    {
      id: 'eletrico',
      name: 'Projetos Elétricos',
      description: 'Instalações de baixa tensão para todos os portes',
      icon: '⚡',
      url: '/servicos/eletrico',
      features: [
        'Entrada de energia e medição individualizada',
        'Quadros de distribuição e diagramas unifilares',
        'Projetos de iluminação e tomadas',
        'Infraestrutura para climatização',
        'Sistema de Proteção contra Descargas Atmosféricas (SPDA)',
        'Automação e sistemas fotovoltaicos'
      ]
    },
    {
      id: 'hidrossanitario',
      name: 'Projetos Hidrossanitários',
      description: 'Redes de água fria e quente',
      icon: '🚰',
      url: '/servicos/hidrossanitario',
      features: [
        'Sistemas de esgoto cloacal e pluvial',
        'Dimensionamento de reservatórios',
        'Caixas de inspeção e sistemas sépticos',
        'Documentação para aprovação em concessionárias',
        'DMAE, SEMAE e outras concessionárias'
      ]
    },
    {
      id: 'comunicacao',
      name: 'Projetos de Comunicação',
      description: 'Infraestrutura para redes de dados, telefonia e TV',
      icon: '📡',
      url: '/servicos/comunicacao',
      features: [
        'Cabeamento estruturado',
        'Redes de dados',
        'Telefonia',
        'TV'
      ]
    },
    {
      id: 'consultoria',
      name: 'Consultoria e Compatibilização BIM',
      description: 'Modelagem 3D das instalações em Revit',
      icon: '🏗️',
      url: '/servicos/consultoria',
      features: [
        'Análise de interferências e otimização de rotas',
        'Coordenação com projetos de arquitetura',
        'Modelagem 3D das instalações em Revit',
        'Compatibilização entre disciplinas'
      ]
    }
  ],

  // Tipos de projetos
  projectTypes: [
    {
      id: 'predial',
      name: 'Projetos Prediais',
      description: 'Edifícios residenciais e comerciais',
      icon: '🏢',
      url: '/projetos/predial',
      count: 7
    },
    {
      id: 'residencial',
      name: 'Projetos Residenciais',
      description: 'Casas e apartamentos',
      icon: '🏠',
      url: '/projetos/residencial',
      count: 2
    },
    {
      id: 'comercial',
      name: 'Projetos Comerciais',
      description: 'Lojas e estabelecimentos',
      icon: '🏪',
      url: '/projetos/comercial',
      count: 1
    },
    {
      id: 'institucional',
      name: 'Projetos Institucionais',
      description: 'Escolas, hospitais e instituições',
      icon: '🏛️',
      url: '/projetos/institucional',
      count: 0
    }
  ],

  // Footer links
  footer: {
    company: [
      { name: 'Sobre Nós', url: '/sobre' },
      { name: 'Nossa Missão', url: '/sobre#missao' },
      { name: 'Nossa História', url: '/sobre#historia' },
      { name: 'Valores', url: '/sobre#valores' }
    ],
    services: [
      { name: 'Projetos Elétricos', url: '/servicos/eletrico' },
      { name: 'Projetos Hidrossanitários', url: '/servicos/hidrossanitario' },
      { name: 'Projetos de Comunicação', url: '/servicos/comunicacao' },
      { name: 'Consultoria BIM', url: '/servicos/consultoria' }
    ],
    projects: [
      { name: 'Projetos Prediais', url: '/projetos/predial' },
      { name: 'Projetos Residenciais', url: '/projetos/residencial' },
      { name: 'Projetos Comerciais', url: '/projetos/comercial' },
      { name: 'Todos os Projetos', url: '/projetos' }
    ],
    legal: [
      { name: 'Política de Privacidade', url: '/legal/privacidade' },
      { name: 'Termos de Uso', url: '/legal/termos' },
      { name: 'Cookies', url: '/legal/cookies' }
    ]
  },

  // Breadcrumbs
  breadcrumbs: {
    home: { name: 'Home', url: '/' },
    about: { name: 'Sobre', url: '/sobre' },
    services: { name: 'Serviços', url: '/servicos' },
    projects: { name: 'Projetos', url: '/projetos' },
    contact: { name: 'Contato', url: '/contato' }
  },

  // Social media
  social: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pedro-vitor-pagliarin',
      icon: 'linkedin',
      color: 'blue'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5554991590379',
      icon: 'whatsapp',
      color: 'green'
    },
    {
      name: 'Email',
      url: 'mailto:pedrovitor.pagliarin@hotmail.com',
      icon: 'mail',
      color: 'red'
    }
  ],

  // Contact information
  contact: {
    engineer: 'Eng. Pedro Vitor Pagliarin',
    phone: '+55 (54) 99159-0379',
    email: 'pedrovitor.pagliarin@hotmail.com',
    address: 'Porto Alegre, RS, Brasil',
    hours: 'Segunda a Sexta: 8h às 18h'
  }
}; 