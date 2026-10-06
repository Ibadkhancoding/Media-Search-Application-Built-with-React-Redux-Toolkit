import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from '../redux/features/collectionSlice';
import Footer from "../components/Footer";


const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()

  const clearAllItems = () => {
    dispatch(clearCollection())
  }

  return (
    <div>
      <div className="min-h-[calc(100vh-80px)] overflow-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8 mb-20 sm:mb-30">

        {collection.length > 0 ? <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-6 sm:mb-8">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--c5)">
              Your Collection
            </h2>

            <p className="text-sm text-(--c4)/60 mt-1">
              Your saved media
            </p>
          </div>

          <button
            onClick={() => { clearAllItems() }}
            className="w-full sm:w-auto bg-(--c3) text-(--c1) px-5 py-2.5 text-sm sm:text-base font-bold rounded-lg active:scale-95 cursor-pointer hover:brightness-110 transition-all duration-200"
          >
            Clear
          </button>

        </div> : <h2 className="text-2xl sm:text-3xl font-bold text-(--c5) py-4">
          Your collection is Empty
        </h2>}

        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5'>

          {collection.map((item) => {
            return <div key={item.id}>
              <CollectionCard item={item} />
            </div>
          })}

        </div>

      </div>
        <Footer />
    </div>
  )
}

export default CollectionPage