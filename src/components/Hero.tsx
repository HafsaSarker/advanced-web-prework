function Hero() {
  return (
    <div className="flex flex-row justify-center text-left bg-gradient-to-b from-indigo-300 to-red-400 py-20 items-center text-white gap-10 px-10 text-md">
        <div className="flex flex-col max-w-lg">
            <h3>Welcome to</h3>
            <h1 className="text-4xl font-extrabold text-indigo-600">Creatorverse</h1>
            <p>
                A person's top content creators can say a lot about them. Do they prefer lockpicking videos, casual art streams, or hustle-culture TikTokers? Explore all creators others have added bellow or...create your own!
            </p>
        </div>
        <img width={200} src='./planet.png' />
    </div>
  )
}

export default Hero