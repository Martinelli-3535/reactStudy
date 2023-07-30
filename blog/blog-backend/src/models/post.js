import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publisgedDate: {
        type: Date,
        default: Date.now,
    }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;