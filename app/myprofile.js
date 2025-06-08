'use client';

import Post from './components/post';
import Footer from './components/footer';
import '../styles/myprofile.css';
import { useEffect, useState } from 'react';

export default function MyProfilePage() {
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);
    const [stats, setStats] = useState({
        posts: 0,
        followers: 0,
        following: 0
    });
    useEffect(() => {
        // Fetch profile data
        fetch('http://localhost:3001/users/1') // Assuming user ID 1 is the current user
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                setStats({
                    posts: data.postsCount,
                    followers: data.followersCount,
                    following: data.followingCount
                });
            });
        // Fetch posts for this user
        fetch('http://localhost:3001/posts?userId=1')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    if (!profile) return <div>Loading...</div>;
    return (
        <>
            <div className="MyProfile">
                <div className="Profile">
                    <div className="Top">
                        <div className="Left">
                            <p className="BigText BoldText">{profile.username}</p>
                            <div className="Notifications">
                                <p>10+</p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={6}
                                viewBox="0 0 10 6"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="Right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={18}
                                viewBox="0 0 16 18"
                                fill="none"
                            >
                                <path
                                    d="M4.65297e-09 1.79999C4.65297e-09 1.3226 0.210714 0.864769 0.585786 0.527205C0.960859 0.189641 1.46957 0 2 0H14C14.5304 0 15.0391 0.189641 15.4142 0.527205C15.7893 0.864769 16 1.3226 16 1.79999V17.0999C16 17.2653 15.9494 17.4274 15.8538 17.5686C15.7581 17.7098 15.6211 17.8245 15.4578 17.9002C15.2944 17.9759 15.1111 18.0096 14.9278 17.9977C14.7446 17.9857 14.5685 17.9286 14.419 17.8325L8 13.706L1.581 17.8325C1.43147 17.9286 1.25542 17.9857 1.07218 17.9977C0.88894 18.0096 0.705587 17.9759 0.542245 17.9002C0.378903 17.8245 0.241886 17.7098 0.146232 17.5686C0.050577 17.4274 -1.77145e-05 17.2653 4.65297e-09 17.0999V1.79999ZM14 1.79999H2V15.3512L7.419 11.8682C7.58855 11.7593 7.79168 11.7008 8 11.7008C8.20832 11.7008 8.41145 11.7593 8.581 11.8682L14 15.3503V1.79999Z"
                                    fill="white"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                            >
                                <path
                                    d="M0 1.47826C0 1.21881 0.101594 0.969985 0.282433 0.786526C0.463271 0.603066 0.708541 0.5 0.964286 0.5H17.0357C17.2915 0.5 17.5367 0.603066 17.7176 0.786526C17.8984 0.969985 18 1.21881 18 1.47826C18 1.73771 17.8984 1.98654 17.7176 2.17C17.5367 2.35346 17.2915 2.45652 17.0357 2.45652H0.964286C0.708541 2.45652 0.463271 2.35346 0.282433 2.17C0.101594 1.98654 0 1.73771 0 1.47826ZM0 8C0 7.74055 0.101594 7.49172 0.282433 7.30827C0.463271 7.12481 0.708541 7.02174 0.964286 7.02174H17.0357C17.2915 7.02174 17.5367 7.12481 17.7176 7.30827C17.8984 7.49172 18 7.74055 18 8C18 8.25945 17.8984 8.50828 17.7176 8.69173C17.5367 8.87519 17.2915 8.97826 17.0357 8.97826H0.964286C0.708541 8.97826 0.463271 8.87519 0.282433 8.69173C0.101594 8.50828 0 8.25945 0 8ZM0.964286 13.5435H17.0357C17.2915 13.5435 17.5367 13.6465 17.7176 13.83C17.8984 14.0135 18 14.2623 18 14.5217C18 14.7812 17.8984 15.03 17.7176 15.2135C17.5367 15.3969 17.2915 15.5 17.0357 15.5H0.964286C0.708541 15.5 0.463271 15.3969 0.282433 15.2135C0.101594 15.03 0 14.7812 0 14.5217C0 14.2623 0.101594 14.0135 0.282433 13.83C0.463271 13.6465 0.708541 13.5435 0.964286 13.5435Z"
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
                            <img src={profile.profilePic} className="ProfilePic" />
                        </div>
                        <div className="StatsFrame">
                            <div className="Stats">
                                <p className="BoldText">{stats.posts}</p>
                                <p>Posts</p>
                            </div>
                            <div className="Stats">
                                <p className="BoldText">{stats.followers}</p>
                                <p>Followers</p>
                            </div>
                            <div className="Stats">
                                <p className="BoldText">{stats.following}</p>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    <p className="BoldText">{profile.fullName}</p>
                    <p>{profile.bio}</p>
                    <div className="Bottom">
                        <div className="Button EditProfile">
                            <p className="BoldText">Edit Profile</p>
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
                <div className="Sections">
                    <div className="Button Frame">
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
                    <div className="Button Frame">
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
                    <div className="Button Frame">
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
                        {posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}