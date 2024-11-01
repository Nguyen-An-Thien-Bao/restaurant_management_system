function LoadingUI() {
    return (
        <div className="h-[calc(100vh-60px)] flex justify-center items-center">
            <div className="relative">
                <div className="custom-loader"></div>
            </div>
        </div>
    );
}

export default LoadingUI;
