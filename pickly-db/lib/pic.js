module.exports = function setupPic (PicModel) {
  async function getPics () {
    const pics = await PicModel.find()
    console.log(pics)
  }

  return {
    getPics
  }
}
