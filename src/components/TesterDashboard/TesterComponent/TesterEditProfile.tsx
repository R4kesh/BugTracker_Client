import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import TesterNavbar from '../../../components/TesterNavbar';
import TesterProfileCard from './TesterProfileSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface UserData {
  name: string
  email: string
  phoneNumber: string
  role: string
}
function EditTesterProfile() {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    phoneNumber: '',
    role: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const Id = user?.id

    if (Id) {
      // Fetch user data from backend
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/userprofile/${Id}`);
          const { name, email, phoneNumber, role } = response.data;
          setUserData({ name, email, phoneNumber, role });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    } else {
      console.error('No userId found in localStorage');
    }
  }, []);

  // Update user data locally when user types in the input fields
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userId = user?.id

    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/tester/updatetesterprofile/${userId}`, userData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TesterNavbar />
      <div className="flex flex-col md:flex-row h-screen bg-gray-600">
        <TesterProfileCard />

        <main className="flex-1 p-6 md:p-8">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="block md:w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  readOnly
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Phone</label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Designation</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="role"
                  value={userData.role}
                  readOnly
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:ring focus:ring-opacity-50"
              >
                {isSubmitting ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default EditTesterProfile;
