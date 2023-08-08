import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler } from "react-hook-form"
import { editSchema } from "../utils/editForm"
import { creatorType } from "../utils/interfaces/creatorInterface"
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { useNavigate, useParams } from "react-router-dom"
import { supabase } from "../Client"

function EditCreator() {
  const navigate = useNavigate()
  
  let {id} = useParams();

  const { register, handleSubmit, formState:{ errors, isSubmitting} } = useForm<creatorType>({resolver: zodResolver(editSchema), 
    defaultValues: async () => {
      const {data} = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .maybeSingle()
      
      return {
        name: data.name,
        imgUrl: data.imgUrl,
        description: data.description,
        twLink: data.twLink ? data.twLink : null,
        ytLink: data.ytLink ? data.ytLink : null,
        igLink: data.igLink ? data.igLink : null,
        id: data.id
      }
  }})

  const editCreator: SubmitHandler<creatorType> = async(data) => 
  { 
    await supabase
      .from('creators')
      .update({
          name: data.name,
          description: data.description,
          imgUrl: data.imgUrl,
          ytLink: data.ytLink,
          twLink: data.twLink,
          igLink: data.igLink
      })
      .eq('id', id)
    
    .then(() => 
      navigate('/')
    ) 
  }

  const deletePost = async () => {
    await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    alert('Post Deleted')
    navigate('/')
  }

  return (
    <div className="flex flex-col place-items-center w-full bg-gradient-to-b from-indigo-300 to-red-400 py-10 text-white font-medium">

      <h1 className="text-2xl font-semibold mb-5">Edit a Creator🚀</h1>

      <form className="flex flex-col gap-6 w-max mb-9 place-items-start" onSubmit={handleSubmit(editCreator)}>
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
          <span className="sub_label">The creator's YouTube Link</span>
            <input 
              type="text"
              {...register("ytLink")}
              disabled={isSubmitting}
            />
          </label>

          <label>
          <span className="icon"><BsTwitter/>Twitter</span>  
          <span className="sub_label">The creator's Twitter Link</span>
            <input 
              type="text"
              {...register("twLink")}
              disabled={isSubmitting}
            />
          </label>

          <label>
          <span className="icon"><BsInstagram/>Instagram</span>  
          <span className="sub_label">The creator's Instagram Link</span>
            <input 
              type="text"
              {...register("igLink")}
              disabled={isSubmitting}
            />
          </label>
        <div className="flex flex-row gap-6 w-full">
          <button 
            className="bg-indigo-500 py-2 w-full rounded-md" 
            type="submit" 
            disabled={isSubmitting}>
              Edit
          </button>

          <button 
            className="bg-indigo-500 py-2 w-full rounded-md" 
            type="button"
            onClick={deletePost} 
            disabled={isSubmitting}>
              Delete
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default EditCreator
