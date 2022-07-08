const {db} = require("../database")

exports.createMessage = async(req, res , next) => {
    const {convoId, sender, text} = req.body

    const SqlInsert = "INSERT INTO messageTable(conversationId, sender, message_text)VALUES($1, $2, $3)";
    try {
        const response = await db.query(SqlInsert, [convoId, sender, text])
        res.json({status: "success", response: "successfully Inserted"})
        
    } catch (error) {
     next(error)   
    }
}

// GET MESSAGES
exports.getMessage = async(req, res, next) => {
    const { convoId } = req.params

    try {
        const SqlSelect = "SELECT * FROM messageTable WHERE conversationId = $1"
        const response = await db.query(SqlSelect, [convoId])
        
        res.json({status : "success", result : response.rows})
      } catch (error) {
        return next(error)
      }

}