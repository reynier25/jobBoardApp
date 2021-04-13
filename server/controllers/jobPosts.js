import JobPost from '../models/jobPost.js';

export const getJobPosts = async (req, res) => {
    try {
        const jobPosts = await JobPost.find();
        res.status(200).json(jobPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createJobPost = async (req, res) => {
    const jobPost = req.body;
    const newJobPost = new JobPost(jobPost);

    try {
        await newJobPost.save();
        res.status(201).json(newJobPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
    
};

