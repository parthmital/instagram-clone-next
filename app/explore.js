import Post from './components/post';
import Footer from './components/footer';
import '../styles/explore.css';

export default function ExplorePage() {
    return (
        <>
            <div className="ExplorePage">
                <div className="FiltersTop">
                    <div className="Button FilterTop">
                        <p className="BoldText">Explore</p>
                    </div>
                    <div className="Button FilterTop">
                        <p className="BoldText">Reels</p>
                    </div>
                    <div className="Button FilterBottom">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={17}
                            viewBox="0 0 16 17"
                            fill="none"
                        >
                            <path
                                d="M14.7556 16.5L9.15556 10.9C8.71111 11.2556 8.2 11.537 7.62222 11.7444C7.04445 11.9519 6.42963 12.0556 5.77778 12.0556C4.16296 12.0556 2.79644 11.4961 1.67822 10.3773C0.56 9.25852 0.000593063 7.892 4.70312e-07 6.27778C-0.000592122 4.66356 0.558815 3.29704 1.67822 2.17822C2.79763 1.05941 4.16415 0.5 5.77778 0.5C7.39141 0.5 8.75822 1.05941 9.87822 2.17822C10.9982 3.29704 11.5573 4.66356 11.5556 6.27778C11.5556 6.92963 11.4519 7.54444 11.2444 8.12222C11.037 8.7 10.7556 9.21111 10.4 9.65556L16 15.2556L14.7556 16.5ZM5.77778 10.2778C6.88889 10.2778 7.83348 9.88904 8.61156 9.11156C9.38963 8.33407 9.77837 7.38948 9.77778 6.27778C9.77719 5.16607 9.38844 4.22178 8.61156 3.44489C7.83467 2.668 6.89007 2.27896 5.77778 2.27778C4.66548 2.27659 3.72119 2.66563 2.94489 3.44489C2.16859 4.22415 1.77956 5.16844 1.77778 6.27778C1.776 7.38711 2.16504 8.3317 2.94489 9.11156C3.72474 9.89141 4.66904 10.2801 5.77778 10.2778Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="FiltersBottom">
                    <div className="Button FilterBottom">
                        <p>
                            Sort by <span className="BoldText">Likes</span>
                        </p>
                    </div>
                    <div className="Button FilterBottom">
                        <p>For You</p>
                    </div>
                    <div className="Button FilterBottom">
                        <p>Art</p>
                    </div>
                    <div className="Button FilterBottom">
                        <p>Cats</p>
                    </div>
                    <div className="Button FilterBottom">
                        <p>Cars</p>
                    </div>
                    <div className="Button FilterBottom">
                        <p>Music</p>
                    </div>
                    <div className="Button FilterBottom">
                        <p>Food</p>
                    </div>
                </div>
                <div className="PostsContainer">
                    <div className="PostsGrid">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}