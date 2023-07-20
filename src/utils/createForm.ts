import { z, ZodType } from "zod"

export type FormData = {
    name: string;
    imgUrl: string;
    description: string;
    ytLink?: string;
    twLink?: string;
    igLink?: string;
}

export const createSchema:ZodType<FormData> = z.object({
    name: z.string().min(2).max(30),
    imgUrl: z.string(),
    description: z.string(),
    ytLink: z.string().optional(),
    twLink: z.string().optional(),
    igLink: z.string().optional(),
})
.refine((data) => data.ytLink || data.igLink || data.twLink , {
    message: 'Provide at least one social media link',
    path: ["ytLink", "igLink", "twLink"]
})

export const submitNewCreator = (data:FormData) => {
    console.log(data);  
}
