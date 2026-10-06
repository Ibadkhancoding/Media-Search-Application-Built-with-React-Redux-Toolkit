import { useDispatch } from 'react-redux';
import { removeCollection, removedToast } from '../redux/features/collectionSlice';

const CollectionCard = ({ item }) => {

  const dispatch = useDispatch()

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id))
    dispatch(removedToast())
  }

  return (
    <div className='relative w-full h-80 sm:h-85 lg:h-80 bg-(--c1) rounded-xl overflow-hidden group border border-white/5 shadow-lg shadow-black/20 mb-5 sm:mb-0'>

      <a target='_blank' href={item.url}>

        {item.type == 'photo' ?
          <img
            loading="lazy"
            className="w-full h-full object-cover bg-center group-hover:scale-105 transition-transform duration-500"
            src={item.thumbnail}
          /> : ''}

        {item.type == 'video' ?
          <video
            preload='none'
            autoPlay
            loop
            muted
            className="w-full h-full object-cover bg-center group-hover:scale-105 transition-transform duration-500"
            src={item.src}
          /> : ''}

        {item.type == 'gif' ?
          <img
            loading="lazy"
            className="w-full h-full object-cover bg-center group-hover:scale-105 transition-transform duration-500"
            src={item.thumbnail}
          /> : ''}

      </a>

      <div
        id="bottom"
        className="flex justify-between items-end gap-3 w-full px-4 sm:px-5 py-5 sm:py-6 absolute bottom-0"
      >

        <h2 className="font-semibold text-sm sm:text-base capitalize h-12 overflow-hidden leading-6 text-(--c5)">
          {item.title}
        </h2>

        <button
          onClick={() => {
            removeFromCollection(item)
          }}
          className="shrink-0 bg-(--c3) text-(--c1) rounded-lg px-3 py-2 font-bold text-sm cursor-pointer active:scale-95 hover:brightness-110 transition-all duration-200"
        >
          Remove
        </button>

      </div>
    </div>
  )
}

export default CollectionCard