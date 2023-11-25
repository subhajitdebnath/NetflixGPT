import React, { useRef } from 'react'
import openai from '../../../utils/openAI';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../../../utils/constant';
import { addMovieSearchResult } from '../../../utils/gptSlice';

const GptSearchBar = () => {
  
  const dispatch = useDispatch();

  const searchText = useRef('');

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    console.log('hi', searchText.current.value);

    /** Make GPT API Call (Sample) */

    // const gptQuery = "Act a a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me name of five movies, comma separated like the example result given ahead. Example Result: 'Intersteller, Batman Begins, Captain Marvel'";

    // const gptResult = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    // });

    // console.log(gptResult.choices);
    // Sample GPT response
    
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + searchText.current.value, API_OPTIONS);
    const json = await data.json();

    dispatch(addMovieSearchResult(json.results));
    
    console.log(json.results);
  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => handleFormSubmit(e)}>
            <input
            ref={searchText}
             type='text'
             className='p-4 m-4 col-span-9 rounded-lg'
             placeholder='What would you like to watch today'
             />
            <button
             type='submit'
             className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar