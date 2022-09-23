import app from "./app";
import getAllUsers from "./endpoints/getAllUsers"




app.get("/table", getAllUsers)