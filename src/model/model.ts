import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

NoteSchema.set('timestamps', true)

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  days: [
    {
      monthYear: {
        type: [String, String],
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      notes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'notes',
        },
      ],
    },
  ],
})

const Note = mongoose.models?.notes || mongoose.model('notes', NoteSchema)
const User = mongoose.models?.users || mongoose.model('users', UserSchema)

export { Note, User }
