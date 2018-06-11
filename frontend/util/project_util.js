export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {
      project
    }
  })
}

export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: {
      projects
    }
  })
}

export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`,
    data: {
      project
    }
  })
}
