const {db} = require("../database")

// Create 
exports.createConversation = async(req, res, next) => {
    const {vendorid, customerMail} = req.body

    const SqlCreate = "INSERT INTO conversationTable(vendorId, customerMail)VALUES($1, $2)"
    try {
        const newConvo = await db.query(SqlCreate, [vendorid, customerMail])
        res.json(newConvo.rows)  
    } catch (error) {
        next(error)
    }

}

// Get convo
exports.getConvo = async(req, res, next) => {
    const {vendorid, customerMail} = req.body

    try {
      const SqlSelect = "SELECT * FROM conversationTable WHERE vendorId = $1 or customerMail = $2"
      const response = await db.query(SqlSelect, [vendorid, customerMail])
      
      res.json({status : "success", result : response.rows})
    } catch (error) {
      return next(error)
    }
}