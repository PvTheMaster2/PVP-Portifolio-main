// Estrutura de dados organizada para projetos de engenharia
module.exports = {
  // Categorias de serviços
  categories: {
    eletrico: {
      name: 'Projetos Elétricos',
      description: 'Instalações de baixa tensão para todos os portes',
      icon: '⚡',
      color: 'primary'
    },
    hidrossanitario: {
      name: 'Projetos Hidrossanitários',
      description: 'Redes de água fria e quente',
      icon: '🚰',
      color: 'secondary'
    },
    comunicacao: {
      name: 'Projetos de Comunicação',
      description: 'Infraestrutura para redes de dados, telefonia e TV',
      icon: '📡',
      color: 'accent'
    },
    consultoria: {
      name: 'Consultoria e Compatibilização BIM',
      description: 'Modelagem 3D das instalações em Revit',
      icon: '🏗️',
      color: 'success'
    }
  },

  // Projetos principais (REVIT)
  projects: {
    'barao-uba': {
      id: 'barao-uba',
      title: 'Edifício Barão de Uba',
      subtitle: 'Projeto Elétrico Predial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'BARÃO DE UBA',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Edifício residencial multifamiliar — 11 pavimentos / 20 apartamentos / 2 subsolos',
      details: {
        area: '2.500 m²',
        pavimentos: 11,
        apartamentos: 20,
        subsolos: 2,
        ferramentas: ['Revit', 'AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 14039:2005', 'NBR 13570:1996']
      },
      challenges: [
        'Medição individualizada para 20 unidades',
        'Dimensionamento de entrada de energia',
        'Infraestrutura para climatização',
        'Iluminação de circulação e garagem'
      ],
      solutions: [
        'Painel central de medidores detalhado',
        'Alimentadores individuais por unidade',
        'Espera para splits em todas as unidades',
        'Infraestrutura elétrica completa'
      ],
      results: [
        'Projeto aprovado pela concessionária',
        'Execução em campo sem problemas',
        'Eficiência energética otimizada',
        'Segurança técnica garantida'
      ],
      images: [
        {
          src: '/assets/imagens/capa_thumb.jpg_barao-uba.jpg',
          alt: 'Vista da fachada do edifício',
          caption: 'Fachada principal'
        },
        {
          src: '/assets/imagens/esquema_vertical_thumb.jpg_barao-uba.jpg',
          alt: 'Esquema vertical das prumadas',
          caption: 'Esquema vertical'
        },
        {
          src: '/assets/imagens/medidores_thumb.jpg_barao-uba.jpg',
          alt: 'Detalhamento dos painéis de medição',
          caption: 'Painéis de medição'
        },
        {
          src: '/assets/imagens/diagrama_multifilar_thumb.jpg_barao-uba.jpg',
          alt: 'Trecho do diagrama multifilar',
          caption: 'Diagrama multifilar'
        }
      ],
      documents: [
        {
          name: 'Diagrama Unifilar',
          url: '/assets/pdfs/unifilar-predial-barao.pdf',
          type: 'pdf'
        },
        {
          name: 'Esquema Vertical',
          url: '/assets/pdfs/vertical-predial-barao.pdf',
          type: 'pdf'
        },
        {
          name: 'Painéis de Medição',
          url: '/assets/pdfs/painel-predial-barao.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 9,
        area: 2500,
        duration: '3 meses',
        team: 2
      }
    },

    'casa-sitio': {
      id: 'casa-sitio',
      title: 'Casa Sítio',
      subtitle: 'Projeto Elétrico e Hidrossanitário',
      category: 'residencial',
      subcategory: 'eletrico',
      client: 'CASA SITIO',
      location: 'Interior RS',
      year: 2023,
      description: 'Projeto completo para residência rural com sistema de captação de água',
      details: {
        area: '180 m²',
        pavimentos: 1,
        ferramentas: ['Revit', 'AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 8160:1999']
      },
      challenges: [
        'Sistema de captação de água da chuva',
        'Instalações elétricas rurais',
        'Tratamento de esgoto individual'
      ],
      solutions: [
        'Cisterna com sistema de filtros',
        'Quadro elétrico com proteção contra surtos',
        'Fossa séptica com sumidouro'
      ],
      results: [
        'Sustentabilidade hídrica',
        'Autonomia energética',
        'Conforto rural moderno'
      ],
      images: [
        {
          src: '/assets/imagens/casa-sitio_casa-sitio.png',
          alt: 'Vista da casa sítio',
          caption: 'Vista geral'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/terreo-casa-gp.pdf',
          type: 'pdf'
        },
        {
          name: 'Projeto Hidrossanitário',
          url: '/assets/pdfs/cobertura-casa-gp.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 6,
        area: 180,
        duration: '2 meses',
        team: 1
      }
    },

    'dom-pedrito': {
      id: 'dom-pedrito',
      title: 'Dom Pedrito',
      subtitle: 'Projeto Elétrico',
      category: 'residencial',
      subcategory: 'eletrico',
      client: 'DOM PEDRITO',
      location: 'Dom Pedrito',
      year: 2023,
      description: 'Projeto elétrico para residência unifamiliar',
      details: {
        area: '120 m²',
        pavimentos: 1,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Layout otimizado para família',
        'Iluminação natural e artificial'
      ],
      solutions: [
        'Distribuição eficiente de pontos',
        'Sistema de iluminação integrado'
      ],
      results: [
        'Conforto e funcionalidade',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/fc-d08-wolf-e301-r02-2pavimento_dom-pedrito_recorte_p1.pdf',
          alt: 'Projeto Dom Pedrito',
          caption: 'Planta elétrica'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d08-wolf-e301-r02-2pavimento_dom-pedrito_recorte_p1.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 4,
        area: 120,
        duration: '1 mês',
        team: 1
      }
    },

    'sicredi': {
      id: 'sicredi',
      title: 'Sicredi',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'SICREDI',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para agência bancária',
      details: {
        area: '300 m²',
        pavimentos: 2,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004', 'NBR 13534:1995']
      },
      challenges: [
        'Sistema de segurança',
        'Iluminação de emergência',
        'Ar condicionado central'
      ],
      solutions: [
        'Quadro de comando de emergência',
        'Iluminação de escape',
        'Infraestrutura para climatização'
      ],
      results: [
        'Segurança operacional',
        'Conforto térmico',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/sidcredi_sicredi.png',
          alt: 'Agência Sicredi',
          caption: 'Vista da agência'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d34-sureg-e201-ex-r00-2pav_sicredi.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 7,
        area: 300,
        duration: '2 meses',
        team: 2
      }
    },

    'loja-joao': {
      id: 'loja-joao',
      title: 'Loja João Wallig',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'LOJA JOAO WALLIG',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para loja comercial',
      details: {
        area: '150 m²',
        pavimentos: 1,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Iluminação comercial',
        'Sistema de climatização',
        'Tomadas para equipamentos'
      ],
      solutions: [
        'Iluminação LED eficiente',
        'Infraestrutura para ar condicionado',
        'Distribuição otimizada de pontos'
      ],
      results: [
        'Ambiente comercial atrativo',
        'Conforto térmico',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/render-loja-joao.pdf',
          alt: 'Loja João Wallig',
          caption: 'Vista da loja'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d33-e101-r01_loja-joao.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 5,
        area: 150,
        duration: '1 mês',
        team: 1
      }
    },

    'loja-avenida': {
      id: 'loja-avenida',
      title: 'Loja Avenida do Forte',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'LOJA AVENIDA DO FORTE',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para loja comercial',
      details: {
        area: '200 m²',
        pavimentos: 2,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Layout comercial complexo',
        'Sistema de climatização',
        'Iluminação de destaque'
      ],
      solutions: [
        'Projeto elétrico detalhado',
        'Infraestrutura para ar condicionado',
        'Iluminação comercial eficiente'
      ],
      results: [
        'Ambiente comercial funcional',
        'Conforto térmico',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/render-loja-avenida.pdf',
          alt: 'Loja Avenida do Forte',
          caption: 'Vista da loja'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d35-e101-terreo-r02_loja-avenida.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 6,
        area: 200,
        duration: '1.5 meses',
        team: 1
      }
    },

    'lojas-remiao': {
      id: 'lojas-remiao',
      title: 'Lojas Remião',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'LOJAS REMIÃO',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para loja comercial',
      details: {
        area: '180 m²',
        pavimentos: 1,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Iluminação comercial',
        'Sistema de climatização',
        'Distribuição de pontos'
      ],
      solutions: [
        'Iluminação LED eficiente',
        'Infraestrutura para ar condicionado',
        'Layout otimizado'
      ],
      results: [
        'Ambiente comercial atrativo',
        'Conforto térmico',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/render-loja-rm.pdf',
          alt: 'Lojas Remião',
          caption: 'Vista da loja'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d30-e101-térreo-r02_lojas-remiao.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 5,
        area: 180,
        duration: '1 mês',
        team: 1
      }
    },

    'marista': {
      id: 'marista',
      title: 'Marista',
      subtitle: 'Projeto Elétrico Educacional',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'MARISTA',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para instituição educacional',
      details: {
        area: '500 m²',
        pavimentos: 2,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004', 'NBR 13534:1995']
      },
      challenges: [
        'Sistema de segurança',
        'Iluminação de emergência',
        'Infraestrutura tecnológica'
      ],
      solutions: [
        'Quadro de comando de emergência',
        'Iluminação de escape',
        'Infraestrutura para tecnologia'
      ],
      results: [
        'Segurança educacional',
        'Ambiente de aprendizagem',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/m1_marista.png',
          alt: 'Instituição Marista',
          caption: 'Vista da instituição'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d13-e101-r04-terreo_marista.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 8,
        area: 500,
        duration: '2.5 meses',
        team: 2
      }
    },

    'rodrigo-empresa': {
      id: 'rodrigo-empresa',
      title: 'Rodrigo Empresa',
      subtitle: 'Projeto Elétrico e Hidrossanitário',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'RODRIGO EMPRESA',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto completo para empresa',
      details: {
        area: '400 m²',
        pavimentos: 2,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004', 'NBR 8160:1999']
      },
      challenges: [
        'Sistema elétrico industrial',
        'Instalações hidrossanitárias',
        'Climatização central'
      ],
      solutions: [
        'Quadro elétrico industrial',
        'Sistema hidrossanitário completo',
        'Infraestrutura para climatização'
      ],
      results: [
        'Eficiência operacional',
        'Conforto térmico',
        'Sustentabilidade'
      ],
      images: [
        {
          src: '/assets/imagens/rodrigo-empresa_rodrigo-empresa.png',
          alt: 'Empresa Rodrigo',
          caption: 'Vista da empresa'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d08-wolf-e301-r02-2pavimento_rodrigo-empresa.pdf',
          type: 'pdf'
        },
        {
          name: 'Projeto Hidrossanitário',
          url: '/assets/pdfs/fc-d08-wolf-e401-r02-4pavimento_rodrigo-empresa.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 8,
        area: 400,
        duration: '3 meses',
        team: 2
      }
    },

    'zotti': {
      id: 'zotti',
      title: 'Zotti',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'ZOTTI',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para loja comercial',
      details: {
        area: '120 m²',
        pavimentos: 1,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Iluminação comercial',
        'Sistema de climatização',
        'Layout otimizado'
      ],
      solutions: [
        'Iluminação LED eficiente',
        'Infraestrutura para ar condicionado',
        'Distribuição de pontos'
      ],
      results: [
        'Ambiente comercial atrativo',
        'Conforto térmico',
        'Eficiência energética'
      ],
      images: [
        {
          src: '/assets/imagens/render-loja-dz.pdf',
          alt: 'Loja Zotti',
          caption: 'Vista da loja'
        }
      ],
      documents: [
        {
          name: 'Projeto Elétrico',
          url: '/assets/pdfs/fc-d13-e101-r04-terreo_zotti.pdf',
          type: 'pdf'
        }
      ],
      metrics: {
        complexity: 4,
        area: 120,
        duration: '1 mês',
        team: 1
      }
    }
  },

  // Métricas gerais
  metrics: {
    totalProjects: 10,
    totalArea: 3650,
    averageComplexity: 6.2,
    totalDuration: '18 meses',
    categories: {
      predial: 7,
      residencial: 2,
      comercial: 1
    },
    services: {
      eletrico: 10,
      hidrossanitario: 2,
      comunicacao: 0,
      consultoria: 0
    }
  },

  // Clientes
  clients: [
    'BARÃO DE UBA',
    'CASA SITIO',
    'DOM PEDRITO',
    'SICREDI',
    'LOJA JOAO WALLIG',
    'LOJA AVENIDA DO FORTE',
    'LOJAS REMIÃO',
    'MARISTA',
    'RODRIGO EMPRESA',
    'ZOTTI'
  ],

  // Tecnologias utilizadas
  technologies: [
    'Revit',
    'AutoCAD',
    'NBR 5410:2004',
    'NBR 14039:2005',
    'NBR 13570:1996',
    'NBR 8160:1999',
    'NBR 13534:1995'
  ]
}; 