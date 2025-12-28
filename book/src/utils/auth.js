import { createAuthClient } from 'better-auth/client';

// Initialize auth client only on the client-side
let authClient = null;

// Function to safely initialize the auth client
const getAuthClient = () => {
  if (typeof window !== 'undefined' && authClient === null) {
    // Client-side: use the current origin
    const baseUrl = window.location.origin;
    authClient = createAuthClient({
      url: baseUrl,
      secret: "3NmSGusfaN5HUGI0EhCA8pV2tyqrYeOL", // In a real app, this might be a public key or handled differently client-side
    });
  }
  return authClient;
};

export const signup = async (email, password, username, skill_level) => {
  try {
    const client = getAuthClient();
    if (!client) {
      throw new Error('Auth client not available during build time');
    }

    const response = await client.signUp.email({
      email,
      password,
      name: username,
    });
    console.log('Signup successful:', response);
    // Store custom fields in localStorage
    if (response.data?.user) {
      localStorage.setItem('user_skill_level', skill_level);
      localStorage.setItem('user_username', username);
    }
    return response.data?.user || response.user;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const client = getAuthClient();
    if (!client) {
      throw new Error('Auth client not available during build time');
    }

    const response = await client.signIn.email({
      email,
      password,
    });
    console.log('Login successful:', response);
    // Merge custom fields from localStorage
    const user = response.data?.user || response.user;
    if (user) {
      user.username = localStorage.getItem('user_username') || user.name || user.email;
      user.skill_level = localStorage.getItem('user_skill_level') || 'beginner';
    }
    return user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const client = getAuthClient();
    if (!client) {
      return null; // Return null during build time
    }

    const session = await client.getSession();
    if (session?.data?.user) {
      const user = session.data.user;
      // Merge custom fields from localStorage
      user.username = localStorage.getItem('user_username') || user.name || user.email;
      user.skill_level = localStorage.getItem('user_skill_level') || 'beginner';
      console.log('User profile:', user);
      return user;
    }
    return null;
  } catch (error) {
    console.error('Failed to get user profile:', error);
    return null;
  }
};

export const updateProfile = async (updates) => {
  try {
    const client = getAuthClient();
    if (!client) {
      throw new Error('Auth client not available during build time');
    }

    // Update custom fields in localStorage
    if (updates.username) {
      localStorage.setItem('user_username', updates.username);
    }
    if (updates.skill_level) {
      localStorage.setItem('user_skill_level', updates.skill_level);
    }
    if (updates.preferred_language) {
      localStorage.setItem('user_preferred_language', updates.preferred_language);
    }

    // Update BetterAuth user if name is being updated
    if (updates.username) {
      try {
        await client.user.update({ name: updates.username });
      } catch (err) {
        console.warn('Could not update user name in BetterAuth:', err);
      }
    }

    // Get updated session
    const session = await client.getSession();
    const user = session?.data?.user;
    if (user) {
      user.username = localStorage.getItem('user_username') || user.name || user.email;
      user.skill_level = localStorage.getItem('user_skill_level') || 'beginner';
      user.preferred_language = localStorage.getItem('user_preferred_language') || 'en';
    }
    console.log('Profile update successful:', user);
    return user;
  } catch (error) {
    console.error('Profile update failed:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const client = getAuthClient();
    if (!client) {
      console.log('Logout successful (no auth client during build time)');
      return;
    }

    await client.signOut();
    // Clear custom fields from localStorage
    localStorage.removeItem('user_username');
    localStorage.removeItem('user_skill_level');
    localStorage.removeItem('user_preferred_language');
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

// Placeholder for database interaction for custom profile fields beyond BetterAuth's user_metadata
// This would typically be a serverless function interacting directly with Neon Postgres
export const updateCustomUserProfile = async (userId, updates) => {
  console.warn('Custom user profile updates require a server-side component (e.g., serverless function) to interact with Neon Postgres directly.');
  // Example: fetch('/api/updateUserProfile', { method: 'POST', body: JSON.stringify({ userId, updates }) });
  return Promise.resolve(null);
};
