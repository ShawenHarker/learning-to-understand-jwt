module.exports = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorized");
    }
}