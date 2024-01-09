const notfound =(req,res)=>{
    res.status(404).send('route doesnt exists')
}
module.exports = notfound