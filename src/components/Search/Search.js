import React, { useCallback } from 'react';
import { Input } from 'antd';

const { Search: SearchComponent } = Input;

export const Search = () => {
  const handleSearch = useCallback(() => {}, []);

  return (
    <SearchComponent
      placeholder="Search by title"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={handleSearch}
    />
  );
};
