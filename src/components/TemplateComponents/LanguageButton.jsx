// src/components/LanguageButton.jsx
import React from 'react';

/**
 * @param {{ nextHref: string }} props
 */
export default function LanguageButton({ nextHref }) {
  // ① 点击处理：如果 nextHref 存在，就跳转。
  const handleClick = () => {
    if (nextHref) {
      // 原生导航：修改 pathname 会让浏览器加载新页面
      window.location.pathname = nextHref;
    }
  };

  return (
    // ② 用 button 保证可访问性，并绑定点击事件
    <button
      type="button"
      aria-label="切换语言"
      onClick={handleClick}
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer'
      }}
    >
      {/* ③ 直接把 SVG 放进来 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
      </svg>
    </button>
  );
}
