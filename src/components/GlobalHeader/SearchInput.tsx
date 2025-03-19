"use client";

import React, { useState } from "react";
import { Input, theme } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { clsx } from "clsx";
import styles from "@/styles/search/SearchInput.module.scss";
import { useRouter } from "next/navigation";

interface Props {
  onSearch?: (searchText: string) => void;
}

// 初始化搜索参数
const initialSearchParams: API.SearchRequest = {
  searchText: undefined,
  type: "",
};

const SearchInput: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const router = useRouter();
  const { token } = theme.useToken();
  const [searchParams, setSearchParams] =
    useState<API.SearchRequest>(initialSearchParams);

  /**
   * 处理搜索
   */
  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchParams.searchText || "");
    } else {
      // 去除多余的空格
      const searchQuery = searchParams.searchText?.trim() || "";
      if (searchQuery) {
        router.push(
          `/search?type=${initialSearchParams.type}&searchText=${encodeURIComponent(searchQuery)}`,
        );
      } else {
        // 如果搜索文本为空，跳转到默认搜索页面
        router.push(`/search?type=${initialSearchParams.type}`);
      }
    }
  };

  return (
    <div
      className={clsx("relative w-full max-w-xs", styles.searchInput)}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent shadow-none hover:border-transparent hover:shadow-none"
        style={{ transition: "none", backgroundColor: "transparent" }}
        prefix={
          <SearchOutlined
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            style={{ color: token.colorTextLightSolid }}
          />
        }
        placeholder="搜索..."
        variant="borderless"
        onChange={(e) =>
          setSearchParams({ ...searchParams, searchText: e.target.value })
        }
        onPressEnter={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
