import { getAllUsers, getUser, createUser } from '../service/userService.js';

const listUsers = async (req, res) => {
    try {
        const result = await getAllUsers();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
};

const createNewUser = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await createUser({ name });
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
}

const getAUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = parseInt(id);      
        const result = await getUser(userId);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
}

export default { listUsers, createNewUser, getAUser };
