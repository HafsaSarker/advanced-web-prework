import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormData, createSchema, submitNewCreator } from "../utils/createForm"
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function AddCreator() {
  const win: Window = window;

  const { register, handleSubmit, formState:{ errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({resolver: zodResolver(createSchema)})

  if(isSubmitSuccessful){
    win.location = "/";
  }

  return (
    <div className="flex flex-col place-items-center w-full bg-gradient-to-b from-indigo-300 to-red-400 py-10 text-white font-medium">

      <h1 className="text-2xl font-semibold mb-5">Add a Creator🚀</h1>

      <form className="flex flex-col gap-6 w-max mb-9 place-items-start" onSubmit={handleSubmit(submitNewCreator)}>
        <label>
        Name:
          <input 
            type="text" 
            {...register("name")}
            disabled={isSubmitting}
          />  
          {errors.name && <span className="error_msg">{errors.name.message}</span>}
        </label>

        <label>
        Image:
        <span className="sub_label">Provide a link to an image of your creator. Be sure to include the http://</span>
          <input 
            type="text" 
            {...register("imgUrl")}
            disabled={isSubmitting}
          />
          {errors.imgUrl && <span className="error_msg">{errors.imgUrl.message}</span>}
        </label>
        

        <label>
        Description:
        <span className="sub_label">Provide a description of the creator.What makes them interesting?</span>
          <input 
            type="text" 
            {...register("description")}
            disabled={isSubmitting}
          />
          {errors.description && <span className="error_msg">{errors.description.message}</span>}
        </label>
        

        <div className="flex flex-col text-start">
          <h2 className="text-xl text-indigo-500 font-semibold">SOCIAL MEDIA LINKS</h2>
          <span className="sub_label">Provide at least one of the creator's social media links.</span>
          {(errors.ytLink || errors.igLink || errors.twLink) && 
            <span className="error_msg">
              Please provide a valid social media link
            </span>}
        </div>
        
        <label>
          <span className="icon"><BsYoutube/>YouTube</span>  
          <span className="sub_label">The creator's YouTube handle (without the @)</span>
            <input 
              type="text"
              {...register("ytLink")}
              disabled={isSubmitting}
            />
          </label>

          <label>
          <span className="icon"><BsTwitter/>Twitter</span>  
          <span className="sub_label">The creator's Twitter handle (without the @)</span>
            <input 
              type="text"
              {...register("twLink")}
              disabled={isSubmitting}
            />
          </label>

          <label>
          <span className="icon"><BsInstagram/>Instagram</span>  
          <span className="sub_label">The creator's Instagram handle (without the @)</span>
            <input 
              type="text"
              {...register("igLink")}
              disabled={isSubmitting}
            />
          </label>

        <button 
          className="bg-indigo-500 py-2 w-full rounded-md" 
          type="submit" 
          disabled={isSubmitting}>
            Create
        </button>
      </form>
    </div>
  )
}

export default AddCreator
