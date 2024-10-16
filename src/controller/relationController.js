import { createUserBook } from "../service/relationService.js";

const borrow = async(req, res)=> {
    try {
        const uid = req.params.uid;
        const bid = req.params.bid;
        const result = await createUserBook(uid, bid);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error producing message', error: error.message });
    }
}

export default { borrow };