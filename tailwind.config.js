module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Scans all files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Scans all files in the components directory
    "./src/content/**/*.json", // Scans JSON content files
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Custom Gradient Background
        'gradient-custom': "linear-gradient(135deg, #f06, #4a90e2)", 
      },
    },
  },
  plugins: [],
};
