import axios from 'axios';

const projectService = {
  createProject: async (project) => {
    try {
      const res = await axios.post('/api/projects', project);
      return res.data;
    } catch (error) {
      throw new Error('Create project error');
    }
  },
  getProjects: async () => {
    try {
      const res = await axios.get('/api/projects');
      return res.data;
    } catch (error) {
      throw new Error('Fetch projects error');
    }
  },
};

export default projectService;
