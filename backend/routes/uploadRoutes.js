import express from 'express'
import multer from 'multer'
import path from 'path'
import sharp from 'sharp'

import fs from 'fs'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploads_dir = 'uploads/';
    if (!fs.existsSync(uploads_dir)){
      console.log('uploads folder does not exist, creating ...')
      fs.mkdirSync(uploads_dir);
    }
    cb(null, uploads_dir)
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router