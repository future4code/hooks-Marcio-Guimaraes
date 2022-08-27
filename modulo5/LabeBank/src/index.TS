import express, {Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/create-user", (req, res) => {

 let accountName = req.body.name
 let accountCpf = req.body.cpf
 let accountBirthDate = req.body.birthDate

 let currentYear = new Date().getFullYear()
 let customerYear = accountBirthDate.split("/")[2]
 let customerAge = currentYear - customerYear

 const index = customers.findIndex((inCustomers) => {
if (inCustomers.cpf === accountCpf) {
    return true
}
else {return false}
 }
 )
if (index === -1 && customerAge >=18) {
let newCostumer = {
    name: accountName,
    cpf: accountCpf,
    birthDate: accountBirthDate,
    balance: 0,
    extract: []
}
customers.push(newCostumer)
res.send(customers)
}
else {
    res.send("Você não pode se cadastrar!")
}
}

)