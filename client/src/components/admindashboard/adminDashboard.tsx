import React from 'react';

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = React.useState<string[]>([]);

    // Fetch the list of users from the server
    React.useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
    );
};

export default AdminDashboard;