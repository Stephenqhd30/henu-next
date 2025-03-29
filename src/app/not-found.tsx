import React from "react";
import Link from "next/link";
import { Button, Image } from "antd";
import { clsx } from "clsx";
import { noto_sans_sc } from "@/styles/fonts/font";

/**
 * 404 页面
 * @constructor
 */
const NoFoundPage: React.FC = () => (
		<div className="flex flex-col items-center justify-center min-h-screen  px-4">
			<div className="w-80 h-80 relative">
				{/* eslint-disable-next-line jsx-a11y/alt-text */}
				<Image src={"/asserts/404.svg"} preview={false} />
			</div>
			<h2
					className={clsx(
							"text-2xl text-gray-700",
							noto_sans_sc.className,
					)}
			>
				页面未找到
			</h2>
			<p className="text-gray-500 mt-4 text-center">
				看起来客户端组件渲染出现了一些问题 (｡•́︿•̀｡)
				<br />
				你可以尝试刷新页面，如果问题依旧，请联系站长。
			</p>
			
			<Link href="/">
				<Button type="primary" className="mt-6 px-6 py-2 text-lg">
					返回首页
				</Button>
			</Link>
		</div>
);
export default NoFoundPage;
