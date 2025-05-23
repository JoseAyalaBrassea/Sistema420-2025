/**
 * Displays a SVG sad dog face icon.
 * 
 * This component is designed to visually represent a sad face, suitable for use in applications
 * where an emotional or thematic icon is needed to convey sadness or disappointment. The icon's
 * size is set to 45x45 pixels, but this can be adjusted using CSS if the 'className' prop is utilized.
 * The SVG uses an 'evenodd' fill rule and clip rule to define complex shapes and ensure proper rendering.
 * 
 * @param {string} {className} - An optional CSS class for styling the SVG element.
 * @returns {JSX.Element} An SVG with a predefined viewbox, displaying a stylized sad dog face.
 */


export default function SadDog({className}) {
    return (
        <svg className={className} width="45" height="45" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM6 10C6 9.44772 6.44772 9 7 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H7Z"/>
        </svg>
    );
  }
  