import express from 'express'

const router = express.Router()

router.get('/api/info', (req, res) => {
    res.json({
        "email": "tapereyetunde@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/MOH2056/Public_API.git"
    })
})

export default router