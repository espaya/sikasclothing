const AccountDetails = async () => {
    try {
        const apiBase = import.meta.env.API_BASE_URL || 'http://localhost:8000';

        const response = await fetch(`${apiBase}/api/get-account-details`);
    } catch (err) {}
};

export default AccountDetails;
