import Story from './components/story';
import Post from './components/post';
import Footer from './components/footer';
import '../styles/randomprofile.css';

export default function RandomProfilePage() {
    return (
        <>
            <div className="MyProfile">
                <div className="Profile">
                    <div className="Top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={16}
                            viewBox="0 0 10 16"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 2L4 8L10 14L8 16L0 8L8 0L10 2Z"
                                fill="white"
                            />
                        </svg>
                        <p className="BigText BoldText">catsofvit</p>
                        <div className="Right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={17}
                                height={18}
                                viewBox="0 0 17 18"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.84315 6.6323C1.84315 4.8733 2.5445 3.18635 3.7929 1.94255C5.0413 0.698758 6.73449 0 8.5 0C10.2655 0 11.9587 0.698758 13.2071 1.94255C14.4555 3.18635 15.1568 4.8733 15.1568 6.6323V10.1986L16.8895 13.6512C16.9693 13.8101 17.007 13.9867 16.9989 14.1641C16.9909 14.3416 16.9375 14.5141 16.8437 14.6653C16.75 14.8164 16.619 14.9412 16.4632 15.0277C16.3075 15.1142 16.1321 15.1596 15.9538 15.1595H12.1841C11.9726 15.9727 11.496 16.6928 10.8292 17.207C10.1624 17.7211 9.34313 18 8.5 18C7.65686 18 6.8376 17.7211 6.1708 17.207C5.50401 16.6928 5.02744 15.9727 4.81591 15.1595H1.04623C0.867902 15.1596 0.692526 15.1142 0.53676 15.0277C0.380995 14.9412 0.250013 14.8164 0.156253 14.6653C0.0624936 14.5141 0.00907016 14.3416 0.00105681 14.1641C-0.00695654 13.9867 0.0307064 13.8101 0.110468 13.6512L1.84315 10.1986V6.6323ZM6.8529 15.1595C7.01984 15.4476 7.25994 15.6868 7.54906 15.8531C7.83819 16.0194 8.16615 16.1069 8.5 16.1069C8.83385 16.1069 9.16181 16.0194 9.45094 15.8531C9.74006 15.6868 9.98015 15.4476 10.1471 15.1595H6.8529ZM8.5 1.89494C7.23892 1.89494 6.0295 2.39405 5.13778 3.28248C4.24607 4.17091 3.74511 5.37587 3.74511 6.6323V10.1986C3.74509 10.4926 3.67639 10.7826 3.54445 11.0456L2.43181 13.2646H14.5691L13.4565 11.0456C13.3242 10.7827 13.2552 10.4927 13.2549 10.1986V6.6323C13.2549 5.37587 12.7539 4.17091 11.8622 3.28248C10.9705 2.39405 9.76108 1.89494 8.5 1.89494Z"
                                    fill="white"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={4}
                                viewBox="0 0 18 4"
                                fill="none"
                            >
                                <path
                                    d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0ZM9 0C7.9 0 7 0.9 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2C11 0.9 10.1 0 9 0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="Middle">
                        <div className="Avatar">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                className="StoryOverlay"
                            >
                                <path
                                    d="M18 0.625C27.5959 0.625 35.375 8.40405 35.375 18C35.375 27.5959 27.5959 35.375 18 35.375C8.40405 35.375 0.625 27.5959 0.625 18C0.625 8.40405 8.40405 0.625 18 0.625Z"
                                    stroke="url(#paint0_linear_65_4388)"
                                    strokeWidth="1.25"
                                    strokeLinejoin="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_65_4388"
                                        x1="39.7895"
                                        y1="3.78948"
                                        x2="1.01642e-06"
                                        y2="27.9474"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C913B9" />
                                        <stop offset="0.500947" stopColor="#F9373F" />
                                        <stop offset={1} stopColor="#FECD00" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <img src="assets/catsofvit.jpg" className="ProfilePic" />
                        </div>
                        <div className="StatsFrame">
                            <div className="Stats">
                                <p className="BoldText">63</p>
                                <p>Posts</p>
                            </div>
                            <div className="Stats">
                                <p className="BoldText">1,007</p>
                                <p>Followers</p>
                            </div>
                            <div className="Stats">
                                <p className="BoldText">653</p>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    <p className="BoldText">Cats of VIT</p>
                    <p className="LightText">Military Base</p>
                    <p>Rare wholesome VIT Vellore page</p>
                    <div className="Bottom">
                        <div className="Button Interactions">
                            <p className="BoldText">Following</p>
                        </div>
                        <div className="Button Interactions">
                            <p className="BoldText">Message</p>
                        </div>
                        <div className="Button Interactions">
                            <p className="BoldText">Email</p>
                        </div>
                        <div className="Button ProfileSettings">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={19}
                                height={19}
                                viewBox="0 0 19 19"
                                fill="none"
                            >
                                <path
                                    d="M12.0735 17.5C11.7472 16.2585 11.0277 15.1614 10.0266 14.3789C9.02549 13.5963 7.79876 13.1722 6.53675 13.1722C5.27474 13.1722 4.04801 13.5963 3.04691 14.3789C2.0458 15.1614 1.32628 16.2585 1 17.5M15.1342 7.33693V13.1739M18 10.2554H12.2684M10.3578 5.39129C10.3578 7.54039 8.64708 9.28257 6.53675 9.28257C4.42642 9.28257 2.71567 7.54039 2.71567 5.39129C2.71567 3.24219 4.42642 1.5 6.53675 1.5C8.64708 1.5 10.3578 3.24219 10.3578 5.39129Z"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="Stories">
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </div>
                <div className="Sections">
                    <div className="Button Interactions">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                        >
                            <path
                                d="M9.3 1H7.5C4.18629 1 1.5 3.68629 1.5 7V8.8M9.3 1V25M9.3 1H17.7M9.3 25H7.5C4.18629 25 1.5 22.3137 1.5 19V17.2M9.3 25H17.7M17.7 1H19.5C22.8137 1 25.5 3.68629 25.5 7V8.8M17.7 1V25M17.7 25H19.5C22.8137 25 25.5 22.3137 25.5 19V17.2M1.5 8.8H25.5M1.5 8.8V17.2M25.5 8.8V17.2M1.5 17.2H25.5"
                                stroke="white"
                                strokeWidth="1.8"
                            />
                        </svg>
                    </div>
                    <div className="Button Interactions">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                        >
                            <path
                                d="M6.95455 2.09091L11.3182 8.63636M14.5909 2.09091L18.9545 8.63636M2.59091 8.63636H24.4091M10.2273 12.4955V19.5954C10.2273 20.0461 10.7 20.3279 11.0782 20.1025L17.0345 16.5526C17.4127 16.3272 17.4127 15.7637 17.0345 15.5383L11.0782 11.9884C10.7 11.763 10.2273 12.0448 10.2273 12.4955ZM8.04545 25H18.9545C22.5695 25 25.5 22.0695 25.5 18.4545V7.54545C25.5 3.9305 22.5695 1 18.9545 1H8.04545C4.4305 1 1.5 3.9305 1.5 7.54545V18.4545C1.5 22.0695 4.4305 25 8.04545 25Z"
                                stroke="white"
                                strokeWidth="1.8"
                            />
                        </svg>
                    </div>
                    <div className="Button Interactions">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                        >
                            <path
                                d="M21.1364 23.9027C21.1364 21.4781 19.1827 19.5125 16.7727 19.5125H10.2273C7.8173 19.5125 5.86364 21.4781 5.86364 23.9027M13.2646 1.10067C13.3932 0.966443 13.6068 0.966443 13.7354 1.10067L16.6481 4.14677H23.3182C24.5231 4.14677 25.4999 5.12961 25.5 6.34185V22.8049C25.5 24.0172 24.5232 25 23.3182 25H3.68182C2.47683 25 1.5 24.0172 1.5 22.8049V6.34185C1.50009 5.12961 2.47689 4.14677 3.68182 4.14677H10.3519L13.2646 1.10067ZM17.8636 12.9273C17.8636 15.3519 15.91 17.3175 13.5 17.3175C11.09 17.3175 9.13636 15.3519 9.13636 12.9273C9.13636 10.5027 11.09 8.53716 13.5 8.53716C15.91 8.53716 17.8636 10.5027 17.8636 12.9273Z"
                                stroke="white"
                                strokeWidth="1.8"
                            />
                        </svg>
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}