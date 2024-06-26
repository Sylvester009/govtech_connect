import axios from 'axios';

const userService = {
  getUser: async () => {
    try {
      const res = await axios.get('/api/users');
      return res.data;
    } catch (error) {
      throw new Error('Fetch user error');
    }
  },
  updateUserProfile: async (skills) => {
    try {
      const res = await axios.put('/api/users/profile', { skills });
      return res.data;
    } catch (error) {
      throw new Error('Update user profile error');
    }
  },
};

export default userService;
