// import React from 'react'
// import './test.css'

// export default function Meme() {
//     const [memesImg, setMemeImg] = React.useState({
//         text : '',
//         randomImg : "https://images.theconversation.com/files/57789/original/rxhk48c4-1409532628.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
//     })
//     const [allMemes, setAllMeme] = React.useState([])

//     React.useEffect(() => {
        
//         fetch("https://api.imgflip.com/get_memes")
//             .then(res => res.json())
//             .then(data => setAllMeme(data.data.memes))
//     }, [])

//     function generate(){
//         const random = Math.floor(Math.random() * allMemes.length);
//         let randomQ = allMemes[random].url
//         console.log(randomQ)

//         //passing a function to state setter with parameter of previous state
//        setMemeImg(p => ({
//         ...p,
//         randomImg : randomQ
//        }))
//       }



//   return (
//     <div className='question--card'>
//         hello
//         <div>{memesImg.text}</div>
//         <img src={memesImg.randomImg} alt="" />
//         <button onClick={generate}> change</button>
//     </div>
//   )
// }
