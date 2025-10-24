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
        <div className="w-8 h-7 mr-4 hamburger:hidden"
        onClick={()=>{
            setDropdownOpen(!dropdownOpen)
        }}>
        <div className={`bg-gray-300 ${width} ${height} mb-2`}></div>
        <div className={`bg-gray-300 ${width} ${height} mb-2`}></div>
        <div className={`bg-gray-300 ${width} ${height} mb-2`}></div>
        </div>
        <Dropdown dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen}/>
        </>
    );
    }