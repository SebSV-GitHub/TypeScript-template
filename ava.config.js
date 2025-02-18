const config = {
	extensions: ["ts"],
	files: ["tests/**/*.test.ts"],
	nodeArguments: ["--import=tsx", "--conditions=testing"],
};

export default config;
