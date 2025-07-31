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
      description: 'Conheça nossa empresa'
    },
    {
      name: 'Serviços',
      url: '/servicos',
      icon: '⚡',
      description: 'Nossas soluções'
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
      description: 'Instalações elétricas residenciais, comerciais e industriais',
      icon: '⚡',
      url: '/servicos/eletrico',
      features: [
        'Instalações residenciais',
        'Instalações comerciais',
        'Instalações industriais',
        'Quadros de distribuição',
        'Iluminação e tomadas',
        'Medição individualizada'
      ]
    },
    {
      id: 'hidrossanitario',
      name: 'Projetos Hidrossanitários',
      description: 'Instalações hidráulicas e sanitárias',
      icon: '🚰',
      url: '/servicos/hidrossanitario',
      features: [
        'Instalações hidráulicas',
        'Instalações sanitárias',
        'Sistemas de drenagem',
        'Tratamento de esgoto',
        'Captação de água da chuva',
        'Fossas sépticas'
      ]
    },
    {
      id: 'estrutural',
      name: 'Projetos Estruturais',
      description: 'Dimensionamento e cálculo estrutural',
      icon: '🏗️',
      url: '/servicos/estrutural',
      features: [
        'Cálculo estrutural',
        'Dimensionamento',
        'Análise de cargas',
        'Projetos de fundação',
        'Estruturas metálicas',
        'Estruturas de concreto'
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
    }
  ],

  // Footer links
  footer: {
    company: [
      { name: 'Sobre Nós', url: '/sobre' },
      { name: 'Nossa Missão', url: '/sobre#missao' },
      { name: 'Equipe', url: '/sobre#equipe' },
      { name: 'História', url: '/sobre#historia' }
    ],
    services: [
      { name: 'Projetos Elétricos', url: '/servicos/eletrico' },
      { name: 'Projetos Hidrossanitários', url: '/servicos/hidrossanitario' },
      { name: 'Projetos Estruturais', url: '/servicos/estrutural' },
      { name: 'Consultoria', url: '/servicos/consultoria' }
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
      url: 'https://linkedin.com/in/pedro-vitor-engenheiro',
      icon: 'linkedin',
      color: 'blue'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5551999999999',
      icon: 'whatsapp',
      color: 'green'
    },
    {
      name: 'Email',
      url: 'mailto:contato@pedrovitor.com.br',
      icon: 'mail',
      color: 'red'
    }
  ],

  // Contact information
  contact: {
    phone: '+55 (51) 99999-9999',
    email: 'contato@pedrovitor.com.br',
    address: 'Porto Alegre, RS, Brasil',
    hours: 'Segunda a Sexta: 8h às 18h'
  }
}; 