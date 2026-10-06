import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIFs } from '../api/mediaAPI'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!query) return

    const getData = async () => {

      try {

        let data = []

        dispatch(setLoading())

        if (activeTab == 'photos') {

          let response = await fetchPhotos(query)

          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }))

        }

        if (activeTab == 'videos') {

          let response = await fetchVideos(query)

          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name,
            thumbnail: item.image || 'video',
            src: item.video_files[0].link,
            url: item.url
          }))

        }

        if (activeTab == 'gif') {

          let response = await fetchGIFs(query)

          data = response.data.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.title || 'GIF',
            thumbnail: item.images.fixed_width.url,
            src: item.images.original.url,
            url: item.url
          }))

        }

        dispatch(setResults(data))

      } catch (err) {
        dispatch(setError(err.message))
      }

    }

    getData()

  }, [query, activeTab, dispatch])

  if (error)
    return (
      <h1 className='text-xl sm:text-2xl font-semibold text-center mt-20 sm:mt-30 text-(--c3) px-5'>
        Error
      </h1>
    )

  if (loading)
    return (
      <h1 className='text-xl sm:text-2xl font-semibold text-center mt-40 text-(--c4)'>
        Loading...
      </h1>
    )

  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5  pb-10 px-6 sm:px-8 lg:px-12 py-6 sm:py-8 mb-20 sm:mb-30'>

      {results.map((item) => {

        return (
          <div
            key={item.id}
            className="w-full "
          >
            <ResultCard item={item} />
          </div>
        )

      })}

    </div>
  )
}

export default ResultGrid