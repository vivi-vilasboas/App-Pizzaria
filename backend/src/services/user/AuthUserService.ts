import prismaClient from "../../prisma";
import {compare} from "bcryptjs"

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User incorrect")
        }

        const passwordMatch = await compare(password, user.passaword)

        if(!passwordMatch) {
            throw new Error("Password incorrect")
        }

        return { ok: true}

    }
}

export { AuthUserService }