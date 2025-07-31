require('dotenv').config();
const { globSync } = require('glob');

const siteName = 'PVP Projects';
const siteDescription = 'Soluções integradas que unem técnica, segurança e design. Projetos elétricos, hidrossanitários e consultoria BIM em Porto Alegre.';
const siteUrl = 'https://pvp-projects.com.br';
const siteImage = '/assets/images/og-image.jpg';
const siteLogo = '/assets/images/logo-pvp-projects.png';

module.exports = {
  // Site metadata
  site: {
    name: siteName,
    fullName: 'PVP Projects - Engenharia de Precisão',
    description: siteDescription,
    url: siteUrl,
    image: siteImage,
    logo: siteLogo,
    language: 'pt-BR',
    author: 'Eng. Pedro Vitor Pagliarin',
    email: 'pedrovitor.pagliarin@hotmail.com',
    phone: '+55 (54) 99159-0379',
    address: 'Porto Alegre, RS, Brasil'
  },

  // SEO metadata
  seo: {
    title: `${siteName} - Engenharia de Precisão`,
    description: siteDescription,
    keywords: [
      'engenharia elétrica',
      'projetos elétricos',
      'projetos hidrossanitários',
      'consultoria BIM',
      'Revit',
      'AutoCAD',
      'Porto Alegre',
      'engenheiro eletricista',
      'PVP Projects'
    ],
    author: 'Eng. Pedro Vitor Pagliarin',
    robots: 'index, follow',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },

  // Company information
  company: {
    name: 'PVP Projects',
    legalName: 'PVP Projects - Engenharia de Precisão',
    founded: '2016',
    experience: '8 anos',
    engineer: 'Eng. Pedro Vitor Pagliarin',
    education: 'Engenheiro Eletricista - UFRGS',
    specialties: [
      'Projetos Elétricos',
      'Projetos Hidrossanitários',
      'Projetos de Comunicação',
      'Consultoria e Compatibilização BIM'
    ],
    tools: [
      'Revit (Modelagem BIM)',
      'AutoCAD (Detalhamento)',
      'NBR (Normas Técnicas)',
      'CEEE Equatorial',
      'DMAE',
      'SEMAE'
    ]
  },

  // Contact information
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

  // Services metadata
  services: {
    eletrico: {
      title: 'Projetos Elétricos',
      description: 'Instalações de baixa tensão para todos os portes',
      keywords: ['projetos elétricos', 'instalações elétricas', 'quadros de distribuição', 'SPDA']
    },
    hidrossanitario: {
      title: 'Projetos Hidrossanitários',
      description: 'Redes de água fria e quente',
      keywords: ['projetos hidrossanitários', 'redes de água', 'esgoto', 'DMAE']
    },
    comunicacao: {
      title: 'Projetos de Comunicação',
      description: 'Infraestrutura para redes de dados, telefonia e TV',
      keywords: ['cabeamento estruturado', 'redes de dados', 'telefonia', 'TV']
    },
    consultoria: {
      title: 'Consultoria e Compatibilização BIM',
      description: 'Modelagem 3D das instalações em Revit',
      keywords: ['consultoria BIM', 'Revit', 'modelagem 3D', 'compatibilização']
    }
  },

  // Project types metadata
  projectTypes: {
    predial: {
      title: 'Projetos Prediais',
      description: 'Edifícios residenciais e comerciais',
      keywords: ['projetos prediais', 'edifícios', 'residencial', 'comercial']
    },
    residencial: {
      title: 'Projetos Residenciais',
      description: 'Casas e apartamentos',
      keywords: ['projetos residenciais', 'casas', 'apartamentos', 'residencial']
    },
    comercial: {
      title: 'Projetos Comerciais',
      description: 'Lojas e estabelecimentos',
      keywords: ['projetos comerciais', 'lojas', 'estabelecimentos', 'comercial']
    },
    institucional: {
      title: 'Projetos Institucionais',
      description: 'Escolas, hospitais e instituições',
      keywords: ['projetos institucionais', 'escolas', 'hospitais', 'instituições']
    }
  },

  // Schema.org structured data
  schema: {
    organization: {
      '@type': 'Organization',
      name: 'PVP Projects',
      url: siteUrl,
      logo: `${siteUrl}${siteLogo}`,
      description: siteDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Porto Alegre',
        addressRegion: 'RS',
        addressCountry: 'BR'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55 (54) 99159-0379',
        contactType: 'customer service',
        email: 'pedrovitor.pagliarin@hotmail.com'
      },
      founder: {
        '@type': 'Person',
        name: 'Pedro Vitor Pagliarin',
        jobTitle: 'Engenheiro Eletricista',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Universidade Federal do Rio Grande do Sul'
        }
      }
    }
  }
};
