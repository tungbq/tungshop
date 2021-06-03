import express from 'express'
import multer from 'multer'
import path from 'path'
import sharp from 'sharp'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
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


// const upload = multer({
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       return cb(new Error('Please upload an image (ext: jpg, jpeg or png)!'))
//     }

//     cb(undefined, true)
//   }
// })

// router.post('/', upload.single('image'), async (req, res) => {
//   console.log('Testing...')
//   console.log('req.file')
//   console.log(req.file)

//   const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
//   // req.product.image = buffer
//   console.log('buffer...')
//   console.log(buffer)

//   res.json({ buffer })
// })

router.post('/', upload.single('image'), (req, res) => {
  console.log(req)
  res.send(`/${req.file.path}`)
})

export default router