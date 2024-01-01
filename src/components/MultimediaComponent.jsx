const MultimediaComponent = ({ title, videoUrl, description, isReversed }) => {

    return (
      <div
        className={`flex flex-col md:flex-row items-center justify-center mb-12 ${
          isReversed && "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-5/12 p-8">
          <h2 className="text-3xl font-FjallaOne mb-4">{title}</h2>
          <p className="text-gray-700 w-10/12">{description}</p>
        </div>
        <div className="w-full flex items-center justify-center md:w-4/12 p-8">
          <iframe
            title={title}
            width="100%"
            height="280"
            src={videoUrl} // Use videoUrl directly
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default MultimediaComponent;
  