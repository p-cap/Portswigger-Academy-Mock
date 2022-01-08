module.exports = {
    greeting(req, res) {
        res.json({ Comment: req.query.comment})
    }
}