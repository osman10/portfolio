const AboutPage = () => {
    return (
        <div className="h-screen bg-image flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15"></div>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-white text-6xl font-jost font-bold">
                    Welcome to My Site
                </h1>
            </div>
        </div>
    );
};

export default AboutPage;