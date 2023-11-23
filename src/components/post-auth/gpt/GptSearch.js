import React from 'react'
import GptSearchBar from './GptSearchBar';
import { GptMovieSuggestions } from './GptMovieSuggestions';
import { BG_COVER } from '../../../utils/constant';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute brightness-50 bg-cover -z-10'>
            <img
             src={BG_COVER}
             alt='bg img'
            />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;