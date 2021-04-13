import mongoose from 'mongoose';

const jobPostSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

export default JobPost;