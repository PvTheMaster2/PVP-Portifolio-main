// Computações do Eleventy para sistema dinâmico
const projects = require('./projects.js');

module.exports = {
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
        ...project.details.ferramentas,
        ...project.details.normas
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
      totalArea: allProjects.reduce((sum, project) => sum + project.metrics.area, 0),
      averageComplexity: allProjects.reduce((sum, project) => sum + project.metrics.complexity, 0) / allProjects.length,
      totalDuration: allProjects.reduce((sum, project) => {
        const duration = parseInt(project.metrics.duration.split(' ')[0]);
        return sum + duration;
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
      project.details.ferramentas.forEach(tool => technologies.add(tool));
      project.details.normas.forEach(norm => technologies.add(norm));
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
      stats[project.category].totalArea += project.metrics.area;
      stats[project.category].projects.push(project);
    });
    
    // Calcular média de complexidade
    Object.keys(stats).forEach(category => {
      const totalComplexity = stats[category].projects.reduce((sum, project) => sum + project.metrics.complexity, 0);
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
      stats[project.subcategory].totalArea += project.metrics.area;
      stats[project.subcategory].projects.push(project);
    });
    
    // Calcular média de complexidade
    Object.keys(stats).forEach(service => {
      const totalComplexity = stats[service].projects.reduce((sum, project) => sum + project.metrics.complexity, 0);
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
    return {
      categories: Object.keys(projects.projects.reduce((acc, project) => {
        acc[project.category] = true;
        return acc;
      }, {})),
      services: Object.keys(projects.projects.reduce((acc, project) => {
        acc[project.subcategory] = true;
        return acc;
      }, {})),
      years: [...new Set(Object.values(projects.projects).map(project => project.year))].sort((a, b) => b - a),
      clients: [...new Set(Object.values(projects.projects).map(project => project.client))]
    };
  }
};
