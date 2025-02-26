import React from 'react'

function Card({ username = 'est', post = "not assigned yet" }) {
    // console.log(props)
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2fGVufDB8fDB8fHww" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                        {username}
                    </div>
                    <div>
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
        // <div><img src='https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww' alt=''></img>
        //     <h1 className='text-2xl bg-green-500 p-3 rounded'>a card for photos</h1>
        //     <p>Lorem ipsum dolr sit amt consectutor adispicing</p>
        // </div>
    )
}

export default Card