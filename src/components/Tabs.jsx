import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

  const tabs = ['photos', 'videos', 'gif']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='flex flex-wrap justify-center sm:justify-start px-4 sm:px-8 lg:px-12 pt-7 pb-3 gap-2 sm:gap-3'>

      {tabs.map((elem, idx) => {

        return (
          <button
            className={`${activeTab == elem
              ? 'bg-(--c3) text-(--c1) shadow-lg shadow-black/20'
              : 'bg-(--c1) text-(--c4) hover:bg-(--c1)/80'
              } transition-all duration-200 px-5 py-2.5 rounded-lg cursor-pointer active:scale-95 uppercase text-sm font-bold tracking-wide border border-(--c1)`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem))
            }}
          >
            {elem}
          </button>
        )
      })}

    </div>
  )
}

export default Tabs