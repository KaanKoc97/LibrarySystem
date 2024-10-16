import { getAllBooks, getBook, createBook } from '../service/bookService.js';

const listBooks = async (req, res) => {
    try {
        const result = await getAllBooks();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
};

const getABook = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = parseInt(id);      
        const result = await getBook(userId);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
};

const createNewBook = async (req, res) => {
    try {
        const { name, copy } = req.body;
        const result = await createBook({ name, copy });
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
}

export default { listBooks, getABook, createNewBook };
