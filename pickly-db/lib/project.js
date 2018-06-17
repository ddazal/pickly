module.exports = function setupProject (ProjectModel) {
  async function createProject (name, admin, pic) {
    const project = {
      name,
      admin,
      pic,
      xml: '',
      createdAt: new Date()
    }

    const res = await ProjectModel.create(project)
    return res
  }

  return {
    createProject
  }
}
