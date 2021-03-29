router.post('/login', (req, res)=> {
let userData = req.body

userData.findOne({email: userData.email}, (error, user) => {
  if(error) {
    console.log(error)
  }else{
    if(!user){
      res.status(401).send("Invalid email")
    }else
    if(user.password !== userData.password){
      res.status(401).send("Invalid password")
    }else{
      res.status(200).send(user)
    }
  }
})
})

