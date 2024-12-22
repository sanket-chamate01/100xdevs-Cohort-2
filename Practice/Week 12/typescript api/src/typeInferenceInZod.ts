import z from 'zod';
import express from 'express';

const app = express()

const userSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    age: z.number().min(18, { message: "Age must be at least 18" }).optional()
})

app.put("/user", (req, res) => {
    const { success } = userSchema.safeParse(req.body)
    // const updateBody = req.body // updateBody is of any type
    const updateBody: z.infer<typeof userSchema> = req.body // updateBody is of type User

    if(!success){
        res.status(411).json({})
        return
    }

    res.json({
        message: "User updated successfully",
    })
})