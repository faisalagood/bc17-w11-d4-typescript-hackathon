import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

type CodeSlideProps = {
	content: string;
	commentary?: string;
};

export default function CodeSlide({ content, commentary }: CodeSlideProps) {
	return (
		<div className="text-sm sm:text-base">
			<SyntaxHighlighter language="typescript" style={vscDarkPlus}>
				{content}
			</SyntaxHighlighter>
			{commentary && (
				<div className="mt-4 p-4 bg-gray-100 rounded-md">
					<h3 className="text-lg font-semibold mb-2">Commentary:</h3>
					<p className="text-gray-700">
						<ReactMarkdown className="markdown">{commentary}</ReactMarkdown>
					</p>
				</div>
			)}
		</div>
	);
}
