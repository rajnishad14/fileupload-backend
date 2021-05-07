const postData = require('../modal/file.js')

const getList = async (req, res) => {
  try {
    const data = await postData.find()

    res.status(200).json(data)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createList = async (req, res) => {
  const { id, userId, title, body } = req.body
  const newData = new postData({ id, title, userId, body })
  try {
    newData.save()

    res.status(201).json(newData)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

module.exports = { getList, createList }
