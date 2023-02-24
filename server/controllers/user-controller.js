const { User } = require('../models');

module.exports = {
  async this.createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Unable to create user' });
    }

    res.status(200).json(user);
  },
//   async createVote(req, res) {
//     const vote = await Matchup.findOneAndUpdate(
//       { _id: req.body.id },
//       { $inc: { [`tech${req.body.techNum}_votes`]: 1 } },
//       { new: true }
//     );

//     if (!vote) {
//       return res.status(400).json({ message: 'Unable to vote on matchup' });
//     }

//     res.status(200).json(vote);
//   },
  async getAllUsers(req, res) {
    const allUsers = await User.find({});

    if (!allUsers) {
      return res.status(400).json({ message: 'No users found' });
    }

    res.status(200).json(allUsers);
  },
  async getUsers({ params }, res) {
    const user = await User.findOne({ _id: params.id });

    if (!user) {
      return res.status(400).json({ message: 'No user found by that id' });
    }

    res.status(200).json(user);
  },
};
