import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";

const HomePage = () => {

  const { query, loading, error } = useSelector((store) => store.search)

  return (
    <div className="w-full">
      <SearchBar />

      {query != '' ?
        <div className="w-full">
          <Tabs />
          <ResultGrid />

          {!loading && !error && <Footer />}
        </div>
        : ''}
    </div>
  )
}

export default HomePage