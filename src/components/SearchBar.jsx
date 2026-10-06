import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text))
  }

  return (
    <div className="px-5 sm:px-8 lg:px-12 py-6 sm:py-10 bg-(--c4)">

      <form
        onSubmit={submitHandler}
        className="flex flex-col sm:flex-row max-w-5xl mx-auto gap-3"
      >

        <input
          onDoubleClick={() => { setText('') }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full bg-(--c2) text-(--c5) px-5 py-3.5 text-base sm:text-lg font-medium rounded-xl outline-none border-2 border-transparent focus:border-(--c3) placeholder:text-(--c4)/60 transition-all duration-200"
          type="text"
          placeholder='Search anything...'
        />

        <button
          className="bg-(--c3) text-(--c1) px-7 py-3.5 font-bold rounded-xl cursor-pointer active:scale-95 hover:brightness-110 transition-all duration-200"
        >
          Search
        </button>

      </form>

    </div>
  )
}

export default SearchBar