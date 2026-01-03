const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true, // armazena a data de criação de cada registro e alteração;
});

module.exports = mongoose.model('Post', PostSchema);
