const Avatar = () => {
    const photoURL =
        "https://res.cloudinary.com/atapas/image/upload/v1721647736/youtube/logo/YT-800-D_-_Bangla_px6glg.png";
    const description = "tapaScript বাংলা";

    const height = "200px";
    const width = "200px";

    const today = new Date();

    function getDay(date) {
        return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
            date
        );
    }

    const styleNames = {
      backgroundColor: "green",
      color: "black"
    }

    return (
        <>
            <p style={styleNames}>Today is {getDay(today)}</p>
            
            <img
                width={width}
                height={height}
                src={photoURL}
                alt={description}
            />
        </>
    );
};

export default Avatar;
