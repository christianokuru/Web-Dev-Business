export function TestSection() {
    return (
        <>
            {/* DEFAULT.CSS HOLDS THE DEFAULT STYLES ONLY */}
            {/* YOU CAN ADD MORE STYLES */}
            {/* THE INDIVIDUAL COMPONENT CAN STILL BE STYLED */}
            <section>
                <div className="wrapper">
                    <div className="sect-details">
                        <h1 className="sect-title">Test Section with default <span>Gradient/Highlight</span></h1>
                        <h2 className="sect-subtitle">A bunch of texts for description</h2>
                    </div>
                    <div className="button-wrapper">
                        <button className="btn-primary">Explore</button>
                        <button className="btn-secondary">Sign Up</button>
                    </div>
                </div>
            </section>
        </>
    )
}
