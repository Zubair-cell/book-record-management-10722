const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    mame: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    issuedook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: false,
    },
    returnDate: {
        type: String,
        required: false,
    },
    subscriptionType: {
        type: String,
        required: true,
    },
    subscriptionDate: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);
// collection will have a name "User"
module.exports = mongoose.model("User", userSchema);
