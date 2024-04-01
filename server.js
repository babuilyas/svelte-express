import express from "express"
import { handler } from "./svelte/build/handler.js"
import { router as api } from "./route/sample-api.js"

const app = express();
const port = 3000;

// Demo route
app.get("/expressroute", (req, res)=>{
    res.send('This is an express route.');
});

// api router
app.use("/api", api);

// this will connect svelte app, front end svelte should be in the last.
app.use(handler);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});