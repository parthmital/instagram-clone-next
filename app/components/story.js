'use client';

export default function Story({ stories }) {
    return (
        <div className="Story">
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
            <p>catsofvit</p>
        </div>
    );
}