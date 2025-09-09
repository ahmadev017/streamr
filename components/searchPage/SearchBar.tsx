import React from 'react'
import SearchInput from '../reusable/SearchInput'
import { Button } from '../ui/button'

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 mx-4">
        <SearchInput placeholder="Pick from YouTube" paddingY="3" />
        <Button 
          className="cursor-pointer" 
          size="sm" 
          variant="customOrange" 
          radius="full"
        >
          Search
        </Button>
      </div>
  )
}

export default SearchBar
