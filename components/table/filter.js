import React, { useState, useRef, useEffect } from "react";
import { useAsyncDebounce } from "react-table";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../public/search-icon.svg";
export const Filter = ({ column }) => {
  return <>{column.canFilter && column.render("Filter")}</>;
};
const StyledCounter = styled.div`
  position: absolute;
  top: -45px !important;
  right: 0 !important;
  background: lightgrey !important;
  height: 40px !important;
  border-radius: 40px !important;
  padding: 10px !important;
  &:hover > .search-txt {
    width: 250px !important;
  }
  &:hover > .search-btn {
  }
`;

const SearchTxt = styled.input`
  border: none !important;
  background: none !important;
  outline: none !important;
  float: left !important;
  padding: 0 !important;
  color: white !important;
  font-size: 16px !important;
  transition: 0.4s !important;
  line-height: 25px !important;
  width: 0px !important;
`;
const SearchButton = styled.a`
  position: relative !important;

  color: #e84118 !important;
  float: right !important;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  transition: 0.4s !important;
`;
export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const ref = useRef();
  const [refWidth, setRefWidth] = useState(0);
  useEffect(() => {
    if (ref.current) {
      setRefWidth(ref.current.parentElement.clientWidth);
    }
  }, []);

  //debounce filter state
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 1500);

  return (
    <>
      <StyledCounter ref={ref} refWidth={refWidth}>
        <SearchTxt
          className="search-txt"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`Search...`}
        />
        <SearchButton className="search-btn">
          <SearchIcon style={{ width: "1.5rem", height: "1.5rem" }} />
        </SearchButton>
      </StyledCounter>
    </>
  );
};
