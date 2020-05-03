const mongoose = required('mongoose')

const teamMemberSchema = new mongoose.Schema({
    name: { type: String }
})