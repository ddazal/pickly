// Todo: Handle err
module.exports = function setupPic (UserModel) {
  async function getUsers () {
    const users = await UserModel.find()
    return users
  }

  async function getUserByEmail (email) {
    const user = await UserModel.findOne({ email })
    return user
  }

  async function getProjectsByUser (id) {
    const projects = await UserModel.findById(id).populate('projects')
    return projects
  }

  return {
    getUsers,
    getUserByEmail,
    getProjectsByUser
  }
}
