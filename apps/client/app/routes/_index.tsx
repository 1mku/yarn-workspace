import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";

import { Button } from "@project/ui";

export const meta: MetaFunction = () => {
	return [{ title: "Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`${API_URL}`)
			.then((res) => res.json())
			.then((d) => setData(d));
	}, []);

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<header className="flex flex-col items-center gap-9">
					<h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
						Welcome to <span className="sr-only">Remix</span>
					</h1>
					<pre className="text-2xl font-bold text-gray-800 dark:text-gray-100">Response: {JSON.stringify(data)}</pre>
					<div className="h-[144px] w-[434px]">
						<img src="/logo-light.png" alt="Remix" className="block w-full dark:hidden" />
						<img src="/logo-dark.png" alt="Remix" className="hidden w-full dark:block" />
					</div>
					<Button>Get Started</Button>
				</header>
			</div>
		</div>
	);
}
