import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await userService.getUser();
        setUser(res);
        setSkills(res.skills.join(', '));
      } catch (error) {
        console.error('Fetch user error:', error);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userService.updateUserProfile(skills.split(', '));
      setUser(res);
    } catch (error) {
      console.error('Update user profile error:', error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
            <button type="submit">Update Skills</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
