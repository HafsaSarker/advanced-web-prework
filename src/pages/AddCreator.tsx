import { z, ZodType } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

type FormData = {
  name: string;
  imgUrl: string;
  description: string;
  ytLink?: string;
  twLink?: string;
  igLink?: string;
}

function AddCreator() {
  const schema:ZodType<FormData> = z.object({
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

  const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({resolver: zodResolver(schema)})

  const submitData = (data: FormData) => {
    console.log(data);  
  }

  return (
    <div className="flex flex-col place-items-center w-full bg-gradient-to-b from-indigo-300 to-red-400 py-10 text-white font-medium">

      <h1 className="text-2xl font-semibold mb-5">Add a Creator🚀</h1>

      <form className="flex flex-col gap-6 w-max mb-9 place-items-start" onSubmit={handleSubmit(submitData)}>
        <label>
        Name:
          <input 
            type="text" 
            {...register("name")}
          />  
        </label>
        {errors.name && <span className="error_msg">{errors.name.message}</span>}

        <label>
        Image:
        <span className="sub_label">Provide a link to an image of your creator. Be sure to include the http://</span>
          <input 
            type="text" 
            required
            {...register("imgUrl")}
          />
        </label>
        {errors.imgUrl && <span className="error_msg">{errors.imgUrl.message}</span>}

        <label>
        Description:
        <span className="sub_label">Provide a description of the creator.What makes them interesting?</span>
          <input 
            type="text" 
            required
            {...register("description")}
          />
        </label>
        {errors.description && <span className="error_msg">{errors.description.message}</span>}

        <div className="flex flex-col text-start">
          <h2 className="text-xl text-indigo-500 font-semibold">SOCIAL MEDIA LINKS</h2>
          <span className="sub_label">Provide at least one of the creator's social media links.</span>
          {(errors.ytLink || errors.igLink || errors.twLink) && 
            <span className="error_msg">
              No social media link provided
            </span>}
        </div>
        
        <label>
          <span className="icon"><BsYoutube/>YouTube</span>  
          <span className="sub_label">The creator's YouTube handle (without the @)</span>
            <input 
              type="text"
              {...register("ytLink")}
            />
          </label>

          <label>
          <span className="icon"><BsTwitter/>Twitter</span>  
          <span className="sub_label">The creator's Twitter handle (without the @)</span>
            <input 
              type="text"
              {...register("twLink")}
            />
          </label>

          <label>
          <span className="icon"><BsInstagram/>Instagram</span>  
          <span className="sub_label">The creator's Instagram handle (without the @)</span>
            <input 
              type="text"
              {...register("igLink")}
            />
          </label>

        <button className="bg-indigo-500 py-2 w-full rounded-md" type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddCreator
