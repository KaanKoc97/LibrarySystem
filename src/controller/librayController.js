
// import libraryService from '../service/libraryService.js';

const listBooks = async (req, res) => {
    try {
        // const result = await libraryService.getAllBooks();
        res.status(200).json({ success: true, data: "result" });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
};

export default { listBooks };
