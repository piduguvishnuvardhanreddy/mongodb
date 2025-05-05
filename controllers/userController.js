import User from '../models/User.js';

// GET /users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'boyName girlName');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};

// POST /users
export const createUser = async (req, res) => {
  const { boyName, girlName } = req.body;

  if (!boyName || !girlName) {
    return res.status(400).json({ message: 'boyName and girlName are required' });
  }

  try {
    const newUser = new User({ boyName, girlName });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error: error.message });
  }
};

