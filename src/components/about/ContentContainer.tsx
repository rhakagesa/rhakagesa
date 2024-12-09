function ContentContainer({title, children} : {title:string, children: React.ReactNode}){
    return(
        <div className="mx-auto max-w-xl my-5">
        <h1 className="text-left text-3xl text-gray-500 font-extrabold sm:text-5xl mb-4">
          {title}
        </h1>

    {children}
      </div>
    )
}

export default ContentContainer