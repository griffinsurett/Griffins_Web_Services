// social-icons.js
import React from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from '../Icon/Icon'; // Import your Icon component
import './social-icons.css'; // Assuming you have some CSS for styling

// Create a mapping of social media names to their respective URLs and icons
const socialMediaLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        icon: faFacebook,
    },
    {
        name: 'Github',
        url: 'https://www.github.com', // Fixed URL from Twitter to GitHub
        icon: faGithub,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        icon: faInstagram,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        icon: faLinkedin,
    },
];

const SocialIcons = () => {
    return (
        <div className='social-icons space'>
            <div className="social-icon flex justify-between">
                {socialMediaLinks.map((socialMedia) => (
                    <a
                        key={socialMedia.name}
                        href={socialMedia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialMedia.name} 
                        className='hover-scale'
                    >
                        <Icon 
                            icon={socialMedia.icon} 
                            size="lg" // This size can be adjusted
                            className="" // No additional class for styling
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialIcons;
