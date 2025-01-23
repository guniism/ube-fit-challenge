import mongoose, { Schema } from "mongoose";

const exerciseSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            // ref: 'User',
            required: true,
            // index: true,
        },
        date: {
            type: Date,
            required: true,
        },
        type:{
            type: String,
            require: true,
            enum: ['step', 'distance', 'calorie'],
        },
        quantity:{
            type: Number,
            require: true,
            min: [0, 'Quantity cannot be negative'],
        },
        imgurl:{
            type: String,
            require: false,
        },
    },
    {timestamps: true}
)

const Exercise = mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);
export default Exercise;