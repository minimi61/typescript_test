import React, {useRef} from 'react';

interface props {
  text: string;
  // setText: Dispa
}

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="w-80 space-x-2 rounded-md border-[1px] p-3 text-sm text-gray-400 duration-150 focus-within:border-blue-400  hover:border-blue-400"
    >
      <button>🐬</button>
      <input
        autoFocus
        ref={inputRef}
        type='text'
        placeholder='검색어를 입력하세요'
        className='w-[80%'
      />

    </div>
  );
};

export default Search;