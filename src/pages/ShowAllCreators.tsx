import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import { supabase } from "../Client"
import { creatorType } from "../utils/interfaces/creatorInterface"
import Card from "../components/Card"

function ShowAllCreators() {
  const [creators, setCreators] = useState<creatorType[] | null>(null)

  useEffect(() => {
    const fetchAll = async () => {
      const data= await supabase
        .from('creators')
        .select()
        .order('created_at', { ascending:true })

        setCreators(data.data)
    }
    fetchAll()
  },[])

  console.log(creators);
  
  return (
    <div className="flex flex-col">
        <Hero />
        {creators ? 
        ( 
          <>
            <h1 className="mt-5 text-2xl font-semibold text-indigo-600">All creators</h1>
            <div className='flex flex-row items-center justify-center flex-wrap gap-10 p-10'>

              {
                creators.map((item) =>
                  <Card 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imgUrl={item.imgUrl}
                    description={item.description}
                    ytLink={item.ytLink}
                    twLink={item.twLink}
                    igLink={item.igLink}
                  />            
                  // console.log(item) 
                )
              }
            </div>
          </>
        ):
        (
          <p className="mt-5 text-xl">No creators found. Create one <Link className="text-blue-600" to='/create'>here</Link>!</p>
        )}
    </div>
  )
}

export default ShowAllCreators