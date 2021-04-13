import express from 'express';

import { getJobPosts, createJobPost } from '../controllers/jobPosts.js';

const router = express.Router();

router.get('/', getJobPosts);
router.post('/', createJobPost);

export default router;