import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import projectService from '../services/projectService';

const ProjectForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await projectService.createProject(data);
      console.log('Project created:', res);
      // Add redirection or further actions after project creation
      reset();
    } catch (error) {
      console.error('Create project error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Title" {...register('title', { required: true })} />
        <input type="text" placeholder="Description" {...register('description', { required: true })} />
        <input type="text" placeholder="Requirements (comma-separated)" {...register('requirements')} />
        <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Project'}</button>
      </form>
    </div>
  );
};

export default ProjectForm;
