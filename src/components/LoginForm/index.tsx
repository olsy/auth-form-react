"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import validationSchema from "./validationSchema";

type Inputs = {
    email: string,
    password: string,
};

const  LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        mode: 'onSubmit',
        resolver: zodResolver(validationSchema), // Apply the zodResolver
    });
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card  className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="text" placeholder="m@example.com"  {...register("email")} />
                        {errors.email ? <span className="text-red-700 text-xs lowercase">{errors.email.message}</span> : null}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password"  {...register("password")} />
                        {errors.password ? <span className="text-red-700 text-xs lowercase">{errors.password.message}</span> : null}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Sign in</Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default LoginForm;
