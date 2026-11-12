const asynceHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler()).catch((error) => {
            next(error)
        })
    }
}

export {asynceHandler}
    
    
           
    
// const asyncHandler = (func) => { () => {}}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//             await fn(req,res,next);
//     } catch(error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }