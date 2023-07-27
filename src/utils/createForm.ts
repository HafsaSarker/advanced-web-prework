import { z, ZodType } from "zod"
import { SubmitHandler } from "react-hook-form"
import { supabase } from "../Client";

export type FormData = {
    name: string;
    imgUrl: string;
    description: string;
    ytLink?: string | null | undefined;
    twLink?: string | null | undefined;
    igLink?: string | null | undefined;
}

export const createSchema:ZodType<FormData> = z.object({
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

export const submitNewCreator: SubmitHandler<FormData> = async(data) => {
    await supabase
        .from('creators')
        .insert({
            name: data.name,
            description: data.description,
            imageURL: data.imgUrl,
            ytLink: data.ytLink,
            twLink: data.twLink,
            instaLink: data.igLink
        })
        .select()
}
