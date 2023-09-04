const Router = require('express')
const router = new Router()
const jobController = require('../controllers/job.controller')

router.post('/job', jobController.createJob)
router.get('/job', jobController.getJobs)
router.get('/job/:id', jobController.getOneJob)
router.put('/job', jobController.updateJob)
router.delete('/job/:id', jobController.deleteJob)

module.exports = router