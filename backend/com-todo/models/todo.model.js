import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher';
let Schema = mongoose.Schema;

let schema = new Schema({
    title: { type: String, required: true },
    important: { type: Boolean, required: true },
    addedOn: { type: Number, required: true }
},
    { _id: true },
    { timestamps: false }
);

// If no path is given, all date fields will be applied
schema.plugin(patcher);
export default mongoose.model("todo", schema);