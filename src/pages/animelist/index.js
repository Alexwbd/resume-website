import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import Layout from '../components/Layout';

 const isEqual =(prevProps, nextProps) =>{
   if (prevProps.showHeader === prevProps.showHeader){
     return true
   }else if (prevProps.showHeader === nextProps.showHeader)
  {
     return false
   }
 }
const AnimeList = () => {
  const [isHidden, setIsHidden] = React.useState(false)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  const [selectedAnime, setSelectedAnime] = React.useState(null)
  const blurr = {
      filter: isHidden ? "blur(4px)" : ""
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://kitsu.io/api/edge/anime');
      setData(result.data.data);
      setIsLoading(false);
      setIsPageLoaded(true)
    };
    fetchData();
  }, []);
  function onClicker(anime){
    setIsHidden(prevState => !prevState)
    setSelectedAnime(anime)
  }
const exit =() =>{
  setIsHidden(prevState => !prevState)
  setSelectedAnime(null)
}
console.log(data)

  return (
    <>
    {isPageLoaded && ( <Layout showHeader={false}>
     {isLoading ? (
        <div>Loading...</div>
      ) : (
     <div  className="
      overflow-x-hidden
        grid
        grid-cols-2
        relative
        mt-11
      ">
        {data.map((anime)=> {
          const imageUrl = anime.attributes.coverImage
            ? anime.attributes.coverImage.small
            : anime.attributes.posterImage.small;
          const averageRating = Math.round(anime.attributes.averageRating)
          const sumRating = averageRating / 10
          const firstDate = anime.attributes.startDate
          const showDateFirst =firstDate.split("-")[0]
          
          return <motion.div style={blurr} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} 
           className="
          pb-4
          flex
          flex-col
          items-center
          text-center
          "
            key={anime.id} >
              <div className="group w-full h-full flex justify-center" onClick={() => onClicker(anime)}>
                <div className="relative w-2/3">
                  <img className="w-full h-40 object-cover group-hover:opacity-70" src={imageUrl} />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer">
                    <p className="text-3xl text-gray-100">Read Description</p>
                  </div>
                </div>
              </div>
            <h1 className="
              text-sm
              lg:text-lg
              w-3/4
            ">
              {anime.attributes.canonicalTitle  + ` (${showDateFirst})`}
            </h1>
    
    
            <p className="">
              {sumRating}/10
              <span className="
                text-yellow-400
              ">
                &#9733;
              </span>
            </p>
          </motion.div>
        })}
    
        {selectedAnime && (
          <div
    
          className="
          inset-0
          flex
          justify-center
          bg-overlay
          absolute
          "
    
          >
            <motion.div
             initial={{opacity: 0, scale:0.1}} animate={{opacity:1, scale:1.0}}  exit={{opacity:0, scale:0.1}} 
            className="
            p-4
            flex
            flex-col
            items-center
            absolute
             top-0
             sm:pt-2" >
              <h1 className="text-3xl sm:ml-3 sm:text-xl "> {selectedAnime.attributes.canonicalTitle}</h1>
              <div className="relative flex flex-col items-center">
                <img src={selectedAnime.attributes.posterImage.small} alt={selectedAnime.attributes.canonicalTitle} className=" mb-4 object-contain rounded-1g sm:w-1/2 sm:mt-3"/>
                <button onClick={exit} className="
                absolute
                -right-20
                text-4xl
                hover:text-gray-600
                
                sm:-right-1 ">&#10005;</button>
              </div>
              <p className="   sm:p-0 sm:break-all px-5">{selectedAnime.attributes.description}</p>
            </motion.div>
          </div>
        )}
      </div>
    
      )}
  </Layout>)}
  </>
)}

// export const getStaticProps = async () => {
//   const data = await Axios.get("https://kitsu.io/api/edge/anime");
//   return {
//     props:{
//       animeData: data.data,
//     }, 
//   }
// }

 export default React.memo(AnimeList, isEqual);
// export default AnimeList;
