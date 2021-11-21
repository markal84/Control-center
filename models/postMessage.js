import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    temp: Number,
    humidity: Number,
    //name: String,
    //creator: String,
    pressure: Number,
    lightIntensity: Number,
    //tags: [String],
    //selectedFile: String,
    //likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;