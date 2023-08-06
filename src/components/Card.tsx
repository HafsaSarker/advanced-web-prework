import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'
import { RiInformationFill } from 'react-icons/ri'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { creatorType } from '../utils/interfaces/creatorInterface'

function Card({id, name, imgUrl, description, ytLink, twLink, igLink}: creatorType) {
    return (
        <div className="relative bg-black shadow-sm text-center w-96 h-72 rounded-md ease-in duration-300 hover:scale-105 overflow-hidden" >
            <img src={imgUrl} className='w-full h-full object-cover opacity-50' />
            <section className='absolute bottom-0 w-full flex flex-col justify-between items-start py-1 px-2'>
                <div className='flex justify-between items-start w-full'>
                    <h3 className='text-white font-semibold'>{name}</h3>
                    <div className='flex gap-1'>
                        <Link to={`/edit/${id}`}>
                            <div className='text-xl'>
                                <MdEdit color='white'/>
                            </div>
                        </Link>

                        <Link to={`/creators/${id}`}>
                            <div className='text-xl'>
                                <RiInformationFill color='white'/>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='flex gap-1 pb-1'>
                    {twLink && <a href={twLink} target='_blank' className='text-xl'>
                        <BsTwitter color='#00acee' />
                    </a>}

                    {igLink && <a href={igLink} target='_blank' className='text-xl'>
                        <AiFillInstagram color='white' />
                    </a>}

                    {ytLink && <a href={ytLink} target='_blank' className='text-xl'>
                    <BsYoutube color='#c4302b' />
                    </a>}
                </div>

                <div className='text-start text-xs w-full text-white py-1'>
                    <p>{description}</p>
                </div>
            </section>
            
        </div>
    )
}

export default Card
