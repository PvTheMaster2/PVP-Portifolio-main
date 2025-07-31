const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
<<<<<<< Updated upstream
  graph: (data) => getGraph(data),
  filetree: (data) => getFileTree(data),
  userComputed: (data) => userComputed(data)
=======
  // Collection de projetos dinâmica
  projects: () => {
    return Object.values(projects.projects).map(project => ({
      ...project,
      url: `/projetos/${project.id}`,
      permalink: `/projetos/${project.id}/`,
      date: new Date(project.year, 0, 1), // Data baseada no ano
      tags: [
        project.category,
        project.subcategory,
        project.client,
        // Garantir que ferramentas e normas existam
        ...(project.details && project.details.ferramentas ? project.details.ferramentas : []),
        ...(project.details && project.details.normas ? project.details.normas : [])
      ]
    }));
  },

  // Projetos por categoria
  projectsByCategory: () => {
    const allProjects = Object.values(projects.projects);
    const categories = {};
    
    allProjects.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = [];
      }
      categories[project.category].push(project);
    });
    
    return categories;
  },

  // Projetos por serviço
  projectsByService: () => {
    const allProjects = Object.values(projects.projects);
    const services = {};
    
    allProjects.forEach(project => {
      if (!services[project.subcategory]) {
        services[project.subcategory] = [];
      }
      services[project.subcategory].push(project);
    });
    
    return services;
  },

  // Projetos por ano
  projectsByYear: () => {
    const allProjects = Object.values(projects.projects);
    const years = {};
    
    allProjects.forEach(project => {
      if (!years[project.year]) {
        years[project.year] = [];
      }
      years[project.year].push(project);
    });
    
    return years;
  },

  // Métricas calculadas
  calculatedMetrics: () => {
    const allProjects = Object.values(projects.projects);
    
    return {
      totalProjects: allProjects.length,
      totalArea: allProjects.reduce((sum, project) => {
        // Garantir que area seja um número
        const area = typeof project.metrics.area === 'number' ? project.metrics.area : 0;
        return sum + area;
      }, 0),
      averageComplexity: allProjects.reduce((sum, project) => {
        // Garantir que complexity seja um número
        const complexity = typeof project.metrics.complexity === 'number' ? project.metrics.complexity : 0;
        return sum + complexity;
      }, 0) / allProjects.length,
      totalDuration: allProjects.reduce((sum, project) => {
        // Garantir que duration seja uma string válida
        const duration = project.metrics.duration ? project.metrics.duration.split(' ')[0] : '0';
        return sum + parseInt(duration) || 0;
      }, 0),
      categories: allProjects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      }, {}),
      services: allProjects.reduce((acc, project) => {
        acc[project.subcategory] = (acc[project.subcategory] || 0) + 1;
        return acc;
      }, {})
    };
  },

  // Projetos em destaque (complexidade > 7)
  featuredProjects: () => {
    return Object.values(projects.projects)
      .filter(project => project.metrics.complexity >= 7)
      .sort((a, b) => b.metrics.complexity - a.metrics.complexity)
      .slice(0, 6);
  },

  // Projetos recentes (últimos 3 anos)
  recentProjects: () => {
    const currentYear = new Date().getFullYear();
    return Object.values(projects.projects)
      .filter(project => project.year >= currentYear - 2)
      .sort((a, b) => b.year - a.year)
      .slice(0, 6);
  },

  // Clientes únicos
  uniqueClients: () => {
    const allProjects = Object.values(projects.projects);
    return [...new Set(allProjects.map(project => project.client))];
  },

  // Tecnologias utilizadas
  technologiesUsed: () => {
    const allProjects = Object.values(projects.projects);
    const technologies = new Set();
    
    allProjects.forEach(project => {
      // Garantir que ferramentas e normas existam
      if (project.details && project.details.ferramentas && Array.isArray(project.details.ferramentas)) {
        project.details.ferramentas.forEach(tool => technologies.add(tool));
      }
      if (project.details && project.details.normas && Array.isArray(project.details.normas)) {
        project.details.normas.forEach(norm => technologies.add(norm));
      }
    });
    
    return Array.from(technologies);
  },

  // Estatísticas por categoria
  categoryStats: () => {
    const allProjects = Object.values(projects.projects);
    const stats = {};
    
    allProjects.forEach(project => {
      if (!stats[project.category]) {
        stats[project.category] = {
          count: 0,
          totalArea: 0,
          averageComplexity: 0,
          projects: []
        };
      }
      
      stats[project.category].count++;
      // Garantir que area seja um número
      const area = typeof project.metrics.area === 'number' ? project.metrics.area : 0;
      stats[project.category].totalArea += area;
      stats[project.category].projects.push(project);
    });
    
    // Calcular média de complexidade
    Object.keys(stats).forEach(category => {
      const totalComplexity = stats[category].projects.reduce((sum, project) => {
        const complexity = typeof project.metrics.complexity === 'number' ? project.metrics.complexity : 0;
        return sum + complexity;
      }, 0);
      stats[category].averageComplexity = totalComplexity / stats[category].count;
    });
    
    return stats;
  },

  // Estatísticas por serviço
  serviceStats: () => {
    const allProjects = Object.values(projects.projects);
    const stats = {};
    
    allProjects.forEach(project => {
      if (!stats[project.subcategory]) {
        stats[project.subcategory] = {
          count: 0,
          totalArea: 0,
          averageComplexity: 0,
          projects: []
        };
      }
      
      stats[project.subcategory].count++;
      // Garantir que area seja um número
      const area = typeof project.metrics.area === 'number' ? project.metrics.area : 0;
      stats[project.subcategory].totalArea += area;
      stats[project.subcategory].projects.push(project);
    });
    
    // Calcular média de complexidade
    Object.keys(stats).forEach(service => {
      const totalComplexity = stats[service].projects.reduce((sum, project) => {
        const complexity = typeof project.metrics.complexity === 'number' ? project.metrics.complexity : 0;
        return sum + complexity;
      }, 0);
      stats[service].averageComplexity = totalComplexity / stats[service].count;
    });
    
    return stats;
  },

  // Configuração de paginação
  pagination: {
    size: 6, // Projetos por página
    alias: 'projects'
  },

  // Filtros disponíveis
  availableFilters: () => {
    const allProjects = Object.values(projects.projects);
    
    return {
      categories: [...new Set(allProjects.map(project => project.category))],
      services: [...new Set(allProjects.map(project => project.subcategory))],
      years: [...new Set(allProjects.map(project => project.year))].sort((a, b) => b - a),
      clients: [...new Set(allProjects.map(project => project.client))]
    };
  }
>>>>>>> Stashed changes
};
