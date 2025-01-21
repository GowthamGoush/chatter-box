import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Search({ filterText, setFilterText }) {
  return (
    <div className="Search flex items-center px-3 py-2">
      <div className="InputWrapper bg-color2 w-full px-3 py-1.5 flex items-center rounded-lg mr-3">
        <div className="Icon relative cursor-pointer text-icon mr-2">
          <div
            className={`transition-all ${
              !filterText.length > 0
                ? "rotate-0 opacity-100"
                : "rotate-[135deg] opacity-0"
            }`}
          >
            <SearchOutlinedIcon />
          </div>
          <div
            onClick={() => setFilterText("")}
            className={`absolute left-0 top-0 text-[#00a884] transition-all ${
              !filterText.length > 0
                ? "opacity-0 scale-[.8] rotate-[225deg]"
                : "scale-100 opacity-100 rotate-0"
            }`}
          >
            <ArrowBackOutlinedIcon />
          </div>
        </div>
        <div className="Input w-full">
          <input
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
            className="w-full bg-[transparent] outline-none placeholder:text-icon placeholder:text-[14px] text-[#d1d7db] text-[15px]"
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="cursor-pointer text-icon">
        <FilterListOutlinedIcon />
      </div>
    </div>
  );
}
