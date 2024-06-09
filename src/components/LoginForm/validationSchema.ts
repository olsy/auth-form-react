"use client"

import { z } from "zod"

const validationSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, 'password should contain at least 8 symbols')
        .max(64, 'password should contain no more than 64 symbols')
        .refine((value) => /[A-Z]+/.test(value), 'password should contain at least 1 uppercase letter')
        .refine((value) => /\d+/.test(value), 'password should contain at least 1 number'),
})

export default validationSchema;