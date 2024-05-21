import React from "react";

const Footer = () => {
    return (
        <div
            style={{
                height: "150px",
                width: "100%",
                background: "#1E3A8A", // Dark Blue, matching the navbar
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                padding: "20px 0",
                boxSizing: "border-box",
            }}
        >
            <div style={{ marginBottom: "10px" }}>
                <a href="/" style={linkStyle}>Home</a>
                <a href="/translate" style={linkStyle}>Translate</a>
                <a href="/resources" style={linkStyle}>Resources</a>
                <a href="/community" style={linkStyle}>Community</a>
                <a href="/about" style={linkStyle}>About</a>
                <a href="/contact" style={linkStyle}>Contact</a>
            </div>
            <div>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div style={{ marginTop: "10px" }}>
                <p style={{ margin: 0 }}>&copy; 2024 VocabVoyage. All Rights Reserved.</p>
            </div>
        </div>
    );
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
    fontFamily: "sans-serif",
};

const iconStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "24px",
};

export default Footer;
