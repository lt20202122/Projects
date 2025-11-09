import Dropdown from './Dropdown'
export interface dropdownType {
    dropdownOpen:boolean,
    setDropdownOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hamburger({dropdownOpen, setDropdownOpen}:dropdownType) {
    const width = "w-8";
    const height = "h-1";

    return (
        <>
            <button 
                className="w-8 h-7 mr-1 flex flex-col justify-between cursor-pointer hamburger:hidden z-50"
                onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                    console.log("Dropdown opened/closed:", !dropdownOpen)
                }}
                aria-label="Menu"
            >
                <div className={`bg-gray-300 ${width} ${height}`}></div>
                <div className={`bg-gray-300 ${width} ${height}`}></div>
                <div className={`bg-gray-300 ${width} ${height}`}></div>
            </button>
            
            <Dropdown dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen}/>
        </>
    );
}