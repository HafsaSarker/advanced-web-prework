import { z, ZodType } from "zod"
import { creatorType } from "./interfaces/creatorInterface";

export const createSchema:ZodType<creatorType> = z.object({
    name: z.string().min(2, {message: 'Please enter a name'}).max(30),
    imgUrl: z.string().url({message: 'Please provide a valid link'}),
    description: z.string().min(2, {message: 'Description required'}),
    ytLink: z.union([z.string().url().nullish(), z.literal("")]),
    twLink: z.union([z.string().url().nullish(), z.literal("")]),
    igLink: z.union([z.string().url().nullish(), z.literal("")]),
})
.refine((data) => data.ytLink || data.igLink || data.twLink , {
    message: 'Provide at least one social media link',
    path: ["ytLink", "igLink", "twLink"]
})


