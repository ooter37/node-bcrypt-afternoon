module.exports = {
    dragonTreasure: async (req,res) => {
        db = req.app.get('db')
        result = await db.get_dragon_treasure(1)
        res.status(200).send(result)
    }
}