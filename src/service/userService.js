import User from '../model/User.js'

export const getAllUsers = async ()=> {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.log('Query of getAllUsers has failed!', error.message);
    }
};

export const getUser = async (userId)=> {
    try {
        const user = await User.findOne({where: {id: userId}});
        return user;
    } catch (error) {
        console.log('Query of getUser has failed!', error.message);
    }
}
export const createUser = async (data)=> {
    try {
        const book = await User.create(data);
        return book;
    } catch (error) {
        console.log('Query of createUser has failed!', error.message);
    }
}
