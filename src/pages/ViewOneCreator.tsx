import { useEffect, useState } from "react"
import { supabase } from "../Client"
import { creatorType } from "../utils/interfaces/creatorInterface"
import { IoMdArrowBack } from "react-icons/io"
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewOneCreator() {
  const [creator, setCreator] = useState<creatorType | null>(null)

  let {id} = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      const {data} = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .maybeSingle()

      setCreator(data)
    }
    fetchAll()
  },[])

  console.log(creator);

  return (
    <div className="flex flex-col items-center">
      <div className="pl-10 w-full flex justify-start items-start ">
        <Link to='/' className="text-xl p-2 rounded-lg bg-red-400 text-white">
          <span >
            <IoMdArrowBack/>
          </span>
        </Link>
      </div>
      {creator && 
        <div className="flex items-center mt-10 px-10">
          <img src={creator.imgUrl} className=" border-indigo-600 border-2 rounded-md w-72 h-96 object-cover" />

          <div className="flex flex-col pl-10 gap-4 justify-center items-center ">
            <h1 className="text-2xl font-extrabold text-indigo-600">{creator.name}</h1>

            <p>{creator.description}</p>
            
            <div className='flex text-2xl gap-3 bg-red-400 py-1.5 px-4 text-slate-50 rounded-xl w-min'>
              {creator.twLink && <a href={creator.twLink} target='_blank'>
                  <BsTwitter />
              </a>}

              {creator.igLink && <a href={creator.igLink} target='_blank'>
                  <AiFillInstagram />
              </a>}

              {creator.ytLink && <a href={creator.ytLink} target='_blank'>
              <BsYoutube />
              </a>}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ViewOneCreator