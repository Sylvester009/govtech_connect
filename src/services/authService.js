import axios from 'axios';

const authService = {
  loginWithGoogle: async () => {
    try {
      const res = await axios.post('/api/auth/google');
      return res.data;
    } catch (error) {
      throw new Error('Google login error');
    }
  },
};

export default authService;
