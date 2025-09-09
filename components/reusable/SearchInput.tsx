import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

interface inputProps {
  placeholder: string
  paddingY?: string
}

const SearchInput: React.FC<inputProps> = ({ placeholder, paddingY = "2" }) => {
  return (
    <div className="relative flex-1 sm:w-sm md:w-md lg:w-lg bg-secondary transition-colors duration-300 rounded-full">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
      <Input
        className={`rounded-full pl-12 py-${paddingY}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchInput

