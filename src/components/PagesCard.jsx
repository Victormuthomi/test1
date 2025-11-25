import React, { useState } from "react";

// Check Icon
function Check({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PagesCard() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];
  const [selected, setSelected] = useState(new Set());
  const [all, setAll] = useState(false);

  const toggleAll = () => {
    if (all) {
      setAll(false);
      setSelected(new Set());
    } else {
      setAll(true);
      setSelected(new Set(pages.map((_, i) => i)));
    }
  };

  const togglePage = (i) => {
    if (all) return;
    setSelected((s) => {
      const next = new Set(s);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const isChecked = (i) => all || selected.has(i);

  const textStyle = {
    width: "64px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "130%",
    color: "#1F2128",
  };

  return (
    <div
      className="flex justify-center"
      style={{ marginTop: "85px", marginLeft: "104px" }}
    >
      <div
        className="bg-white flex flex-col justify-between"
        style={{
          width: "370px",
          height: "326px",
          borderRadius: "6px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#EEEEEE",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "16px",
          paddingRight: "16px",
          boxShadow: "0px 8px 15px 0px #1414141F, 0px 0px 4px 0px #1414141A",
        }}
      >
        {/* All Pages Toggle */}
        <div
          className="flex items-center justify-between cursor-pointer select-none mb-3"
          onClick={toggleAll}
        >
          <span style={textStyle}>All pages</span>
          <div
            className={`w-[25px] h-[25px] rounded-[6px] border flex items-center justify-center
              ${
                all
                  ? "bg-[#2469F6] border-[#2469F6] hover:bg-[#5087F8]"
                  : "bg-white border-gray-300 hover:border-[2px] hover:border-gray-400"
              } transition`}
          >
            {all && <Check className="w-4 h-4 text-white" />}
            {!all && (
              <Check className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
            )}
          </div>
        </div>

        <hr className="border-gray-200 mb-2" />

        {/* Pages 1–6 Vertical */}
        <div
          className="overflow-y-auto max-h-[184px] space-y-2 pr-1"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
        >
          {pages.map((label, i) => {
            const checked = isChecked(i);
            return (
              <div
                key={i}
                className="flex items-center justify-between cursor-pointer select-none group py-[6px] h-[40px]"
                onClick={() => togglePage(i)}
              >
                <span style={textStyle}>{label}</span>
                <div
                  className={`w-[25px] h-[25px] rounded-[6px] border flex items-center justify-center transition
                    ${
                      checked
                        ? "bg-[#2469F6] border-[#2469F6] hover:bg-[#5087F8]"
                        : "bg-white border-gray-300 hover:border-[2px]"
                    }`}
                  style={{
                    scrollbarColor: "transparent transparent",
                  }}
                >
                  {checked && <Check className="w-4 h-4 text-white" />}
                  {!checked && (
                    <Check className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-gray-200 mt-4 mb-4" />

        {/* Done Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center w-[340px] h-[40px] rounded-[4px] gap-[10px] bg-[#FFCE22] hover:bg-[#FFD84D] text-gray-900 font-medium transition-none"
            style={{ padding: "10px 20px 10px 10px" }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
