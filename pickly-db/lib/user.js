// Todo: Handle err
module.exports = function setupPic (UserModel) {
  async function getUsers () {
    const users = await UserModel.find()
    console.log(users)
  }

  async function getUserByEmail (email) {
    const user = await UserModel.findOne({ email })
  }

  async function getProjectsByUser (id) {
    const projects = await UserModel.findById(id).populate('projects')
  }

  return {
    getUsers,
    getUserByEmail
  }
}
