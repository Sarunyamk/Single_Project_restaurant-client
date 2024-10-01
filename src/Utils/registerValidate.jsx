import Joi from "joi"


const registerAuthen = Joi.object({

    firstname : Joi.string()
                .required()
                .messages({
                     "string.empty" : "please enter your 'Firstname'"
                }),
    lastname : Joi.string()
                .required()
                .messages({
                    "string.empty" : "please enter your 'Lastname'"
                }),
    phonenumber : Joi.string()
                .required()
                .pattern(/^[0-9]{10}$/)
                .messages({
                    "string.empty" : "please enter your 'Phone number'",
                    "string.pattern.base" : "Phone number must be 10 numbers"
                }),
    address : Joi.string()
                .required()
                .messages({
                    "string.empty" : "please enter your 'Address'"
                }),
    
    email: Joi.string()
                .email({tlds : false})  
                .required()
                .messages({
                    "string.empty": "please enter your 'Email'",
                    "string.email": "Email should contain '@'"
                 }),
        
    password: Joi.string()
                .pattern((/^[a-zA-Z0-9]{6,}$/))
                .required()
                .messages({
                    "string.empty": "please enter your 'Password'",
                    "string.pattern.base": "Password must contain a-z,A-Z,0-9 and 6+ characters"
                }),
    confirmPassword: Joi.string()
                .required()
                .valid(Joi.ref("password"))
                .messages({
                    "string.empty": "please enter your 'Password'",
                    "any.only": "Password does not match",
                }),
              
                
})

const validateRegister = (input)=>{

    const {error} = registerAuthen.validate(input,{
        abortEarly: false
    })
   
   
    if(error){
        const formatError = error.details.reduce((prev,cur)=>{
            

            prev[cur.path[0]] = cur.message
            return prev
        },{})

        return formatError
    }  
}

export default validateRegister