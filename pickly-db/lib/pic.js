module.exports = function setupPic (PicModel) {
  async function getPics () {
    const pics = await PicModel.find()
    return pics
  }

  return {
    getPics
  }
}
