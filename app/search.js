import SearchResult from './components/searchresult';
import Footer from './components/footer';
import '../styles/search.css';

export default function SearchPage() {
    return (
        <>
            <div className="SearchPage">
                <div className="SearchFrame">
                    <input type="text" className="InputField" placeholder="Search" />
                    <div className="Button CancelButton">
                        <p>Cancel</p>
                    </div>
                </div>
                <div className="Searches">
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </div>
            </div>
            <Footer />
        </>
    );
}