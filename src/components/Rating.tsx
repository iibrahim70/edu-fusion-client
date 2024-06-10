const Rating = ({ value }: { value: number }) => {
  const renderStars = () => {
    const fullStars = Math.floor(value);
    const partialStar = value % 1;
    const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="size-[22px] text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927C9.23 2.372 9.77 2.372 9.951 2.927l1.56 4.847h5.105c.555 0 .787.675.37 1.012l-4.143 3.013 1.56 4.847c.18.555-.455.992-.924.667L10 14.347l-4.143 3.013c-.469.325-1.104-.112-.924-.667l1.56-4.847-4.143-3.013c-.417-.337-.185-1.012.37-1.012h5.105l1.56-4.847z" />
        </svg>
      );
    }

    // Render partial star
    if (partialStar > 0) {
      stars.push(
        <div className="relative" key="partial">
          <svg
            className="size-[22px] text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927C9.23 2.372 9.77 2.372 9.951 2.927l1.56 4.847h5.105c.555 0 .787.675.37 1.012l-4.143 3.013 1.56 4.847c.18.555-.455.992-.924.667L10 14.347l-4.143 3.013c-.469.325-1.104-.112-.924-.667l1.56-4.847-4.143-3.013c-.417-.337-.185-1.012.37-1.012h5.105l1.56-4.847z" />
          </svg>

          <svg
            className="absolute top-0 left-0 size-[22px] text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)` }}
          >
            <path d="M9.049 2.927C9.23 2.372 9.77 2.372 9.951 2.927l1.56 4.847h5.105c.555 0 .787.675.37 1.012l-4.143 3.013 1.56 4.847c.18.555-.455.992-.924.667L10 14.347l-4.143 3.013c-.469.325-1.104-.112-.924-.667l1.56-4.847-4.143-3.013c-.417-.337-.185-1.012.37-1.012h5.105l1.56-4.847z" />
          </svg>
        </div>
      );
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={i + fullStars + 1}
          className="size-[22px] text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927C9.23 2.372 9.77 2.372 9.951 2.927l1.56 4.847h5.105c.555 0 .787.675.37 1.012l-4.143 3.013 1.56 4.847c.18.555-.455.992-.924.667L10 14.347l-4.143 3.013c-.469.325-1.104-.112-.924-.667l1.56-4.847-4.143-3.013c-.417-.337-.185-1.012.37-1.012h5.105l1.56-4.847z" />
        </svg>
      );
    }

    return stars;
  };

  return <div className="flex gap-x-0.5">{renderStars()}</div>;
};

export default Rating;
