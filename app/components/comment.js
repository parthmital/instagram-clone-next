export default function Comment() {
    return (
        <div className="Comment">
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
            <div className="Description">
                <p>
                    <span className="BoldText">username</span>
                    <span className="LightText"> 3h</span>
                </p>
                <p>amazing content!</p>
                <p className="LightText">- View 2 replies</p>
            </div>
            <div className="CommentIcons">
                <div className="CommentIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={19}
                        height={16}
                        viewBox="0 0 19 16"
                        fill="none"
                    >
                        <path
                            d="M5.9 1C3.47 1 1.5 3.00868 1.5 5.4864C1.5 9.97279 6.7 14.0513 9.5 15C12.3 14.0513 17.5 9.97279 17.5 5.4864C17.5 3.00868 15.53 1 13.1 1C11.612 1 10.296 1.75331 9.5 2.90631C9.0942 2.31712 8.55518 1.83627 7.92854 1.50445C7.30191 1.17262 6.6061 0.999594 5.9 1Z"
                            stroke="white"
                            strokeOpacity="0.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p>55</p>
                </div>
                <div className="CommentIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M8.01126 0C6.96216 0 5.92334 0.206917 4.9541 0.608937C3.98486 1.01096 3.10419 1.60021 2.36237 2.34304C0.864186 3.84327 0.0225174 5.87801 0.0225174 7.99965C0.0162071 9.84676 0.654855 11.638 1.82797 13.0634L0.230225 14.6634C0.119375 14.7758 0.0442836 14.9187 0.0144264 15.0739C-0.0154309 15.2291 0.00128371 15.3896 0.062461 15.5353C0.128814 15.6792 0.236379 15.8002 0.371503 15.8828C0.506627 15.9654 0.663215 16.006 0.821391 15.9993H8.01126C10.13 15.9993 12.162 15.1565 13.6602 13.6562C15.1583 12.156 16 10.1213 16 7.99965C16 5.87801 15.1583 3.84327 13.6602 2.34304C12.162 0.842817 10.13 0 8.01126 0ZM8.01126 14.3994H2.74668L3.48963 13.6554C3.63842 13.5055 3.72194 13.3028 3.72194 13.0914C3.72194 12.8801 3.63842 12.6773 3.48963 12.5274C2.44357 11.4811 1.79216 10.104 1.64638 8.63065C1.5006 7.15732 1.86947 5.67895 2.69014 4.44742C3.51081 3.21589 4.73251 2.30738 6.1471 1.8767C7.56168 1.44601 9.08164 1.51978 10.448 2.08544C11.8144 2.6511 12.9426 3.67366 13.6405 4.97889C14.3384 6.28413 14.5627 7.79129 14.2753 9.2436C13.9879 10.6959 13.2066 12.0035 12.0644 12.9436C10.9222 13.8837 9.48979 14.3982 8.01126 14.3994Z"
                            fill="white"
                            fillOpacity="0.5"
                        />
                    </svg>
                    <p>2</p>
                </div>
            </div>
        </div>
    );
}